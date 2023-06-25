import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

function NotFound() {
    return (
      <Container>
        <Row className="justify-content-center" style={{marginBottom:"5000px"}}>
          <Col xs={12} md={8} lg={6}>
            <div className="text-center mt-5">
              <h1 className="display-4">404 - Not Found</h1>
              <p className="lead">The page you're looking for does not exist.</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default NotFound;
  