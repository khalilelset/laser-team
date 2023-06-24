import React, { useState } from 'react'
import { Row, Col , Modal, Card } from 'react-bootstrap'
import FormInputsCC from './FormInputsCC';
import { Link, useNavigate } from 'react-router-dom'
import labtop from '../../images/labtop.png'

const AdminAllProductsCard = ({_id,craftDescription,craftTitle,
    mainCraftImage,craftImage}) => {
        const navigate = useNavigate();
        const [showModal, setShowModal] = useState(false);
        const [formData, setFormData] = useState({
            craftTitle: "",
            craftDescription: "",
        });


        const emailL= window.localStorage.getItem("email");
        const email=emailL.slice(1, -1);                    
        const deleteCraft = async () => {

            var answer = window.confirm("do you want really to delete your post");    
            if(answer){
            try {
              const response = await fetch(`http://localhost:4000/api/craft/delet/${_id}/${email}`, {
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
            const { name, value } = event.target;
            setFormData((prevState) => ({
              ...prevState,
              [name]: value,
            }));
          };

          
  const handleSubmit = async (event) => {
   event.preventDefault();
   try {
   const response = await fetch(`http://localhost:4000/api/craft/update/${_id}`, {
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
  }  
  setShowModal(false);
  navigate(0);       
 }
    
 const handleShowModal = () => {
     setFormData((prevFormData) => ({
       ...prevFormData,

       craftTitle: craftTitle,
       craftDescription: craftDescription,
     }));
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
                   <button className="item-delete-edit remove-button"style={{margin:"10px", width:"90px"}} onClick={deleteCraft}>Remove</button>
                     <button className="item-delete-edit edit-button"style={{margin:"10px"}}onClick={handleShowModal}>Edit</button>

                        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
           <Modal.Title>Craft Profile</Modal.Title>
  </Modal.Header>
   <Modal.Body>
    <FormInputsCC formData={formData} handleChange={handleChange} />
    <div className="form-group" style={{ marginBottom: "20px" }}>
      <button type="submit" onClick={handleSubmit} className="btn btn-primary" style={{ marginRight: "10px" }}>
        update
      </button>
      <button type="button" className="btn btn-danger" onClick={handleCloseModal}>
        Close
      </button>
    </div>
  </Modal.Body>
</Modal>


                    </Col>
                </Row>
                 <Link to={`/craft/${_id}`} style={{ textDecoration: "none" }}> 
                    <Card.Img style={{ height: "228px", width: "100%" }}
                     src={require(`./../../assets/image/craft/craftc/${mainCraftImage}`)} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title" style={{textAlign:"left",marginBottom:"10px"}}>
                               {craftTitle}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex flex-column">
                            <p className="card-description">{craftDescription.slice(0, 30)}</p>
                            
                            </div>
                        </Card.Text>
                    </Card.Body>
                 </Link> 
            </Card>
        </Col>
    )
}
    
export default AdminAllProductsCard