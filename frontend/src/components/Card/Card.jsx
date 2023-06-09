import React from "react";
import "./Card.css";
import productImage from "../../assets/images/products/photo-1523275335684-37898b6baf30.jpg";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="col-lg-3 ms-5 mt-4">
          <div className="card">
            <img
              src={productImage}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
