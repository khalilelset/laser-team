import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductText from "./ProductText";
import { Carousel } from 'react-bootstrap';

const ProductDetalis = ({product}) => {
  const [imgp, setimgp] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (product.productImage) {
      product.productImage.map((im) => {
        setimgp((prevState) => [...prevState, { original: `../../assets/image/product/productd/${im}` }]);
      });
    }
    setIsLoading(false);
  }, []);/*
// import mobile2 from '../../assets/img/mobile2.png'
import pro6 from '../../assets/image/product/productd/productd6.jpg'
import pro8 from '../../assets/image/product/productd/productd8.webp'
import pro10 from '../../assets/image/product/productd/productd10.jpg'
// import mobile2 from '../../assets/image/craft/craftc/craftc10.jpg'
// import mobile3 from '../../assets/image/craft/craftd/craftd8.jpg'
// import mobile3 from '../../assets/image/craft/craftc/craftc3.jpg'
import ReactImageGallery from "react-image-gallery";

const ProductDetalis = () => {
  const images = [
    {
        original: `${pro8}`,
    },
    {
        original: `${pro6}`,
    },
    {
        original: `${pro10}`,
    },
];
console.log(images);*/

  return (
    !isLoading ?(
    
    <div>
      <Row className="py-3">
        <Col lg="4">
          <div
            className="product-gallary-card d-flex justfiy-content-center align-items-center pt-2"
            style={{ marginTop: "50px" }}
          >

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/image/product/productd/productd8.webp")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/image/product/productd/productd10.jpg")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/image/product/productd/productd6.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

          </div>
          
        </Col>
        <Col lg="8">
          <ProductText />
        </Col>
      </Row>
    </div>
  ):(<div className="loading-container">
  <div className="loading-spinner"></div>
  <p>Loading...</p>
   </div>)
   );
};

export default ProductDetalis;
