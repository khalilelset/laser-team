import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetalis = ({ product }) => {
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductGallery />
        </Col>

        <Col lg="8">
          <ProductText product={product} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetalis;
