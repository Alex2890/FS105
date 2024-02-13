import Review from '../models/reviewModels.js';

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({}).sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addReview = async (req, res) => {
  const { user, rating, comment } = req.body;
  try {
    const newReview = new Review({ user, rating, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getReviews, addReview };
