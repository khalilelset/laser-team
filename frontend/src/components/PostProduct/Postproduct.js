import React, { useState } from 'react';

const PostProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    mainImage: '',
    description: '',
    price: '',
    availableQuantity: '',
    category: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct((prevState) => ({
      ...prevState,
      mainImage: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    // For example, send a request to the server to post the product
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title mb-4">Post Product</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Product Title:</label>
              <input type="text" className="form-control" id="title" name="title" value={product.title} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="mainImage" className="form-label">Main Product Image:</label>
              <input type="file" className="form-control" id="mainImage" name="mainImage" onChange={handleImageChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Product Description:</label>
              <textarea className="form-control" id="description" name="description" rows="4" value={product.description} onChange={handleInputChange}></textarea>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="price" className="form-label">Price:</label>
                <input type="text" className="form-control" id="price" name="price" value={product.price} onChange={handleInputChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="availableQuantity" className="form-label">Product Available Quantity:</label>
                <input type="text" className="form-control" id="availableQuantity" name="availableQuantity" value={product.availableQuantity} onChange={handleInputChange} />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Product Category:</label>
              <select className="form-select" id="category" name="category" value={product.category} onChange={handleInputChange}>
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="home">Home</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Post Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostProduct;
