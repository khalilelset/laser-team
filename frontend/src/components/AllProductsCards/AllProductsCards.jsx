import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/AllProductsActions";

const AllCards = () => {
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
    <div className="conatiner">
      <div className="row m-3 mt-3">
        <h1 className="text-center">All Products </h1>
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};     

export default AllCards;
