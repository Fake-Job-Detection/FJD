import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-main'>
      
      <div class='footer-links-main'>
        <div className='footer-column'>
          <div class='footer-links'>
            <h2>Tech Amigos</h2>
            <Link to='/AboutUs'>About Us</Link>
            <Link to='/Testimonials'>Testimonials</Link>
           
            
          </div>
          <div class='footer-links'>
            <h2>Employers</h2>
            <Link to='/Company'>Sign In</Link>
            <Link to='/Company'>Post a job</Link>
          </div>
        </div>
        <div className='footer-column'>
          <div class='footer-links'>
            <h2>Community</h2>
            <Link to='/ContactUs'>Help/ Contact Us</Link>
            
        
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default Footer;