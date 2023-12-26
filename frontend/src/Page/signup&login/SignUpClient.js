import"./signup.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupaction } from "../../redux/actions/SignUpAction";
export default function SignUpClient() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [photo, setphoto] = useState("");
   const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const fileName = file ? file.name : '';
    setphoto(fileName);
  };
  const loading = useSelector((state) => state.signup.loading);
  const success = useSelector((state) => state.signup.success);
  const error = useSelector((state) => state.signup.error);
  const dispatch = useDispatch();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      fname: FName,
      lname: LName,
      email,
      password: Password,
      image: photo,
    };
    dispatch(signupaction(formData));
  };
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <h2 className="mb-4 animate__animated animate__fadeInDown ">Client Sign Up </h2>
      <div className="form-group animate__animated animate__fadeInLeft">

      {success && (navigate("/StorePage"))}
      {error && (
     <div className="alert alert-danger" role="alert">
     {error.message.split(",")[0]}
      </div>
    )}

        <label htmlFor="firstName" style={{ marginBottom: "10px"}}>First Name</label>
        <input type="text" id="firstName" className="form-control"
          style={{ marginBottom: "20px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white" }}
           placeholder="Enter your first name" value={FName} onChange={(e) => setFName(e.target.value)} />
        
        <label htmlFor="lastName" style={{ marginBottom: "10px",}}>Last Name</label>
        <input type="text" id="lastName" style={{ marginBottom: "20px",backgroundColor:"rgb(0,0,0,0.5)",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',color:"white" }} 
        className="form-control" placeholder="Enter your last name"
         value={LName} onChange={(e) => setLName(e.target.value)} />
        
        <label htmlFor="email" style={{ marginBottom: "10px",}}>Email</label>
        <input type="email" id="email"  style={{ marginBottom: "20px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}  
        className="form-control" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label htmlFor="password" style={{ marginBottom: "10px",}}>Password</label>
        <input type={showPassword ? "text" : "password"} id="password"   style={{ marginBottom: "20px",backgroundColor:"rgb(0,0,0,0.5)",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',color:"white" }} 
        className="form-control" placeholder="Enter your password"  value={Password} onChange={(e) => setPassword(e.target.value)} />
        <div>
       <input
          type="checkbox" style={{ width: "20px", height: "20px", color: 'white' }}
        onClick={togglePasswordVisibility}
      />   show password 
      </div> 

        <label htmlFor="profilePhoto" style={{ marginBottom: "10px",marginTop:"30px"}}>Photo for your profile:</label>
        <input type="file" id="profilePhoto" style={{ marginBottom: "20px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:"rgb(0,0,0,0.5)",color:"white"} }
         className="form-control"   onChange={handlePhotoChange} />
      </div>

      <button onClick={handleSubmit} type="submit" className="btn btn-primary" disabled={loading}>
      {loading ? "loading..." : "Sign Up"}
      </button>

      
      
      
      <div style={{ height: '213px' }}></div>
    </>
  );
}
