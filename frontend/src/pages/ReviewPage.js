import React, { useState, useEffect } from 'react';
import Rating from 'react-rating-stars-component';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleAddReview = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user,
          rating,
          comment
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add review');
      }

      console.log('Review added successfully');

      // Fetch updated reviews after adding a new one
      fetchReviews();
      
      // Clear input fields after submission
      setUser('');
      setRating('5');
      setComment('');
    } catch (error) {
      console.error('Error adding or fetching reviews:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto">

        {/* Existing reviews section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Reviews on product</h2>
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li key={index} className="flex items-center space-x-4">
                <img src="../images/user.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
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

        {/* Divider line */}
        <hr className="my-8" />

        {/* Add review section */}
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
                    onChange={(newRating) => setRating(newRating)}
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
        
        {/* Divider line */}
        <hr className="my-8" />

        {/* Note section */}
        
      </div>
    </div>
  );
};

export default ReviewPage;