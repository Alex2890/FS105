import mongoose from "mongoose";
import itemInfo from "../models/itemModels.js";


//GET all products data

const getProducts = async (req, res) => {

    try {
        const products = await itemInfo.find({}).sort({ createdAt: -1 })
        res.status(200).json(products)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//GET a single product

const singleProduct = async (req, res) => {
    try {

        const{id} = req.params
        const product = await itemInfo.findById(id)

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export { getProducts, singleProduct };