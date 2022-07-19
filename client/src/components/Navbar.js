import React, { useState, useEffect, useContext } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Context } from '../context/Context';

function Navbar() {
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

  // Login
  const {user, dispatch} = useContext(Context);
  const handleLogout = () => {
    dispatch({ type : "LOGOUT" })
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Epilogue
            <i class="fa-solid fa-moon"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {user && (
              <li className='nav-item'>
                <Link
                  to='/family'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Family
                </Link>
              </li>
            )}
            {user && (
              <li className='nav-item'>
                <Link
                  to='friends'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Friends
                </Link>
              </li>
            )}
            {user && (
              <li className='nav-item'>
                <Link
                  to='/personal'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Personal
                </Link>
              </li>
            )}
            {user && (
              <li className='nav-item'>
                <Link 
                  to='/asset' 
                  className='nav-links' 
                  onClick={closeMobileMenu}>
                  Asset
                </Link>
              </li>
            )}
            
            {/* <li className="nav-item" onClick={}>
              {user && "LOGOUT"}
            </li> */}
            

            {user ? (
              <li>
                <Link
                  to='/login'
                  className='nav-links-mobile'
                  onClick={handleLogout} 
                >
                  LOG OUT
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to='/login'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu} 
                >
                  LOG IN
                </Link>
              </li>
            )}            
          </ul> 

          {user && button ? (
            <Button buttonStyle='btn--outline' goto='/' onClick={handleLogout} >LOG OUT</Button>
          ) : (button ? (
            <Button buttonStyle='btn--outline' goto='/login'>LOG IN</Button>
          ) : (
            null
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;