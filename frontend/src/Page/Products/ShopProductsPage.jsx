

import { Col, Container, Row } from "react-bootstrap";

import CardProductsContainer from "../../components/Products/CardProductsContainer";
import Pagination from "../../components/Utility/Pagination";
import SideFilter from "../../components/Utility/SideFilter";
import SearchCountResult from "../../components/Utility/SearchCountResult";
import CategoryHeader from "../../components/Categorie/CategoryHeader";
import {  useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/AllProductsActions";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";



const ShopProductsPage = () => {


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
    <div style={{ minHeight: "670px" }}>


      {/* <CategoryHeader /> */}
      <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            {/* <div className="cat-text-header">All</div>
            <div className="cat-text-header">Pride</div>
            <div className="cat-text-header">Cloth</div>
            <div className="cat-text-header">Soap</div>
            <div className="cat-text-header">Wood</div>
            <div className="cat-text-header">Accessor</div>
            <div className="cat-text-header">Art</div> */}
            <button className='btn mx-2' style={{border : "1px solid #b45b35" }} >ff</button>
            <button className='btn mx-2' style={{border : "1px solid #b45b35" }} >fvddf</button>
            <button className='btn mx-2' style={{border : "1px solid #b45b35" }} >dvsdvs</button>
      
          </Col>
        </Row>
      </Container>
    </div>


      <Container>


        <SearchCountResult title="500 search value" />




        <Row className="d-flex flex-row">

       

            
            <Row className="my-2 d-flex justify-content-between">
   
        {products.map((product) => (
          // <ProductCard product={product} />
          <Card product={product} />
        ))}
      </Row>



          {/* </Col> */}
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
