import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import "./Home.css"

const Home = () => {

const [reviews,setReviews]=useReviews([]);
// console.log(useReviews);

    return (
      <>
        <section className="home" id="home">
      <div className="content">
        <h3>Food made with love</h3>
        <p>
        Food is the necessity of life. It provides nutrition, sustenance and growth to human body. Food can be classified into cereals, pulses, nuts and oilseeds, vegetable, fruits, milk and milk products and flesh food. Food comprises protein, facts, carbohydrates, vitamins, minerals salts and water.
        </p>
        <button className="btn">order now</button>
      </div>

      <div className="image">
        <img src="images/home-img.png" alt="" />
      </div>
    </section>
      <div className="review">
          <h3 className="review_title">Our happy customer sayings about us....................</h3>
          <div className="row">
          <div className="col-md-12">
            <div className="row row-cols-3 g-4">
              {reviews.map((review) => (
                <Review
                  key={review._id}
                  review={review}
                ></Review>
              )).slice(0,3)}
            </div>
          </div>
        </div>
        <div className="rating_btn">
            <button className="btn_text"> <Link to="/reviews" className="link_text">See all reviews</Link>
                
                 </button>
        </div>
      </div>
      
      </>
    );
};

export default Home;