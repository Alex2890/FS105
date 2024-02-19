import express from 'express'
import { addItemToCart, deleteItem, getItems, updateCart } from '../controllers/cartController.js'


const router = express.Router()

//POST item to cart (route)
router.post('/', addItemToCart)


//GET item from cart (route)
router.get('/:id', getItems)

//delete item from cart(route)
router.delete('/:id', deleteItem)

//Patch update cart items(route)
router.patch('/:id', updateCart)


export default router