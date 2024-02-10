import mongoose from "mongoose";

//schema to define structure of user models in the database

const Schema = mongoose.Schema

const cartItemSchema = new Schema({
    item: {
      type: Schema.Types.ObjectId,
      ref: 'itemInfo',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      default: 1
    },
    bagName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  });

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unqiue: true
    },

    password: {
        type: String,
        required: true,
    },

    password1: {
        type: String,
        required: true,
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    }, 
    
    address: {
        type: String,
        required: true
    },

    city: {
        type:String,
        required:true
    },

    province: {
        type:String,
        required:true
    },

    postalCode: {
        type:Number,
        required:true
    },
    
    resetPasswordToken: {
        type: String,
        required: false,
    },

    resetPasswordExpires: {
        type: Date,
        required: false,
    },
    role:{
        type:String,   
    },

    cart: [cartItemSchema]
        type:String,  
        require:false, 
    }

  
})

const userAccount = mongoose.model('userAccount', userSchema)

export default userAccount;