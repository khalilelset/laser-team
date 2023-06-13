import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="hero vh-100 d-flex align-items-center" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h1 className="display-4 text-white">
                {/* Build robust landing pages now */}
                Craft Connect Craft Owners, Customers.
              </h1>
              <p className="text-white my-3">
              Welcome to Craft Connect, a powerful platform that brings
              together craft owners, customers, and companies in a seamless
              online experience.
              Whether you're looking to explore unique crafts,

              showcase your creations, or forge valuable partnerships.
              </p>
              {/* <a href="#" className="btn me-2 btn-primary">
                Get Started
              </a> */}
              <a href="#" className="btn btn-outline-light">
                Go to Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
