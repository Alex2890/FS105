import React, { useState, useEffect } from 'react';
import Rating from 'react-rating-stars-component';
import axios from 'axios';
import user111 from '../images/reviews/user.png';
import { useParams, Link } from 'react-router-dom';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);
    const [user, setUser] = useState('');
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const [userHasReviewed, setUserHasReviewed] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const {bagName} = useParams();

    const fetchReviews = async () => {
        try {
            const response = await axios.get(`/api/reviews/${bagName}`);
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        fetchReviews(); // Call fetchReviews when the component mounts
    }, []);

    useEffect(() => {
      // Check if the user has already reviewed when reviews or user change
      const hasReviewed = reviews.some(review => review.user === user);
      setUserHasReviewed(hasReviewed);
  }, [reviews, user]);

  const handleAddReview = async (e) => {
      e.preventDefault();
      
      if (userHasReviewed) {
          // User has already reviewed, prevent adding a new review
          setModalMessage('You have already reviewed this product.');
          return;
      }

      try {
        await axios.post(`/api/reviews`, { user, rating, comment, item: bagName });
        fetchReviews();
        setUser('');
        setRating(5);
        setComment('');
        setModalMessage('Thanks for your review!');
    } catch (error) {
        console.error('Error adding review:', error);
        setModalMessage('Internal server error. Please try again later.');
    }
};


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto">
        <div>
          <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li key={index} className="flex items-center space-x-4">
                <img src={user111} alt={user.png}  className="w-8 h-8 rounded-full" /> 
                <div>
                  <strong>{review.user}</strong> - Rating: 
                  <Rating
                    value={review.rating}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  /><br />
                  {review.comment}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-8" />
        <div>
          <h2 className="text-xl font-semibold mb-4">Add Your Review</h2>
          <p>If you have purchased this item before, please share your review on the product.</p>
          <form onSubmit={handleAddReview} className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label className="block">
                  User:
                  <input type="text" value={user} onChange={(e) => setUser(e.target.value)} className="w-full border border-gray-300 rounded px-4 py-2" required />
                </label>
              </div>
              <div>
                <label className="block">
                  Rating:
                  <Rating
                    count={5}
                    value={rating}
                    onChange={(newValue) => setRating(newValue)}
                    size={24}
                    activeColor="#ffd700"
                    required
                  />
                </label>
              </div>
            </div>
            <label className="block">
              Comment:
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-full border border-gray-300 rounded px-4 py-2" required />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Review</button>
          </form>
        </div>
        <hr className="my-8" />
         {/* Modal for displaying messages */}
         {modalMessage && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
                        <div className="bg-white p-8 rounded shadow-md">
                            <p className="text-xl font-semibold mb-4">{modalMessage}</p>
                            <Link to="/products">
                              <button className="bg-blue-500 text-white px-4 py-2 rounded">Close</button>
                            </Link>
                        </div>
                    </div>
                )}
      </div>
    </div>
  );
};

export default ReviewPage;

