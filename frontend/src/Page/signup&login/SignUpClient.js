import"./signup.css"
import React from 'react';

export default function SignUpClient() {
  return (
    <>
      <h2 className="mb-4 animate__animated animate__fadeInDown ">Client Sign Up</h2>
      <div className="form-group animate__animated animate__fadeInLeft">

        <label htmlFor="firstName" style={{ marginBottom: "10px"}}>First Name</label>
        <input type="text" id="firstName" className="form-control"
          style={{ marginBottom: "20px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white" }}
           placeholder="Enter your first name"placeholderTextColor="white"  />
        
        <label htmlFor="lastName" style={{ marginBottom: "10px",}}>Last Name</label>
        <input type="text" id="lastName" style={{ marginBottom: "20px",backgroundColor:"rgb(0,0,0,0.5)",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',color:"white" }} 
        className="form-control" placeholder="Enter your last name"placeholderTextColor="white"  />
        
        <label htmlFor="email" style={{ marginBottom: "10px",}}>Email</label>
        <input type="email" id="email"  style={{ marginBottom: "20px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}  
        className="form-control" placeholder="example@gmail.com" />
        
        <label htmlFor="password" style={{ marginBottom: "10px",}}>Password</label>
        <input type="password" id="password"   style={{ marginBottom: "20px",backgroundColor:"rgb(0,0,0,0.5)",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',color:"white" }} 
        className="form-control" placeholder="Enter your password" placeholderTextColor="white"  />
        
        <label htmlFor="profilePhoto" style={{ marginBottom: "10px",}}>Photo for your profile:</label>
        <input type="file" id="profilePhoto" style={{ marginBottom: "20px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white"} }
         className="form-control" placeholderTextColor="white"  />
      </div>

      <button type="submit" className="btn btn-primary">
       Sign Up
      </button>

      
      
      
      <div style={{ height: '213px' }}></div>
    </>
  );
}
