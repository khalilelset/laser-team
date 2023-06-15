import React from "react";
import "./Card.css";
import productImage from "../../assets/images/products/Apple_watch-series7_hero_09142021_big.jpg.slideshow-medium.jpg";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <>
      {/* <div className="container">
        <div className="col-lg-3 ms-5 mt-4"> */}
      <div className="col-lg-3 mt-3">
        <div className="card" key={product.id}>
          <img
            src={productImage}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product.productTitle} </h5>
            <p className="card-text">{product.productDescription}</p>
            <h5>{product.price}$</h5>
            <p>{product.productAvailableQuantity} pieces</p>
            <Link to="#" className="btn btn-primary">
              Add to cart
            </Link>
            <Link to={"/products/" + product._id} className="ms-4 mt-3">
              More Details
            </Link>
          </div>
        </div>
      </div>

      {/* </div>
      </div> */}
    </>
  );
};

export default Card;
