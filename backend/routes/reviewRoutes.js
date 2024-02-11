// Import necessary modules and controllers
import express from 'express';
import * as reviewController  from '../controllers/reviewController.js';
// Create a router
const router = express.Router();

// GET all reviews
router.get('/', reviewController.getAllReviews);

// POST user reviews
router.post('/', reviewController.addReview);

// Export the router
export default router;
