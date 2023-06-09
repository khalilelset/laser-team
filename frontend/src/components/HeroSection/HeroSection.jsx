import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="hero vh-100 d-flex align-items-center" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h1 className="display-4 text-white">
                Build robust landing pages now
              </h1>
              <p className="text-white my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                quia sequi eius. Quas, totam aliquid. Repudiandae reiciendis vel
                excepturi ipsa voluptate dicta!
              </p>
              <a href="#" className="btn me-2 btn-primary">
                Get Started
              </a>
              <a href="#" className="btn btn-outline-light">
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
