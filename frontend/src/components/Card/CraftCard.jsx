import React from "react";
import "./Card.css";
import productImage from "../../assets/images/products/Apple_watch-series7_hero_09142021_big.jpg.slideshow-medium.jpg";
import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
  return (
    <>
      <div className="card" key={craft.id}>
        <img src={productImage} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{craft.craftTitle} </h5>
          <p className="card-text">{craft.craftDescription}</p>
          <Link to="#" className=" mt-3">
            More Details
          </Link>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default CraftCard;
