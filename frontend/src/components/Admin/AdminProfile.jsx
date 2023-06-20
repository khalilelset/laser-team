import React, { useEffect, useState } from 'react'
import { Row, Col , Modal, Button } from 'react-bootstrap'
import FormInputs from './FormInputs';
import "./Admin.css"
import unknow from "./../../images/Unknown_person.jpg"
import { useNavigate } from 'react-router-dom';
const AdminProfile = () => {
    const [craftOwner, setCraftOwner] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCraftOwnerInfo = async () => {
          try {
            const emailL= window.localStorage.getItem("email");
            const email=emailL.slice(1, -1);
            
            const response = await fetch(`http://localhost:4000/api/craftowner/getprofile/${email}`);
            const data = await response.json();
            setCraftOwner(data.craftOwner);
            setIsLoading(false);
          } catch (error) {
            
          }
          
        };
    
        fetchCraftOwnerInfo();
      }, []);

    //model and edit

      const [showModal, setShowModal] = useState(false);
      const [formData, setFormData] = useState({
        ownerFName: "",
        ownerLName: "",
        ownerPhNumber: "",
        ownerImage: "",
        ownerLocation: "",
        ownerDescription: "",
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        var answer = window.confirm("do you want really want to change your information");
        if(answer){
        try {
          const emailL= window.localStorage.getItem("email");
          const email=emailL.slice(1, -1);
          // Make API request to update data
          const response = await fetch(`http://localhost:4000/api/craftowner/updateprofile/${email}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
          // Check if the request was successful
          if (response.ok) {
            console.log('Data updated successfully');
          } else {
            console.log('Failed to update data');
          }
        }
        catch (error) {
            console.error('Error:', error.message);
          }   }

        setShowModal(false);
        navigate(0);
      };
      




      const handleCloseModal = () => {
        setShowModal(false);
      };
      const handleShowModal = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          ownerFName: craftOwner.ownerFName,
          ownerLName: craftOwner.ownerLName,
          ownerPhNumber: craftOwner.ownerPhNumber,
          ownerImage: craftOwner.ownerImage,
          ownerLocation: craftOwner.ownerLocation,
          ownerDescription: craftOwner.ownerDescription,
        }));
        setShowModal(true);
      };
      
     
    return (
        <>
            {!isLoading ? ( 
                <>
            <div className="admin-content-text">Profile page </div>
            
            <img src={unknow} alt=''style={{width:"200px",height:"200px",marginTop:"20px",marginLeft:"20px", borderRadius:"50%"}}/>

            <div className="user-address-card my-3 px-2">
            <Row className="d-flex justify-content-between pt-2">
  <Col xs="auto" className="d-flex align-items-center" style={{marginTop:"20px"}}>
    <div className="p-2">name:</div>
    <div className="p-1 item-delete-edit">{craftOwner.ownerFName} {craftOwner.ownerLName}</div>
  </Col>
  <Col xs="auto" className="d-flex justify-content-end align-items-center">
    <Button onClick={handleShowModal}>Edit</Button>
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormInputs formData={formData} handleChange={handleChange} />
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary" style={{ marginRight: "10px" }}>
            Save
          </button>
          <button type="button" className="btn btn-danger" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </Modal.Body>
    </Modal>
  </Col>
</Row>


                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2"> phon nb:</div>
                        <div className="p-1 item-delete-edit">{craftOwner.ownerPhNumber}</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">email:</div>
                        <div className="p-1 item-delete-edit">{craftOwner.email}</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">craftName:</div>
                         <div className="p-1 item-delete-edit">{craftOwner.craftName}</div>
                     </Col>
                </Row>

                <Row className="">
                  <Col xs="12" className="d-flex">
                     <div className="p-2">Location:</div>
                      <div className="p-1 item-delete-edit">{craftOwner.ownerLocation}</div>
                   </Col>
                </Row>
                
                <Row className="">
                  <Col xs="12" className="d-flex">
                     <div className="p-1">Description:</div>
                     <div className="p-8 item-delete-edit" style={{textAlign: "left"}}>
                        {craftOwner.ownerDescription}
                        </div>

                   </Col>
                </Row>
                


                
            </div> </>) : (<div className="loading-container">
                           <div className="loading-spinner"></div>
                           <p>Loading...</p>
                            </div>)}
        </>
    )
}

export default AdminProfile