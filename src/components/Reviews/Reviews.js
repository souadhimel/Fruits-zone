import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import "./Reviews.css"

const Reviews = () => {
    const [reviews, setReviews] = useReviews([]);
  
   
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