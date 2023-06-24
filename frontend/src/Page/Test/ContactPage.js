import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContactBox from './ContactBox'
import axios from 'axios'

const ContactPage = () => {
  const[cont,setCont]=useState([])
  const getAllCnt= async ()=>{
const res = await axios.get("http://localhost:4000/api/contact/getMessages")
setCont(res.data.data)
  }
  useEffect(()=>{
    getAllCnt();
  },[])
  console.log(cont)

  return (
    <Container >
       <Row className='py-3'>
      <Col sm="3" xs="2" md="2">
      <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/ContactPage" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                    Contact                    </div>
                </Link>
                <Link to="/Transaction" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Transaction                    </div>
                </Link>
            </div>
        </div>
        </Col>
    
                 
                
                <Col sm="9" xs="10" md="10">
{/* {
cont.map((co,index)=>{
  {console.log(co)}
  return ( <ContactBox username={co.fullName} phon={co.subject} message={co.message}/>)
  })
} */}

{
          cont.map((co,index)=>{
            {console.log(co)}
          return(  <ContactBox username={co.fullName} phon={co.subject} message={co.message} email={co.email}/>)
          })
        }

                  {/* <ContactBox username="Khaled Khaled" message="bonsoir , je ecrire cette message car il y a un problem ds l id et mot de pass , je mais un mot de 4 caracter sans problem et lorsque je demande d entre un erreur " phon="71740318"/>
                  <ContactBox username="Khaled Khaled" message="bonsoir , je ecrire cette message car il y a un problem ds l id et mot de pass , je mais un mot de 4 caracter sans problem et lorsque je demande d entre un erreur " phon="71740318"/>
                  <ContactBox username="Khaled Khaled" message="bonsoir , je ecrire cette message car il y a un problem ds l id et mot de pass , je mais un mot de 4 caracter sans problem et lorsque je demande d entre un erreur " phon="71740318"/>
                  <ContactBox username="Khaled Khaled" message="bonsoir , je ecrire cette message car il y a un problem ds l id et mot de pass , je mais un mot de 4 caracter sans problem et lorsque je demande d entre un erreur " phon="71740318"/> */}
                  
                </Col>
       </Row>
    </Container>


    
  )
}

export default ContactPage
