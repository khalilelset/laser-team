import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitProductForm } from "../../redux/actions/AddProductAction";

const AddProduct = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [productAvailableQuantity, setProductAvailableQuantity] = useState("");
  const [productCategoryID, setProductCategoryID] = useState(
    "647b3942b80f4f3992810527"
  );
  const [craftOwner, setCraftOwner] = useState("647b3942b80f4f3992810527");

  const loading = useSelector((state) => state.addProduct.loading);
  const success = useSelector((state) => state.addProduct.success);
  const error = useSelector((state) => state.addProduct.error);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      productCategoryID,
      productTitle,
      productDescription,
      price,
      productAvailableQuantity,
      craftOwner,
    };
    dispatch(submitProductForm(formData));
  };
  return (
    <div className="m-5">
      {success && (
        <div className="alert alert-success" role="alert">
          Form submitted successfully
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error._message}
        </div>
      )}
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit} class="row g-3 justify-content-center">
        <div class="col-md-5">
          <input
            type="text"
            class="form-control"
            placeholder="Product Name"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
        </div>
        <div class="col-md-5">
          <input
            type="number"
            class="form-control"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div class="col-md-10">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            value={productAvailableQuantity}
            onChange={(e) => setProductAvailableQuantity(e.target.value)}
          />
        </div>
        <div class="col-md-10">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            class="form-control"
            placeholder="Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <div class="col-md-10 d-grid">
          <button className="btn btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
