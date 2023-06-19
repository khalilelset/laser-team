import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import prod4 from "../../assets/img/AI-E-commerce-01.jpg";
import s1 from "../../assets/img/s1.png";
import s2 from "../../assets/img/s2-removebg-preview.png";
import s3 from "../../assets/img/s3-removebg-preview.png";
import s4 from "../../assets/img/s4-removebg-preview.png";

const Slider = () => {
  const [index, setIndex] = useState(1);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-background" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center ">
          <img
                style={{ height:"296px" , width:"313.53px" }}
                className=""
                src={s1}
                alt="First slide"
            />
          <div className="pt-5 pb-5">
            <h3 className="slider-title">Discover our selection </h3>
            <p className="slider-text"> of unique fabrics for your sewing projects</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background2" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "313.53px" }}
            className=""
            src={s2}
            alt="First slide"
          />
          <div className="pt-5 pb-5">
            <h3 className="slider-title">Add a personal touch </h3>
            <p className="slider-text">to your home with our handmade decorations</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background3" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "373.53px" }}
            className=""
            src={s3}
            alt="First slide"
          />
          <div className="pt-5 pb-5">
            <h3 className="slider-title">Express your creativity </h3>
            <p className="slider-text">with our range of DIY and crafting tools</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background4" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "373.53px" }}
            className=""
            src={s4}
            alt="First slide"
          />
          <div className="pt-5 pb-5">
            <h3 className="slider-title">ind the perfect gift </h3>
            <p className="slider-text">for craft enthusiasts in your life</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
