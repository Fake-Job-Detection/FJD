import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Tech Amigos</h2>
            <Link to='/AboutUs'>About Us</Link>
            <Link to='/Testimonials'>Testimonials</Link>
            <Link to='/'>Guides</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Employers</h2>
            <Link to='/'>Get an employer</Link>
            <Link to='/'>Account</Link>
            <Link to='/'>Post a job</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Community</h2>
            <Link to='/'>Help/ Contact Us</Link>
            <Link to='/'>Guidelines</Link>
        
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default Footer;