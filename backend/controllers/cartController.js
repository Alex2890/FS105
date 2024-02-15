import mongoose from "mongoose";
import cartModels from "../models/cart.js";

//POST item to cart

const addItemToCart = async (req, res) => {

    try {
        
        let {
            user_id,
            bagName,
            description,
            image,
            price,
            quantity = 1
        } = req.body;

        const item = await cartModels.create({user_id, bagName, description, image, price, quantity})
        res.status(200).json({item, message:'item is added into cart'})

    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


//GET items form cart

const getItems = async(req,res) => {

    try {
        const items = await cartModels.find({}).sort({createdAt:-1})
        res.status(200).json(items)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


export {addItemToCart, getItems}