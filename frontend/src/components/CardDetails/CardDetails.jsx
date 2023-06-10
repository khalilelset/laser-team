import React from 'react'
 import { Row,Col } from 'react-bootstrap'
 import './CardDetails.css'
import CardText from './CardText'
import CardImages from './CardImages'
import RateBax from './RateBax'
const CardDetails = () => {
  return (<>
    <div style={{marginTop:'50px',marginLeft:'150px'}}>
                              {/* py-3 */}
              <Row className='py-3'>
                <Col lg="4">
                    <CardImages/>
                </Col>

                <Col lg="8">

                       <CardText/>
                </Col>
            </Row>

           
    </div>
    <RateBax/>
    </>
  )
}

export default CardDetails
