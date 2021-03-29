import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Head.css';

function Head() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='head'>
        <div className='head-container'>
          <Link to='/' className='head-logo' onClick={closeMobileMenu}>
            Tech Amigos
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'head-menu active' : 'head-menu'}>
            <li className='head-item'>
              <Link to='/' className='head-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='head-item'>
              <Link
                to='/contactus'
                className='head-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            

            
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default  Head;