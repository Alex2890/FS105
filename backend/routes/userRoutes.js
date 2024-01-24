import express from 'express'
import { getAllUsers, createUser, loginUser, deleteUser } from '../controllers/userController.js'

const router = express.Router()

//GET all users
router.get('/',getAllUsers)

//POST create user/sign up user
router.post('/register',createUser)

//POST login user
router.post('/login',loginUser)

//DELETE user
router.delete('/:id', deleteUser)
export default router