import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

const CategoryHeader = () => {
    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header">All</div>
            <div className="cat-text-header">Pride</div>
            <div className="cat-text-header">Cloth</div>
            <div className="cat-text-header">Soap</div>
            <div className="cat-text-header">Wood</div>
            <div className="cat-text-header">Accessor</div>
            <div className="cat-text-header">Art</div>
      
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CategoryHeader