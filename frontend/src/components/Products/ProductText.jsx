import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductText = () => {
  const product = useSelector((state) => state.product.product);
  let status = false;
  const clientt = window.localStorage.getItem("status");
  if (clientt === "client") {
    status = true;
  }
  const handleButtonClick = () => {
    const id = product._id;
    const email = window.localStorage.getItem("email");
    const cleanedEmail = email.replace(/^"(.*)"$/, "$1");

    fetch(`http://localhost:4000/api/cart/add/${cleanedEmail}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => {
        console.log("ID added successfully");
        console.log(cleanedEmail);
      })
      .catch((error) => {
        console.error("Error adding ID:", error);
      });
    window.location.reload();
  };
  return (
    <div>
      {product && (
        <div style={{ marginTop: "100px" }}>
          <Row className="mt-2">
            <div className="cat-text">{product.productTitle}</div>
          </Row>
          <Row>
            <Col md="8">
              <div className="cat-title d-inline"></div>
            </Col>
          </Row>
          <Row>
            <Col md="8" className="mt-4">
              <div className="cat-text d-inline">Category of product : </div>
              <div className="barnd-text d-inline mx-1">
                {product.productCategory}
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <div className="cat-text">Product description : </div>
          </Row>
          <Row className="mt-2">
            <Col md="10" style={{ marginBottom: "20px", marginTop: "20px" }}>
              <div className="product-description d-inline">
                {product.productDescription}
              </div>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md="10" style={{ marginBottom: "20px", marginTop: "20px" }}>
              <div className="cat-title d-inline">
                Quantity :{product.productAvailableQuantity} pieces
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md="12">
              <div className="product-price d-inline px-3 py-3 border">
                {product.price}$
              </div>

              {!status ? (
                <span></span>
              ) : (
                <Link
                  to="#"
                  className="btn btn-primary"
                  style={{ marginRight: "4rem" }}
                  onClick={handleButtonClick}
                >
                  Add to cart
                </Link>
              )}
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default ProductText;
