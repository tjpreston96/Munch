import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    return (
      <>
        {user ? (
          <nav
            className='navbar navbar-expand-lg navbar-light bg-light' >
            <Link to="/" className='navbar-brand'>
              Welcome, {user.name}
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>

                  <Link to="/" className='nav-link'>
                    Home
                  </Link>
                </li>
                <li className='nav-item logout'>
                  <Link to='/users' className='nav-link'>
                    Users
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/profile' className='nav-link'>
                    Profile
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/search' className='nav-link'>
                    Search
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/' className='nav-link'>
                    Recipe Board
                  </Link>
                </li>

                <Link to='/' className='nav-link logout' onClick={handleLogout}>
                  Log Out
                </Link>
              </ul>
            </div>
          </nav>
        ) : (
          <nav
            className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to="/" className='navbar-brand' >
            Welcome
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li>
                  <Link to='/login' className='nav-link'>
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to='/signup' className='nav-link'>
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </>
    );
}
export default NavBar;