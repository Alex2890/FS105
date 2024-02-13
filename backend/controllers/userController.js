import itemInfo from '../models/itemModels.js';
import userAccount from "../models/userModels.js";
import validator from "validator";
import bcrypt from "bcrypt";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()


const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

// Adds a product to the user's shopping cart
const addProductToCart = async (req, res) => {
  const userId = req.user.id; // Assuming user ID is extracted from JWT
  const { itemId, quantity = 1 } = req.body;
  try {
      const user = await userAccount.findById(userId);
      const item = await itemInfo.findById(itemId);
      if (!user) return res.status(404).json({ message: 'User not found' });
      if (!item) return res.status(404).json({ message: 'Item not found' });

      // Check if the item is already in the cart
      const itemIndex = user.cart.findIndex(cartItem => cartItem.item.toString() === itemId);
      if (itemIndex > -1) {
          // Update quantity if item exists
          user.cart[itemIndex].quantity += quantity;
      } else {
          // Add new item to cart
          user.cart.push({ item: itemId, quantity });
      }
      await user.save();
      res.json({ message: 'Item added to cart', cart: user.cart });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Retrieves the user's shopping cart
const getUserCart = async (req, res) => {
  try {
      // Assuming you have a User model where each user has a cart
      const user = await userAccount.findById(req.user.id).populate('cart.item');
      if (!user) {
          return res.status(404).send('User not found');
      }
      res.json(user.cart);
  } catch (error) {
      res.status(500).send("Server error");
  }
};

// Updates a product quantity in the user's shopping cart
const updateProductInCart = async (req, res) => {
  const userId = req.user.id; // Assuming user ID is extracted from JWT
  const { itemId, quantity } = req.body; // Quantity can be adjusted here
  try {
      const user = await userAccount.findById(userId);
      const item = await itemInfo.findById(itemId);
      if (!user) return res.status(404).json({ message: 'User not found' });
      if (!item) return res.status(404).json({ message: 'Item not found' });

      const itemIndex = user.cart.findIndex(cartItem => cartItem.item.toString() === itemId);
      if (itemIndex > -1) {
          // Update quantity if item exists
          user.cart[itemIndex].quantity = quantity; // Set the new quantity
      } else {
          return res.status(404).json({ message: 'Item not in cart' });
      }
      await user.save();
      res.json({ message: 'Cart updated', cart: user.cart });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Removes a product from the user's shopping cart
const removeProductFromCart = async (req, res) => {
  const userId = req.user.id; // Assuming user ID is extracted from JWT
  const { itemId } = req.body;
  try {
      const user = await userAccount.findById(userId);
      if (!user) return res.status(404).json({ message: 'User not found' });

      const itemIndex = user.cart.findIndex(cartItem => cartItem.item.toString() === itemId);
      if (itemIndex > -1) {
          // Remove item if exists
          user.cart.splice(itemIndex, 1);
      } else {
          return res.status(404).json({ message: 'Item not in cart' });
      }
      await user.save();
      res.json({ message: 'Item removed from cart', cart: user.cart });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// JWT for maintaining user sessions after login
function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, async (err, userData) => {
      if (err) {
        // If the token has expired or is invalid, reject the promise
        reject(err);
      } else {
        // If the token is good, resolve the promise with the userData
        resolve(userData);
      }
    });
  });
}

// Forgot password controller
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userAccount.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }

    // Generate token and set expiration
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now

    await user.save();

    // Send email
    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
    const message = `You are receiving this email because you (or someone else) requested a password reset for your account. Please go to the following URL to reset your password: ${resetUrl}`;

    await sendEmail({
      email: user.email,
      subject: "Password Reset Request",
      message,
    });

    res.status(200).json({ message: "Email sent." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error in sending email." });
  }
};

// Reset password controller
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await userAccount.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: "Token is invalid or has expired." });
    }

    // Set the new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error resetting password." });
  }
};

//get all users from the database

const getAllUsers = async (req, res) => {
  try {
    const users = await userAccount.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//POST a user into the database "sign up"

const createUser = async (req, res) => {
  const {
    email,
    password,
    password1,
    firstName,
    lastName,
    address,
    city,
    province,
    postalCode,
  } = req.body;

  try {
    const exists = await userAccount.findOne({ email });

    if (exists) {
      throw Error("Email already in use");
    }

    //validation
    if (
      !email ||
      !password ||
      !password1 ||
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !province ||
      !postalCode
    ) {
      throw Error("All fields must be filled");
    }

    if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
    }

    if (!validator.isStrongPassword(password)) {
      throw Error("Password is not strong enough");
    }

    if (!validator.isNumeric(postalCode)) {
      throw Error("Postal Code has to be in numbers");
    }

    //password match? for user validation
    if (password !== password1) {
      throw Error("Passwords do not match");
    }

    const salt = await bcrypt.genSalt(10); //number of rounds for salt
    const hash = await bcrypt.hash(password, salt);

    const user = await userAccount.create({
      email,
      password: hash,
      password1: hash,
      email,
      firstName,
      lastName,
      address,
      city,
      province,
      postalCode,
      role: "user",
    });
    res.status(200).json({ message: "registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//POST login user

const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    //validation
    if (!email || !password) {
      throw Error("All fields must be filled");
    }

    //to find valid email in the database
    const user = await userAccount.findOne({ email });
    console.log(user)

    if (!user) {
      throw Error("Email cannot be found in the database");
    }

    //password is plain text, user.password is based passsword in the database
    const match = bcrypt.compareSync(password, user.password);

    if (!match) {
      // res.status(400).json({message:"inccorecet passowrd ooo"})
      // res.status(400).json({message:'incorrect password'})
      throw Error("Incorrect password");
    }

    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      jwtSecret,
      { expiresIn: '1d' }, // Adjust the expiresIn according to your needs
      (err, token) => {
        if (err) throw err;
        // Set cookie to expire in 1 days
        const cookieOptions = {
          httpOnly: true,
          expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) // 1 days in milliseconds
        };
        // res.cookie("token", token, cookieOptions).json(user.firstName);
        res.cookie("token", token, cookieOptions).status(200).json({ token, user });

      }
    );

    // res.status(200).json({token})

    //Ridwan's code below----------------------------------------------------------------------------
    // const token = jwt.sign({ email: user.email }, process.env.SECRET, { expiresIn: '1d' })

    // res.status(200).json({ email, token, role: user.role, id:user._id, message: "it is working" });
    //-------------------------------------------------------------------------------------------------
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete existing user

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await userAccount.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: "No existing user in the database" });
  }

  res.status(200).json({ user, message: "user has been deleted successfully" });
  console.log(`User with ID ${user._id} has been deleted successfully`);
};


//GET logout user

const logoutUser = async (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: "user has been logged out successfully" });

}


//PATCH update the user account

const updateUser = async (req, res) => {

  try {

    const { id } = req.params


    // logic starts here
    let email = req.body.email
    let password = req.body.password
    let password1 = req.body.password1
    let postalCode = req.body.postalCode
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let province = req.body.province
    let city = req.body.city
    let address = req.body.address

    const userAcc = await userAccount.findOne({ email });
    console.log(userAcc)

    console.log(postalCode)
    postalCode = postalCode.toString()

    // const exists = await userAccount.findOne({ email });
    // console.log(exists)

    // if (exists ) {
    //   throw Error("Email already in use");
    // }

    // Check if the email exists in the database, excluding the current user
    const existingUser = await userAccount.findOne({ email, _id: { $ne: id } });

    if (existingUser) {
      throw Error("Email already in use");
    }


    if (email) {
      if (!validator.isEmail(email)) {
        throw Error("Email is not valid");
      }
    }

    if (password) {
      if (!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough");
      }
    }

    if (postalCode) {
      if (!validator.isNumeric(postalCode)) {
        throw Error("Postal Code has to be in numbers");
      }
    }





    // password match? for user validation
    if (password !== password1) {
      throw Error("Passwords do not match");
    }


    // const salt = await bcrypt.genSalt(10); //number of rounds for salt
    // const hashed = await bcrypt.hash(password, salt);

    // password = hashed
    // password1 = hashed


    if (password == !userAcc.password) {
      const salt = await bcrypt.genSalt(10); //number of rounds for salt
      const hashed = await bcrypt.hash(password, salt);

      password = hashed
      password1 = hashed
    } else {
      console.log("password remains unchanged")
    }





    const user = await userAccount.findByIdAndUpdate({ _id: id }, { firstName, lastName, email, address, city, postalCode, province, password, password1 }, { new: true })

    if (!user) {
      return res.status(400).json({ error: "No such user" })
    }


    res.status(200).json({ user, message: "Update successfully" })

  } catch (error) {

    res.status(500).json({ message: error.message })
  }

}

export { getAllUsers, createUser, loginUser, deleteUser, getUserDataFromReq, logoutUser, updateUser,  addProductToCart, getUserCart, updateProductInCart, removeProductFromCart };
