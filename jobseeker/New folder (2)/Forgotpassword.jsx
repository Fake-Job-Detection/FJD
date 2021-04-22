import React from 'react';
import Forget from "../../forget.png";
import './Signup.scss';
import { Link } from 'react-router-dom';

export default function Forgotpassword() {
  return (
    <div className="base-container" >
      <div className="header">Forgot Password</div>
      <div className="content">
      <div className="image">
            <img src={Forget} />
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

          <div className="form-group">
            <label htmlFor="conpassword">Confirm Password</label>
            <input type="conpassword" name="conpassword" placeholder="Confirm password" />
          </div>
        </div>
        
      </div>

     
      <div className="footer">
      <Link to="/Signup" className="btn btn-primary">
          Reset
     </Link>

   

      </div>
    </div>
  );
}


