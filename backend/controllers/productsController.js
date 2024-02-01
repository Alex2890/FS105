import mongoose from "mongoose";
import itemInfo from "../models/itemModels.js";


//GET all products data

const getProducts = async (req, res) => {

    try {
        const products = await itemInfo.find({}).sort({ createdAt: -1 })
        res.status(200).json(products)

    } catch (error) {
        res.statis(400).json({error: error.message})
    }

}

export {getProducts};