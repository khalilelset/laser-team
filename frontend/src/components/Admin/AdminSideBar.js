import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const AdminSideBar = () => {

 const [showModal, setShowModal] = useState(false);
 
 const handleLogout = () => {
    window.location.pathname="/";
    localStorage.clear();
  
     };
    
    


    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                

            <Link to="/adminprofile" style={{ textDecoration: 'none' }}>
                 <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                Profile
                 </div>
             </Link>       

                <Link to="/adminaddproduct" style={{ textDecoration: 'none' }}>
                  <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                  Add a product
                  </div>
                </Link>

              
                <Link to="/adminallproducts" style={{ textDecoration: 'none' }}>
                 <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                 Product management                    </div>
                </Link>
              
              <Link to="/adminaddcraft" style={{ textDecoration: 'none' }}>
                 <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                 Add a Craft </div>
                </Link>

                <Link to="/adminallCrafts" style={{ textDecoration: 'none' }}>
                     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                     Crafts management                    </div>
                    </Link>
                    <Link to="/StorePage" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                                   Back To Store </div>
                                  </Link>

                    <Button variant="danger" size="lg" onClick={() => setShowModal(true)}>
                                Logout
                              </Button>

                              <Modal show={showModal} onHide={() => setShowModal(false)}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Logout Confirmation</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Are you sure you want to logout?</Modal.Body>
                                <Modal.Footer>
                                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                                    Cancel
                                  </Button>
                                  <Button variant="danger" onClick={handleLogout}>
                                    Logout
                                  </Button>
                                </Modal.Footer>
                              </Modal>


            </div>
        </div>
    )
}

export default AdminSideBar                   