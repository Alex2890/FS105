import Review from '../models/reviewModels.js';

const getReviews = async (req, res) => {
  try {
    const { bagName } = req.params;
    const reviews = await Review.find({item: bagName}).sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const getReviews = async (req, res) => {
//     try {
//       const { bagName } = req.query;
//       // Assuming 'bagName' is a field in the 'itemInfo' collection
//       const reviews = await Review.find()
//         .populate({
//           path: 'item',
//           match: { bagName }, // Apply the filter based on 'bagName'
//         })
//         .sort({ createdAt: -1 });
//       res.status(200).json(reviews);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };
  

const addReview = async (req, res) => {    
  const { user, rating, comment, item } = req.body;
  try {
    const newReview = new Review({ user, rating, comment, item });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getReviews, addReview };

