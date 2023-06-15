import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

// import CardProductsContainer from '../../Components/Products/CardProductsContainer'
// import ProductDetalis from '../../Components/Products/ProductDetalis'
// import RateContainer from '../../Components/Rate/RateContainer'
import ProductDetalis from "../../components/Products/ProductDetalis";
import RateBax from "../../components/Products/RateBax";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductDetalisPage = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);

  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <div style={{ minHeight: "670px" }}>
      <Container>
        <ProductDetalis product={selectedProduct} />
        <RateBax />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
