import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import deleteicon from '../../assets/img/delete.png'
const Transaction = (props) => {
    return (
       
        
        <div className="user-address-card my-3 px-2" style={{height:"40px"}}>
        <Row className="d-flex justify-content-between  ">
            <Col xs="4">
                <div className="p-2">productId : {props.cartid}</div>
            </Col>
            <Col xs="4">
                <div className="p-2">clientid : {props.craftid}</div>
            </Col>
            <Col xs="4">
                <Row>
                <Col className="p-2">location : {props.location}</Col>
                <Col className='d-flex d-flex justify-content-end'>
                <div className="d-flex p-2">        <img
                            alt=""
                            className="ms-1 mt-2"
                            src={deleteicon}
                            height="17px"
                            width="15px"
                        /></div> </Col>
                </Row>
            </Col>
        
            {/* <Col xs="4" className="d-flex d-flex justify-content-end">
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
            </Col> */}
        </Row>

        
    </div>
    )
}

export default Transaction