import"./signup.css"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginaction } from "../../redux/actions/LoginCOAction";
import { useNavigate } from "react-router-dom";

export default function LoginCraftOwner() {
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const loading = useSelector((state) => state.loginco.loading);
    const success = useSelector((state) => state.loginco.success);
    const error = useSelector((state) => state.loginco.error);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
    event.preventDefault();
     const formData = {
    email,
    password: Password,
  };
  dispatch(loginaction(formData));
 
};
  return (
    <>
     <h2 className="mb-4 animate__animated animate__fadeInDown ">Craft Owner Login</h2>
 <div className="form-group animate__animated animate__fadeInLeft"></div>

 {success && ( navigate("/AllCards"))}

  {error && (
 <div className="alert alert-danger" role="alert">
 {error.message}
  </div>
)}

<label htmlFor="email" style={{ marginBottom: "10px",}}>Email</label>
 <input type="email" id="email"  style={{ marginBottom: "20px",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
 ,backgroundColor:"rgb(0,0,0,0.5)",color:"white"}}  
 className="form-control" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />

<label htmlFor="password" style={{ marginBottom: "10px",}}>Password</label>
<input type="password" id="password"   style={{ marginBottom: "20px",backgroundColor:"rgb(0,0,0,0.5)"
,boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',color:"white" }} 
className="form-control" placeholder="Enter your password"  value={Password} onChange={(e) => setPassword(e.target.value)} />
      

      <button onClick={handleSubmit} type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "loading..." : "Login"}
        </button>
        <div style={{ height: '300px' }}></div>
        </>)
}

