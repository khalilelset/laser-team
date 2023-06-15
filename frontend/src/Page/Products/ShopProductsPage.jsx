import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import CardProductsContainer from "../../components/Products/CardProductsContainer";
import Pagination from "../../components/Utility/Pagination";
import SideFilter from "../../components/Utility/SideFilter";
import SearchCountResult from "../../components/Utility/SearchCountResult";
import CategoryHeader from "../../components/Categorie/CategoryHeader";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/AllProductsActions";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="500 search value" />

        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductsContainer title="" btntitle="" />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
