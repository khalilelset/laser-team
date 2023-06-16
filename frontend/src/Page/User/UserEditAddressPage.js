import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import UserSideBar from '../../components/User/UserSideBar'

import UserEditAddress from '../../components/User/UserEditAddress';
const UserEditAddressPage = () => {
    return (
        <Container style={{marginBottom:"100px", marginTop:"100px"}} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserEditAddress />
                </Col>
            </Row>
        </Container>
    )
}
export default UserEditAddressPage