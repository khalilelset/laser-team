import"./signup.css"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupcoaction } from "../../redux/actions/SignUpCOAction";
import { useNavigate } from "react-router-dom";


function SignUpCraftOwner() {
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();
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

const handlePhotoChange = (e) => {
  const file = e.target.files[0];
  const fileName = file ? file.name : '';
  setownerImage(fileName);
};

console.log(ownerImage)
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
function togglePasswordVisibility() {
  setShowPassword(!showPassword);
}
  return (
    <>
    <h2 className="mb-4 animate__animated animate__fadeInDown">CraftOwner Sign Up</h2>
  <div className="form-group animate__animated animate__fadeInLeft">

  {success && ( navigate("/StorePage"))}

  {error && (
  <div className="alert alert-danger" role="alert">
    {error.message}
    
  </div>)}


  <label htmlFor="firstName" style={{marginBottom:"10px"}}>First Name</label>
  <input type="text" id="firstName" style={{ marginBottom: "30px", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  ,backgroundColor:"rgb(0,0,0,0.5)",color:"white" }} className="form-control" placeholder="Enter your first name" value={ownerFName} onChange={(e) => setownerFName(e.target.value)} />
  
  <label htmlFor="lastName" style={{marginBottom:"10px"}}>Last Name</label>
  <input type="text" id="lastName" style={{marginBottom:"20px",
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}
   className="form-control" placeholder="Enter your last name"  value={ownerLName} onChange={(e) => setownerLName(e.target.value)} />
  
  <label htmlFor="email" style={{marginBottom:"10px"}}>Email</label>
  <input type="email" id="email"  style={{marginBottom:"20px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  backgroundColor:"rgb(0,0,0,0.5)", color:"white"}} className="form-control"  placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />

<label htmlFor="lastName" style={{marginBottom:"10px"}}>Your Location</label>
<input type="text" id="lastName" style={{marginBottom:"20px",
boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}
 className="form-control" placeholder="Enter your last name"  value={ownerLocation} onChange={(e) => setownerLocation(e.target.value)} />
  
  
  <label htmlFor="password" style={{marginBottom:"20px"}}>Password</label>
  <input type={showPassword ? "text" : "password"} id="password" className="form-control" 
   style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
   ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}placeholder="Enter your password"  value={password} onChange={(e) => setpassword(e.target.value)} />

<div>
       <input
          type="checkbox" style={{ width: "20px", height: "20px", color: 'white' }}
        onClick={togglePasswordVisibility}
      />   show password 
</div>



  <label htmlFor="password" style={{marginBottom:"10px" , marginTop:"30px"}}>photo for your profile:</label>
 <input type="file" id="profilePhoto" style={{marginBottom:"10px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
 ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}} className="form-control"  onChange={handlePhotoChange} />

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
