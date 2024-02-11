import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  comment: { type: String, required: true },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;
