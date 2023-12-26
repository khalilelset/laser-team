import React, { useCallback, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import avatar from '../../images/avatar.png';
import { useDropzone } from 'react-dropzone';
import Imagesproduct from './Imagesproduct';

const AdminAddProducts = () => {

  const [uploadedFile, setUploadedFile] = useState(null);
  const [productTitle, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productAvailableQuantity, setProductQuantity] = useState('');
  const [price, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('Pride');
  

  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded files here
    setUploadedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSelect = () => {
    // Handle the selection of the uploaded file
  };

  const onRemove = () => {
    setUploadedFile(null);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleProductQuantityChange = (event) => {
    setProductQuantity(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };
 
  return (
    <div>
      <Row className="justify-content-start ">
        <h3 className="admin-content-text pb-4" >Add New Product</h3>
        <Col sm="8">
          <div className="text-form pb-2" style={{ textAlign: 'left', marginBottom: '20px' }}>
            Product Photo
          </div>

          <div {...getRootProps()} style={{ marginBottom: '30px' }}>
            <input {...getInputProps()} type="file" />
            {uploadedFile ? (
              <img src={URL.createObjectURL(uploadedFile)} alt="" onClick={onSelect}  />
             
            ) 
              
             : (
              <img
                src={avatar}
                alt=""
                height="100px"
                width="120px"
                style={{ height: '160px', width: '200px' }}
              />
            )}
          </div>

          {uploadedFile && (
            <div>
              <p>Uploaded file: {uploadedFile.name}</p>
              <button onClick={onRemove} className="btn btn-danger mt-2">
                Remove
              </button>
            </div>
          )}

          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Product name"
            style={{ '--placeholder-color': '#979797' }}
            value={productTitle}
            onChange={handleProductNameChange}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product description"
            value={productDescription}
            onChange={handleProductDescriptionChange}
            style={{ height: "150px", resize: "none" }}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product quantity"
            value={productAvailableQuantity}
            onChange={handleProductQuantityChange}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product price"
            value={price}
            onChange={handleProductPriceChange}
          />

          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2"
            value={productCategory}
            onChange={handleProductCategoryChange}
          >
            <option value="Pride">Pride</option>
            <option value="Cloth">Cloth</option>
            <option value="Soap">Soap</option>
            <option value="Wood">Wood</option>
            <option value="Accessory">Accessory</option>
            <option value="Art">Art</option>
          </select>
        </Col>
      </Row>
      <Row className="justify-content-start ">
        <Imagesproduct productTitle={productTitle} productDescription={productDescription} 
        productAvailableQuantity={productAvailableQuantity} price={price}  productCategory={productCategory}
         mainProductImage={uploadedFile} />
      </Row>
    </div>
  );
};

export default AdminAddProducts;