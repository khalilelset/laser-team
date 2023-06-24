import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import deleteicon from '../../assets/img/delete.png'
const ContactBox = (props) => {
    return (
        <div className="user-address-card my-3 px-2" style={{height:"150px"}}>
            <Row className="d-flex justify-content-between" style={{height:"20px"}} >
                <Col xs="4">
                    <div className="p-2">{props.username}</div>
                </Col>
                <Col xs="5" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                       
                        <div className="d-flex ">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> remove</p>
                        </div>
                    </div>
                </Col>
            </Row>

            

            <Row className="mt-3" style={{height:"30px"}}>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                         title:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {props.phon}
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12" style={{height:"80px"}}>
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        {props.message}
                    </div>
                </Col>
            </Row>



        </div>
    )
}

export default ContactBox