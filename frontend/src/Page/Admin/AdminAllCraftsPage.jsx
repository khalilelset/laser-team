import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAllCrafts from '../../components/Admin/AdminAllCrafts'
import AdminSideBar from '../../components/Admin/AdminSideBar'
const AdminAllCraftsPage = () => {
    return (
        <Container style={{marginBottom:"100px", marginTop:"100px"}}>
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar/>
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllCrafts />
                   
                </Col>
            </Row>
            
        </Container>
    )
}

export default AdminAllCraftsPage