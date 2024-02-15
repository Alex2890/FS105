import express from 'express'
import { addItemToCart, getItems } from '../controllers/cartController.js'


const router = express.Router()

//POST item to cart (route)
router.post('/', addItemToCart)


//GET item from cart (route)
router.get('/', getItems)


export default router