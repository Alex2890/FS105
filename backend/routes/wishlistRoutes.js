import express from 'express'
import { getAllWishListProducts, addProduct, deleteWishlistItem } from '../controllers/wishlistController.js'


const router = express.Router()

//get all products from wishlist
router.get("/", getAllWishListProducts)


//post prouct into wishlist
router.post("/addwishlist", addProduct)

//delete product from wishlist
router.delete('/:id', deleteWishlistItem)

export default router;