import { getProducts, singleProduct } from "../controllers/productsController.js";
import express from 'express'

const router = express.Router()
//GET all products route

router.get('/', getProducts)

//GET single product
router.get('/:id', singleProduct)

export default router