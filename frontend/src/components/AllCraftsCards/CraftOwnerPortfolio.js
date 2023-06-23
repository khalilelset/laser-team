import React, { useEffect, useState } from "react";
import axios from "axios";
import {Container,Row,Col}from 'reactstrap'
import w from "./../../images/Unknown_person.jpg"
import ProductPortfolio from './ProductPortfolio'
import CraftPortfolio from "./CraftPortfolio";

const CraftOwnerPortfolio = ({ idd }) => {
 
  const [portfolio, setPortfolio] = useState(null);
  const [activeForm, setActiveForm] = useState('user1');
  const showUserForm = (formId) => {
    setActiveForm(formId);
  };
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/craftowner/portfolio/craftid/${idd}`);
        setPortfolio(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortfolio();
  }, []);

  if (!portfolio) {
    return (<div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
     </div>)
  }

  return (
<div style={{marginTop:"100px"}}>
<h1 className="text-center my-4">Portfolio of craft owner</h1>

  <Row className="text-left" style={{marginTop:"50px", marginLeft:'20px'}}>
    <Col md="2">

      {portfolio ? (
<img src={require(`./../../assets/image/profile/${portfolio.ownerImage}`)} 
alt=''style={{ width: "300px", height: "300px",borderRadius:"50%" }}/>
):(<img src={w} alt=''style={{ width: "300px", height: "300px",borderRadius:"50%" }}/>)}




    </Col>
    <Col md="8" style={{marginTop:"20px", marginLeft:'20px'}}>
    <h1 className="special-header" style={{color:"gray"}}>
        Hello MY Name <span className="text-primary" style={{fontSize:"40px"}}>
          {portfolio.ownerFName} {portfolio.ownerLName}</span>
      </h1>
      <div className="my-4">
        <h3 className="special-header">About Me:</h3>
        <h5 className="text-muted"style={{marginTop:"20px"}}>{portfolio.ownerDescription}</h5>
        <h4 className="text-muted" style={{marginTop:"50px"}}>Location :     {portfolio.ownerLocation}</h4>
      </div>
    </Col>
  </Row>
    <Container style={{marginTop:"80px"}}>
      <Row>
        <Col md="12">

          <div className="text-center my-4">           
          <button
      type="button"
      style={{
        marginLeft: "20px",
        backgroundColor: activeForm === 'user1' ? 'gray' : 'black',
         color: "white",
        border: '1px solid white',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  }}
  className={`btn btn-primary ${activeForm === 'user1' ? 'active' : ''}`}
  onClick={() => showUserForm('user1')}
>
  Products of Owner
</button>

<button
  style={{
    marginLeft: "20px",
    backgroundColor: activeForm === 'user2' ? 'gray' : 'black',
    color: "white",
    border: '1px solid white',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  }}
  type="button"
  className={`btn btn-primary ${activeForm === 'user2' ? 'active' : ''}`}
  onClick={() => showUserForm('user2')}
>
Crafts of Owner
</button>
{activeForm === 'user1' && (<ProductPortfolio portfolio={portfolio}/>)}




 </div>
          
          <div className="my-4">
          
          {activeForm === 'user2' && (<CraftPortfolio portfolio={portfolio}/>)}
          </div>
        </Col>
      </Row>
    </Container></div>
  );
};

export default CraftOwnerPortfolio;











