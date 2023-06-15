import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";
import SubTitre from "../Utility/SubTitre";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/AllProductsActions";
import Card from "../../components/Card/Card";

const CardProductsContainer = ({ title, btntitle, pathText }) => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setProducts(productsData.products ?? []);
  }, [productsData.products]);
  return (
    <Container>
      <SubTitre title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-between">
        {/* <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     </Row>
     <Row className='my-2 d-flex justify-content-between'>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/> */}
        {products.slice(0, 8).map((product) => (
          // <ProductCard product={product} />
          <Card product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
