import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import "./Reviews.css"

const Reviews = () => {
    const [members, setMembers] = useState([]);
  
    useEffect(() => {
      fetch("./Reviews.JSON")
        .then((res) => res.json())
        .then((data) => setMembers(data));
    }, []);
    
    
    return (
        <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row row-cols-4 g-4">
              {members.map((member) => (
                <Review
                  key={member._id}
                  member={member}
                ></Review>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Reviews;