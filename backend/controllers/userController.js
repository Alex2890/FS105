import userAccount from "../models/userModels.js";
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";



//get all users from the database

const getAllUsers = async (req, res) => {
    try {

        const users = await userAccount.find({}).sort({ createdAt: -1 })
        res.status(200).json(users)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//POST a user into the database "sign up"

const createUser = async (req, res) => {
    const { email, password, password1, firstName, lastName, address, city, province, postalCode } = req.body

    try {

        const exists = await userAccount.findOne({ email })

        if (exists) {
            throw Error("Email already in use")
        }

        //validation
        if (!email || !password || !password1 || !firstName || !lastName || !address || !city || !province || !postalCode) {
            throw Error("All fields must be filled")
        }

        if (!validator.isEmail(email)) {
            throw Error("Email is not valid")
        }

        if (!validator.isStrongPassword(password)) {
            throw Error("Password is not strong enough")
        }

        if (!validator.isNumeric(postalCode)) {
            throw Error("Postal Code has to be in numbers")
        }

        //password match? for user validation
        if (password !== password1) {
            throw Error("Passwords do not match")
        }





        const salt = await bcrypt.genSalt(10) //number of rounds for salt
        const hash = await bcrypt.hash(password, salt)

        const user = await userAccount.create({ email, password: hash, password1: hash, email, firstName, lastName, address, city, province, postalCode })
        res.status(200).json({ message: "registered successfully", user })

    } catch (error) {

        res.status(400).json({ error: error.message })
    }
}

//POST login user

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {

        //validation
        if (!email || !password) {
            throw Error("All fields must be filled")
        }

        //to find valid email in the database
        const user = await userAccount.findOne({ email })

        if (!user) {
            throw Error("Email cannot be found in the database")
        }

        //password is plain text, user.password is based passsword in the database
        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            // res.status(400).json({message:"inccorecet passowrd ooo"})
            // res.status(400).json({message:'incorrect password'})
            throw Error("Incorrect password")

        }

        res.status(200).json({ message: "successfully logged in" })

        return user

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete existing user

const deleteUser = async (req, res) => {

    const {id} = req.params

    const user = await userAccount.findOneAndDelete({_id: id})

    if(!user){
        return res.status(400).json({error:"No existing user in the database"})
    }

    res.status(200).json({user, message:"user has been deleted successfully"})
    console.log(`User with ID ${user._id} has been deleted successfully`)

}

export { getAllUsers, createUser, loginUser, deleteUser }