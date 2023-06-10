import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RatePost from './RatePost'


const RateBax = () => {
  return (
    <div>
      <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 " >ratings</div>
                    <img className="mt-2" src={process.env.PUBLIC_URL + '/img/rate.png'}  style = {{height:"16px", width:"16px"}}alt="" />
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 rat nb)</div>
                </Col>
            </Row>
            <RatePost />
            </Container>

    </div>
  )
}

export default RateBax
