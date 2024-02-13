import express from 'express'
import { getAllUsers, createUser, loginUser, deleteUser, forgotPassword, resetPassword, logoutUser, updateUser, getUserCart, addProductToCart, updateProductInCart, removeProductFromCart } from '../controllers/userController.js'
import authenticateToken from '../middleware/authenticateToken.js';

const router = express.Router()

// USER Routes

//GET all users
router.get('/',getAllUsers)

//POST create user/sign up user
router.post('/register',createUser)

//POST login user
router.post('/login',loginUser)

//DELETE user
router.delete('/:id', deleteUser)

// POST forgot password
router.post('/forgot-password', forgotPassword);

// PATCH reset password
router.patch('/reset-password', resetPassword);

//GET logout user
router.get('/logout', logoutUser)

//PATCH update user
router.patch('/update/:id', updateUser)

// CART Routes

//POST for user's cart
router.post('/cart/add-to-cart', authenticateToken, addProductToCart)

//GET for user's cart
router.get('/cart', authenticateToken, getUserCart)

//PATCH for specific item
router.patch('/cart/items/:itemId', authenticateToken, updateProductInCart) // Update specific cart item

//Delete for specific item
router.delete('/cart/items/:itemId', authenticateToken, removeProductFromCart) // Remove specific cart item

export default router