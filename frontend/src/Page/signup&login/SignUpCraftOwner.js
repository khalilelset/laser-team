import"./signup.css"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupcoaction } from "../../redux/actions/SignUpCOAction";


function SignUpCraftOwner() {
  const [ownerFName, setownerFName] = useState("");
const [ownerLName,  setownerLName] = useState("");
const [email, setEmail] = useState("");
const [ownerPhNumber, setownerPhNumber,] = useState("");
const [ownerLocation, setownerLocation] = useState("");
const [ craftName, setcraftName] = useState("");
const [ password,  setpassword] = useState("");
const [ownerDescription, setownerDescription,] = useState("");
const [ownerImage, setownerImage] = useState("");
const loading = useSelector((state) => state.signcpco.loading);
const success = useSelector((state) => state.signcpco.success);
const error = useSelector((state) => state.signcpco.error);
const dispatch = useDispatch();

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    ownerFName,
    ownerLName,
    email,
    ownerPhNumber,
    ownerLocation,
    craftName,
    password,
    ownerDescription,
    ownerImage
  };
  dispatch(signupcoaction(formData));
};

  return (
    <>
    <h2 className="mb-4 animate__animated animate__fadeInDown">CraftOwner Sign Up</h2>
  <div className="form-group animate__animated animate__fadeInLeft">

  {success && (
 <div className="alert alert-success" role="alert">
 Form submitted successfully   </div>
 )}
  {error && (
  <div className="alert alert-danger" role="alert">
    {error.message.split(",")[0]}
  </div>
)}


  <label htmlFor="firstName" style={{marginBottom:"10px"}}>First Name</label>
  <input type="text" id="firstName" style={{ marginBottom: "20px", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  ,backgroundColor:"rgb(0,0,0,0.5)",color:"white" }} className="form-control" placeholder="Enter your first name" value={ownerFName} onChange={(e) => setownerFName(e.target.value)} />
  
  <label htmlFor="lastName" style={{marginBottom:"10px"}}>Last Name</label>
  <input type="text" id="lastName" style={{marginBottom:"10px",
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}
   className="form-control" placeholder="Enter your last name"  value={ownerLName} onChange={(e) => setownerLName(e.target.value)} />
  
  <label htmlFor="email" style={{marginBottom:"10px"}}>Email</label>
  <input type="email" id="email"  style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  backgroundColor:"rgb(0,0,0,0.5)", color:"white"}} className="form-control"  placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />

<label htmlFor="lastName" style={{marginBottom:"10px"}}>Your Location</label>
<input type="text" id="lastName" style={{marginBottom:"10px",
boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}
 className="form-control" placeholder="Enter your last name"  value={ownerLocation} onChange={(e) => setownerLocation(e.target.value)} />
  
  
  <label htmlFor="password" style={{marginBottom:"10px"}}>Password</label>
  <input type="password" id="password" className="form-control" 
   style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
   ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}placeholder="Enter your password"  value={password} onChange={(e) => setpassword(e.target.value)} />

  <label htmlFor="password" style={{marginBottom:"10px"}}>photo for your profile:</label>
 <input type="file" id="profilePhoto" style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
 ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}} className="form-control" value={ownerImage} onChange={(e) => setownerImage(e.target.value)} />

 <label htmlFor="phoneNumber"style={{marginBottom:"10px"}}>Phone Number</label>
  <input type="tel" id="phoneNumber"  className="form-control"  style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
   ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}} placeholder="Enter your phone number" value={ownerPhNumber} onChange={(e) => setownerPhNumber(e.target.value)} />

  <label htmlFor="Craft Name" style={{marginBottom:"10px"}}>Craft Name</label>
 <input type="text" id="Craft Name" className="form-control"  style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
 ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}placeholder="Craft Name" value={craftName} onChange={(e) => setcraftName(e.target.value)} />
 
 <label htmlFor="Description" style={{ marginBottom: '10px', }}>Description</label>
      <textarea id="Description" className="form-control" rows={4}  style={{ resize: "none",overflow:"auto",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
      ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}} placeholder="Enter Description about your craft" 
      value={ownerDescription} onChange={(e) => setownerDescription(e.target.value)} ></textarea>
  </div>

  <button onClick={handleSubmit} type="submit" className="btn btn-primary" disabled={loading}>
{loading ? "loading..." : "Sign Up"}
</button> 
  </>
    
  );
}

export default SignUpCraftOwner;