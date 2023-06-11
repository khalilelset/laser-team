import React from 'react';

function SignUpCraftOwner() {


  return (
    <>
    <h2 className="mb-4 animate__animated animate__fadeInDown">CraftOwner Sign Up</h2>
  <div className="form-group animate__animated animate__fadeInLeft">
  <label htmlFor="firstName" style={{marginBottom:"10px"}}>First Name</label>
  <input type="text" id="firstName" style={{ marginBottom: "20px", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  ,backgroundColor:"rgb(0,0,0,0.5)",color:"white" }} className="form-control" placeholder="Enter your first name" />
  
  <label htmlFor="lastName" style={{marginBottom:"10px"}}>Last Name</label>
  <input type="text" id="lastName" style={{marginBottom:"10px",
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white"}} className="form-control" placeholder="Enter your last name" />
  
  <label htmlFor="email" style={{marginBottom:"10px"}}>Email</label>
  <input type="email" id="email"  style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  backgroundColor:"rgb(0,0,0,0.5)"}} className="form-control" placeholder="example@gmail.com" />
  
  <label htmlFor="password" style={{marginBottom:"10px"}}>Password</label>
  <input type="password" id="password" className="form-control" 
   style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}placeholder="Enter your password" />

  <label htmlFor="password" style={{marginBottom:"10px"}}>photo for your profile:</label>
 <input type="file" id="profilePhoto" style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
 ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}} className="form-control" />

 <label htmlFor="phoneNumber"style={{marginBottom:"10px"}}>Phone Number</label>
  <input type="tel" id="phoneNumber"  className="form-control"  style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
   ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}} placeholder="Enter your phone number" />

  <label htmlFor="Craft Name" style={{marginBottom:"10px"}}>Craft Name</label>
 <input type="text" id="Craft Name" className="form-control"  style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
 ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}placeholder="Craft Name" />
 
 <label htmlFor="Description" style={{ marginBottom: '10px', }}>Description</label>
      <textarea id="Description" className="form-control" rows={4}  style={{ resize: "none",overflow:"auto",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
      ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}} placeholder="Enter Description about your craft"></textarea>
  </div>

  <button  type="submit" className="btn btn-primary">
 Sign Up
</button>
  </>
    
  );
}

export default SignUpCraftOwner;
