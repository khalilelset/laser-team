import React, { useState } from 'react'

import { Row, Col , Modal, Card } from 'react-bootstrap'
import FormInputs from './FormInputs';
import { Link, useNavigate } from 'react-router-dom'
import labtop from '../../images/labtop.png'

const AdminAllProductsCard = ({_id,mainProductImage,price,productAvailableQuantity,
    productCategory,productDescription,productTitle,productImage}) => {
        const navigate = useNavigate();
        const [showModal, setShowModal] = useState(false);
        const [formData, setFormData] = useState({
          ownerFName: "",
          ownerLName: "",
          ownerPhNumber: "",
          ownerImage: "",
          ownerLocation: "",
          ownerDescription: "",
        });


        const emailL= window.localStorage.getItem("email");
        const email=emailL.slice(1, -1);                    
        const deleteProduct = async () => {

            var answer = window.confirm("do you want really to delete your product");    
            if(answer){
            try {
              const response = await fetch(`http://localhost:4000/api/product/delete/${_id}/${email}`, {
                method: 'DELETE'
              });
          
              if (response.ok) {
               
              } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
              }
            } catch (error) {
              console.error("Error deleting product:", error.message);
              // Handle the error appropriately
            }  
            navigate(0)
           }
          };

          const handleCloseModal = () => {
            setShowModal(false);
          };
          const handleChange = (event) => {
            const { name, value } = event.target;}
          
            const handleSubmit = async (event) => {
                event.preventDefault();
                var answer = window.confirm("do you want really want to change your information");
            
              // setShowModal(false);
               // navigate(0);
              

            }

            const handleShowModal = () => {
               /* setFormData((prevFormData) => ({
                  ...prevFormData,
                  ownerFName: craftOwner.ownerFName,
                  ownerLName: craftOwner.ownerLName,
                  ownerPhNumber: craftOwner.ownerPhNumber,
                  ownerImage: craftOwner.ownerImage,
                  ownerLocation: craftOwner.ownerLocation,
                  ownerDescription: craftOwner.ownerDescription,
                }));*/
                setShowModal(true);
              };

    return (


        <Col xs="12" sm="12" md="5" lg="4" className="d-flex">
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "450px",
                    borderRadius: "8px",
                    border: "2px solid gray",
                    backgroundColor: "#FFFFFF",
                    margin:"10px",
                    
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                   <button className="item-delete-edit remove-button"style={{margin:"10px"}} onClick={deleteProduct}>Remove</button>
                     <button className="item-delete-edit edit-button"style={{margin:"10px"}}onClick={handleShowModal}>Edit</button>

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
                 <Link to={`/products/${_id}`} style={{ textDecoration: "none" }}> 
                    <Card.Img style={{ height: "228px", width: "100%" }} src={labtop} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title" style={{textAlign:"left",marginBottom:"10px"}}>
                                {productTitle}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex flex-column">
                            <p className="card-description">{productDescription.slice(0, 20)}</p>
                                <div className="card-rate" style={{marginBottom:"10px"}}> Q :{productAvailableQuantity}</div>
                              
                                <div className="d-flex">
                                   
                                    <div className="card-price">{price}$</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                 </Link> 
            </Card>
        </Col>
    )
}
    
export default AdminAllProductsCard