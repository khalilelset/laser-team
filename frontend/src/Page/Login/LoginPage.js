import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../style/Component/StyleLoginPage.css'
import NavBar from '../../Component/Utility/NavBar'

const LoginPage = () => {
    return (<div> <NavBar/>
            <Container style={{ minHeight: "680px" }}>
               
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">sign in</label>
                        <input
                            placeholder="email..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <input
                            placeholder="password..."
                            type="password"
                            className="user-input text-center mx-auto"
                        />
                        <button className="btn-login mx-auto mt-4">sign in</button>
                        <label className="mx-auto my-4">
                           
You do not have an account?{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                Press here
                                </span>
                            </Link>
                        </label>



                    </Col>


                    {/* <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                        Login vender
                        </span>
                    </Link>

                    <Link to="/user/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                        Login is a client
                        </span>
                    </Link> 
                </label>*/}
                </Row>
            </Container>
            </div>
    )
}

export default LoginPage