import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import deleteicon from '../../images/delete.png'
import "./Admin.css"
const AdminProfile = () => {
    const [craftOwner, setCraftOwner] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
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
    
    

     
    return (
        <>
            {!isLoading ? (
                <>
            <div className="admin-content-text">Profile page </div>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">name:</div>
                        <div className="p-1 item-delete-edit">{craftOwner.ownerFName} {craftOwner.ownerLName}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> edit</p>
                        </div>
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
                     <div className="p-2">Description:</div>
                      <div className="p-1 item-delete-edit">{craftOwner.ownerDescription}</div>
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