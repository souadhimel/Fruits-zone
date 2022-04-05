import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <section className="home" id="home">
      <div className="content">
        <h3>Food made with love</h3>
        <p>
        Food is the necessity of life. It provides nutrition, sustenance and growth to human body. Food can be classNameified into cereals, pulses, nuts and oilseeds, vegetable, fruits, milk and milk products and flesh food. Food comprises protein, facts, carbohydrates, vitamins, minerals salts and water.
        </p>
        <button className="btn">order now</button>
      </div>

      <div className="image">
        <img src="images/home-img.png" alt="" />
      </div>
    </section>
    );
};

export default Home;