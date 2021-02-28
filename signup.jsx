import React from "react";
import Job from "../../job.png";
//import {Link} from 'react-router'

export class Signup extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Sign Up</div>
        <div className="content">
          <br></br>
        <div className="image">
            <img src={Job} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
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
            Sign Up
          </button>
          <h6>Already have an account? Sign In here</h6>
        </div>
      </div>
    );
  }
}
