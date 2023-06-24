import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

// import CardProductsContainer from '../../Components/Products/CardProductsContainer'
// import ProductDetalis from '../../Components/Products/ProductDetalis'
// import RateContainer from '../../Components/Rate/RateContainer'
import ProductDetalis from "../../components/Products/ProductDetalis";
import RateBax from "../../components/Products/RateBax";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/ProductByIdAction";

const ProductDetalisPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  useEffect(() => {
   
      window.scrollTo(0, 0);
    dispatch(getProduct(id));
  }, [dispatch, id]);
  if (loading) {
    return <p>Loading product data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
 
  return (
    //
    <div>
      {product && (
        <div style={{ minHeight: "670px" }}>
          <Container>
            <ProductDetalis product={product} />
            <RateBax />
          </Container>
        </div>
      )}
    </div>
  );
};

export default ProductDetalisPage;
