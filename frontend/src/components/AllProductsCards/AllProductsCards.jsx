import React, { useState } from "react";
import Card from "../Card/Card";

const AllCards = () => {
  const [products] = useState([
    {
      id: 1,
      title: "Product 1",
      description:
        "Product 1 Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "200$",
    },
    {
      id: 2,
      title: "Product 2",
      description:
        "Product 2 Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "200$",
    },
    {
      id: 3,
      title: "Product 3",
      description:
        "Product 3 Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "200$",
    },
    {
      id: 4,
      title: "Product 4",
      description:
        "Product 4 Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "200$",
    },
    {
      id: 5,
      title: "Product 4",
      description:
        "Product 4 Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "200$",
    },
    {
      id: 6,
      title: "Product 4",
      description:
        "Product 4 Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "200$",
    },
  ]);
  return (
    <div className="conatiner">
      <div className="row m-3 mt-3">
        <h1 className="text-center">All Products</h1>
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
