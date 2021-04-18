import React from 'react';
import Job from "../../job.png";
import './Signup.scss';
import { Link } from 'react-router-dom';

export default function Signupjob() {
  return (
    <div className="base-container" >
      <div className="header">Sign Up</div>
      <Link to="/Signup">
          Already have an Account? Sign In here
     </Link>
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

      
      <div className="footer">
      <Link to="/Signup" className="btn btn-primary">
          Sign Up
     </Link>

     



   

      </div>
    </div>
  );
}


