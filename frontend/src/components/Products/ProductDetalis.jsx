import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductText from "./ProductText";
import { Carousel } from 'react-bootstrap';
//`"./../../assets/image/product/productd/${im}"`
const ProductDetalis = ({ product }) => {
  const [imgp, setimgp] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (product.productImage) {
      product.productImage.map((im) => {
        setimgp((prevState) => [
          ...prevState,
          im
        ]);
      });
    }
    setIsLoading(false);
  }, []);

  return !isLoading ? (
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
          src={require(`./../../assets/image/product/productc/${product.mainProductImage}`)}
          alt="First slide"
          isActive={true} />
          </Carousel.Item>




             {imgp.map((img, index) => (
                <Carousel.Item key={index}>
                 
                  <img
                    className="d-block w-100"
                    src={require(`./../../assets/image/product/productd/${img}`)}
                    alt={`Slide ${index + 1}`}
                    isActive={false}
                  />
                </Carousel.Item>
             ))}
            </Carousel>
          </div>
        </Col>
        <Col lg="8">
          <ProductText />
        </Col>
      </Row>
    </div>
  ) : (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default ProductDetalis;
