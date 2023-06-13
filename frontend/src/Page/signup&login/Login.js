import React, { useState } from 'react'
import 'animate.css';
import { Link } from 'react-router-dom';
import backgroundImage1 from './../../assets/images/background sign&log/c1.jpeg';
import backgroundImage2 from './../../assets/images/background sign&log/c2.jpeg';
import LoginClient from './LoginClient';
import LoginCraftOwner from './LoginCraftOwner';

export default function Login() {

  const [activeForm, setActiveForm] = useState('user1');

  const showUserForm = (formId) => {
    setActiveForm(formId);
  };

  let backgroundImage = '';

  if (activeForm === 'user1') {
    backgroundImage = backgroundImage1;
  } else if (activeForm === 'user2') {
    backgroundImage = backgroundImage2;
  }

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' , color:"white"}}>

      <div className="container py-5">
      
      <Link to="/SignUp" className={`btn btn-primary }`} 
      style={{ border: '1px primary blue',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
  i'm new user
</Link>


        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="text-center mb-4">
              <h4 style={{ marginBottom: "20px"  ,textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)", color:"white" }}>Are you?</h4>
              
              
              <button
      type="button"
      style={{
        marginLeft: "20px",
        backgroundColor: activeForm === 'user1' ? 'white' : 'transparent',
         color: activeForm === 'user1' ? 'black' : 'white',
        border: '1px solid white',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  }}
  className={`btn btn-primary ${activeForm === 'user1' ? 'active' : ''}`}
  onClick={() => showUserForm('user1')}
>
  Client
</button>

<button
  style={{
    marginLeft: "20px",
    backgroundColor: activeForm === 'user2' ? 'white' : 'transparent',
    color: activeForm === 'user2' ? 'black' : 'white',
    border: '1px solid white',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  }}
  type="button"
  className={`btn btn-primary ${activeForm === 'user2' ? 'active' : ''}`}
  onClick={() => showUserForm('user2')}
>
  Craft Owner
</button>
</div>
            <form className={`user-form ${activeForm ? 'active' : ''}`} style={{color:"white",textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)"}}>
              {activeForm === 'user1' && (<LoginClient />)}
              {activeForm === 'user2' && (<LoginCraftOwner />)}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

