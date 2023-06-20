import React from "react";
import "./Card.css";
import productImage from "../../assets/images/products/Apple_watch-series7_hero_09142021_big.jpg.slideshow-medium.jpg";
import { Link } from "react-router-dom";
import Login from '../../Page/signup&login/Login';

const Card = ({ product }) => {
  var access = 0;
  const status = window.localStorage.getItem("status");

  if (status === "owner") {
    access = 1;
  } else if (status === "client") {
    access = 2;
  } else {
    access = 0;
  }

  const handleAddToCart = () => {
    if (access === 0) {
      window.location.href = "/login";
    } else {
      // Add to cart logic
    }
  };

  return (
    <>
      <div className="col-lg-3 mt-3">
        <Link to={"/products/" + product._id}>
          <div className="card" key={product.id}>
            <img
              src={productImage}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="productTitle">{product.productTitle}</h5>
              <p className="card-text">{product.productDescription.substr(0, 55)}</p>
              <h5>{product.price}$</h5>
              <p>{product.productAvailableQuantity} pieces</p>
              {access === 0 ? (
                <button className="btn btn-primary" onClick={handleAddToCart} style={{ marginRight: '4rem' }}>
                  Add to cart
                </button>
              ) : access !== 1 ? (
                <Link to="#" className="btn btn-primary" style={{ marginRight: '4rem' }}>
                  Add to cart
                </Link>
              ) : null}
              {access === 0 ? (
                <span className="" onClick={handleAddToCart}>
                  More Details
                </span>
              ) : (
                <Link to={"/products/" + product._id} className="">
                  More Details
                </Link>
              )}

            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
