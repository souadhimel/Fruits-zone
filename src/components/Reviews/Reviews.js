import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import "./Reviews.css"

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
      fetch("./Reviews.JSON")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    
    
    return (
        <div>
            <h2 className="review_title">Our customers say......</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="row row-cols-3 g-4">
              {reviews.map((review) => (
                <Review
                  key={review._id}
                  review={review}
                ></Review>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Reviews;