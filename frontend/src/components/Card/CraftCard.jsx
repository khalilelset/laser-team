import React from "react";
import "./Card.css";
 //import productImage from "../../assets/images/products/Apple_watch-series7_hero_09142021_big.jpg.slideshow-medium.jpg";
// import productImage from "../../assets/images/products/fe3.jpg";
import productImage from "../../assets/image/craft/craftc/craft1c.jpg";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const CraftCard = ({ craft }) => {
  // console.log(craft)
  return (
   
   <> 
      {/* <div className="card" key={craft.id}>
        <img src={productImage} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{craft.craftTitle} </h5>
          <p className="card-text">{craft.craftDescription}</p>
          <Link to="#" className=" mt-3">
            More Details
          </Link>
        </div>
      </div> */}
      {/* </div>
      </div> */}
 
 
<div className="col-lg-3 mt-3">
      
     
     <Link to={`/AllCraftsdetails?idd=${craft._id}`}>
        <div className=" card1">
          <img src={productImage} className="card__image1" alt="hu" />
          <div className="card__overlay1">
            <div className="overlay__text1 text-center w-100 p-2">
              <p>{craft.craftTitle}</p>
             <p>{craft.craftDescription.substr(0, 160)} .</p>
             
            
            </div>
          </div>
        </div>
        </Link>
  
  

    </div>
    </>
  );
};

export default CraftCard;
