import { useDropzone } from 'react-dropzone';
import { Row, Col } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom'
import add from '../../images/add.png';
import React, { useCallback, useState } from 'react';

export default function ImagesProduct({ craftTitle, craftDescription, mainCraftImage }) {
  const emailL = window.localStorage.getItem("email");
  const email = emailL.slice(1, -1);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedFilesp, setUploadedFilesp] = useState([]);
const navigate=useNavigate();
  
  const handleAddProduct = () => {
    if( mainCraftImage==null || uploadedFiles==null){
      return alert("you can not add craft without main photo  ")
     }
 
     if(craftTitle===""|| craftDescription ===""  ){
      return alert("All field should be require")
     }
 

    // Create an object with the form data
    const formData = {
        craftTitle,
        craftDescription,
        mainCraftImage: mainCraftImage.path,
        craftImage: uploadedFilesp,
    };
    

    // Perform API fetch here with the formData
    fetch(`http://localhost:4000/api/post/craft/${email}`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response
        navigate(0);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded files here
    const newFiles = [...uploadedFiles, ...acceptedFiles.slice(0, 4 - uploadedFiles.length)];
    setUploadedFiles(newFiles);

    const newFileNames = [...uploadedFilesp, ...acceptedFiles.map((file) => file.name)];
    setUploadedFilesp(newFileNames);
  }, [uploadedFiles, uploadedFilesp]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSelect = () => {
    // Handle the selection of the uploaded file
  };

  const onRemove = (fileIndex) => {
    const updatedFiles = uploadedFiles.filter((file, index) => index !== fileIndex);
    const updatedFileNames = uploadedFilesp.filter((name, index) => index !== fileIndex);
    setUploadedFiles(updatedFiles);
    setUploadedFilesp(updatedFileNames);
  };

  return (
    <div>
      <div className="text-form pb-2" style={{ textAlign: 'left', marginBottom: '30px', marginTop: '50px', color: "black", fontSize: "20px", fontFamily: "inherit" }}>
        Add more photos for your Crafts
      </div>

      <Row className="justify-content-start">
        <div {...getRootProps()} style={{ marginBottom: '30px', display: 'flex' }}>
          {uploadedFiles.length > 0 ? (
            <>
              {uploadedFiles.map((file, index) => (
                <Col sm="4" key={index}>
                  <div>
                    <img
                      src={URL.createObjectURL(file)}
                      alt=""
                      onClick={onSelect}
                      style={{ height: '200px', width: '300px' }}
                    />
                  </div>
                </Col>
              ))}

              {uploadedFiles.length < 4 && (
                <Col sm="4">
                  <img
                    src={add}
                    alt=""
                    height="100px"
                    width="120px"
                    style={{ height: '150px', width: '150px' }}
                  />
                </Col>
              )}
            </>
          ) : (
            <Col sm="4">
              <img
                src={add}
                alt=""
                height="100px"
                width="120px"
                style={{ height: '150px', width: '150px' }}
              />
            </Col>
          )}
          <input {...getInputProps()} />
        </div>
      </Row>

      <Row>
        <Col sm="6">
          {uploadedFiles.length > 0 && (
            <div>
              {uploadedFiles.map((file, index) => (
                <div key={index}>
                  <p>Uploaded file: {file.name}</p>
                  <button onClick={() => onRemove(index)} style={{marginBottom:"40px"}} className="btn btn-danger mt-2">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </Col>
      </Row>

      <Row>
        <Col sm="8" className="d-flex justify-content-start ">
          <button className="btn-save d-inline mt-2" onClick={handleAddProduct}>
            Add Craft
          </button>
        </Col>
      </Row>
    </div>
  );
}
