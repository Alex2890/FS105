import mongoose from "mongoose";
import itemInfo from "../models/itemModels.js";

// Controller for handling product operations

// Get all products data
const getProducts = async (req, res) => {
    try {
        const products = await itemInfo.find({}).sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single product by ID
const singleProduct = async (req, res) => {
   
    try {
        const{bagName} = req.params
        console.log(bagName)
        const product = await itemInfo.findOne({bagName})

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { getProducts, singleProduct };
