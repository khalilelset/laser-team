import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom'

const TeamCard = ({ name, definition, email, linkedin, imageUrl }) => {
  return (
  //   <div className="profile-card">
  //   <div className="profile-image-container">
  //     <img src={imageUrl} alt="Profile" className="profile-image" />
  //   </div>
    
  //   <h2 className="profile-name">{name}</h2>
  //   <p className="profile-definition">{definition}</p>
  //   <p className="profile-email">{email}</p>
  //   <a href={linkedin} className="profile-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  // </div>
  <Row>
    <Zoom>
    
  <Col sm="12" className='mb-3'>
  <Card className='d-flex flex-row' style={{backgroundColor:'#F8F8F8'}}> 
             <Card.Img variant="top" src={imageUrl} className='img-item' style={{width:"200px" ,height:'200px'}}/>
             <Card.Body>
              
               <Card.Text className='py-2'>
              
               <div className='item-descreption'>{name}</div>
               <div className='item-descreption'>{email}</div>
               <div className='item-descreption'>{definition}</div>
               <div className='item-descreption'><a href={linkedin} className="profile-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
               <div className='item-descreption'>ggggg</div>
               </Card.Text>

               </Card.Body>
   </Card>
 </Col>
</Zoom>
  </Row>


  )
}

export default TeamCard
