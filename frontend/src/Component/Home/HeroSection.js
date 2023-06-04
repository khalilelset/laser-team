import React from 'react'

import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='heroContainer'>
      <h1 className='hero-title'><span style={{color:"#4cff1b"}}>Craft Connect.</span> Connecting Craft<br/>
Owners, Customers, and Companies.</h1><br/><br/>
      <p>Welcome to Cra Connect, a powerful platform that brings<br/>
together cra owners, customers, and companies in a seamless<br/>
online experience. Whether you're looking to explore unique cras,<br/>
showcase your creations, or forge valuable partnerships, Cra<br/>
Connect is here to empower you.</p><br/><br/>
<div >
<Link to="Login" class="login-button-hero"> Login
    </Link></div>
    <div><p><br/><br/>Discover the boundless possibilities of Craft Connect through our comprehensive website <br/>
description page. Gain insights into the platform's purpose and features, and uncover <br/>
the array of benefits it offers to customers, craft owners, and companies alike.</p></div>
    </div>
  )
}

export default HeroSection
