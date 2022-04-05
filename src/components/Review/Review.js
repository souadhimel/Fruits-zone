import React from 'react';
import "./Review.css";
import { AiFillStar } from "react-icons/ai";

const Review = (props) => {

    const { name, picture,comment,rating} = props.review;
    return (
        <div className="col card-container">
      <div className="card p-2">
        <img src={picture} className=" image" alt="..." />
        <div className="card-body">
          <h5>{name}</h5>
          <h5>{comment}</h5>
          <h5>{rating}</h5>
         <div className="star">
         <p><AiFillStar></AiFillStar></p>
          <p><AiFillStar></AiFillStar></p>
          <p><AiFillStar></AiFillStar></p>
          <p><AiFillStar></AiFillStar></p>
          <p><AiFillStar></AiFillStar></p>
         </div>
         
        </div>
      </div>
    </div>
    );
};

export default Review;