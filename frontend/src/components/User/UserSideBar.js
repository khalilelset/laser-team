import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserSideBar = () => {


    const [showModal, setShowModal] = useState(false);
 
    const handleLogout = () => {
       window.location.pathname="/";
       localStorage.clear();
     
        };


    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
               
            <Link to="/userprofile" style={{ textDecoration: 'none' }}>
           <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
             Profile personly
                 </div>
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
export default UserSideBar