import React, { useCallback, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import avatar from '../../images/avatar.png';
import { useDropzone } from 'react-dropzone';
import ImagesproductCC from './ImagesproductCC';

const AdminAddCraft = () => {

  const [uploadedFile, setUploadedFile] = useState(null);
  
  const [craftTitle, setcraftTitle] = useState('');
  const [craftDescription, setcraftDescription] = useState('');
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
    setcraftTitle(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setcraftDescription(event.target.value);
  };



 
  return (
    <div>
      <Row className="justify-content-start ">
        <h2 className="admin-content-text pb-4" >Share your Crafts !</h2>
        <Col sm="8">
          <div className="text-form pb-2" style={{ textAlign: 'left', marginBottom: '20px' }}>
           Craft Photo
          </div>

          <div {...getRootProps()} style={{ marginBottom: '30px' }}>
            <input {...getInputProps()} type="file" />
            {uploadedFile ? (
              <img src={URL.createObjectURL(uploadedFile)} alt="" onClick={onSelect}  />
             
            ) : isDragActive ? (
              <span></span>
            ) : (
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
            placeholder="Craft Title"
            style={{ '--placeholder-color': '#979797' }}
            value={craftTitle}
            onChange={handleProductNameChange}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product description"
            value={craftDescription}
            onChange={handleProductDescriptionChange}
            style={{ height: "150px", resize: "none" }}
          />

        </Col>
      </Row>
      <Row className="justify-content-start ">
        <ImagesproductCC craftTitle={craftTitle} craftDescription={craftDescription} 
         mainCraftImage={uploadedFile} />
      </Row>
    </div>
  );
};

export default AdminAddCraft;