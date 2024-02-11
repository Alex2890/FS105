import mongoose from "mongoose";
import Review from "../models/reviewModels.js";

const getAllReviews = async (req, res) => {
    try {
      const reviews = await Review.find().sort({ createdAt: -1 });
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Add a new review
  const addReview = async (req, res) => {
    try {
      const { user, rating, comment } = req.body;
      const newReview = new Review({ user, rating, comment }); // Include productId
      await newReview.save();
      res.status(201).json({ message: 'Review added successfully', review: newReview });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export { getAllReviews, addReview };



  



