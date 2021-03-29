import React from 'react';
import Job from "../../job.png";
import './Signup.scss';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="base-container" >
      <div className="header">Sign in</div>
      <div className="content">
      <div className="image">
            <img src={Job} />
          </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
        
      </div>

      <Link to="/Forgotpassword" >
          Forgot password?
     </Link>
      <div className="footer">
      <Link to="/Homejobseeker" className="btn btn-primary">
          Sign In
     </Link>

   

      </div>
    </div>
  );
}


