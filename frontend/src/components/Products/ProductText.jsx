import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ProductText = () => {
    const product = useSelector((state) => state.product.product);
    let status = false;
const clientt = window.localStorage.getItem("status")
if (clientt=== "client"){status=true}
  return (
    <div>
      {product && (
        <div style={{ marginTop: "100px" }}>
          <Row className="mt-2">
            <div className="cat-text">{product.productTitle}</div>
           
          </Row>
          <Row>
            <Col md="8">
              <div className="cat-title d-inline">
                
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="8" className="mt-4">
              <div className="cat-text d-inline">Category of product :       </div>
              <div className="barnd-text d-inline mx-1">
                {product.productCategory}
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <div className="cat-text">Product description :     </div>
          </Row>
          <Row className="mt-2">
            <Col md="10"style={{marginBottom:"20px",marginTop:"20px"}}>
              <div className="product-description d-inline" >
              {product.productDescription}
              </div>
            </Col>
          </Row>

          <Row className="mt-2">
          <Col md="10"style={{marginBottom:"20px",marginTop:"20px"}}>
          <div className="cat-title d-inline">
            Quantity :{product.productAvailableQuantity}  pieces
          </div>
</Col></Row>


          <Row className="mt-4">
            <Col md="12">
              <div className="product-price d-inline px-3 py-3 border">
                {product.price}$
              </div>

{!status ? (<span></span>):(
              <div className="product-cart-add px-3 py-3 d-inline mx-3">
                add to
              </div>)}



            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default ProductText;
