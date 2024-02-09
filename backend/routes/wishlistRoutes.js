import express from 'express'
import { getAllWishListProducts, addProduct } from '../controllers/wishlistController.js'


const router = express.Router()

//get all products from wishlist
router.get("/", getAllWishListProducts)


//post prouct into wishlist
router.post("/addwishlist", addProduct)

export default router;