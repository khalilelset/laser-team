import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import prod4 from "../../assets/img/prod4.png";
import favoff from "../../assets/img/fav-off.png";
import rate from "../../assets/img/rate.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/AllProductsActions";
const ProductCard = ({ product }) => {
  return (
    <>
      <Col xs="12" sm="12" md="4" lg="3" className="d-flex">
        <Card
          className="my-2"
          style={{
            width: "100%",
            height: "345px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
          }}
        >
          <Link to="/products/:id" style={{ textDecoration: "none" }}>
            <Card.Img className="im" src={require(`./../../assets/image/product/productc/${product.mainProductImage}`)} />
          </Link>
          <div className="d-flex justify-content-end mx-2">
            {/* <img
            src={favoff}
            alt=""
            className="text-center"
            style={{
                height: "24px",
                width: "26px",
            }}
        /> */}
            <p>{product.productDescription}</p>
          </div>
          <Card.Body>
            <Card.Title>
              <div className="card-title">{product.productTitle}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between ">
                <div className="d-flex">
                  <img
                    className=""
                    src={rate}
                    alt=""
                    height="16px"
                    width="16px"
                  />
                  {/* <div className="card-description">
                    {product.productDescription}
                  </div> */}
                  <div className="card-rate mx-2">4.5</div>
                </div>
                <div className="d-flex">
                  <div className="card-price">{product.price}</div>
                  <div className="card-currency mx-1">$</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
