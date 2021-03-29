import React from 'react';
import signupemp from "../../signupemp.jpg";
import './Signup.scss';

export default function SignUpEmp() {
  return (
    <div className="base-container" >
      <div className="header">Sign in</div>
      <div className="content">
      <div className="image">
            <img src={signupemp} />
          </div>

          <div className="form">
          <div className="form-group">
            <label htmlFor='companyname'>Company Name</label>
            <input type='text' name="companyname" placeholder="Company Name" />
          </div>

        <div className="form">
          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Sign In
        </button>
      </div>
    </div>
    </div>
  );
}

