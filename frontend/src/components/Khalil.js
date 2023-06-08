import React from 'react'

export default function Khalil() {
  return (
    <div>
       <h2 className="title">Sign in</h2>
 
 <div className="input-field">
<i className="fas fa-envelope"></i>
<input type="email" placeholder="Email" />
</div>
 <div className="input-field">
   <i className="fas fa-lock"></i>
   <input type="password" placeholder="Password" />
 </div>
 <input type="submit" value="Login" className="btn solid" />
    </div>
  )
}
