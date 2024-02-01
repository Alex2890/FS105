import mongoose from "mongoose";
import { getProducts } from "../controllers/productsController.js";
import express from 'express'

const router = express.Router()
//GET all products route

router.get('/', getProducts)

export default router