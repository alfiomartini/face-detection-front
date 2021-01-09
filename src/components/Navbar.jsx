import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  const { route, onRouteChange } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand" >Face Detection</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {(route === 'signin' || route === 'signup') && 
            <ul className="navbar-nav">
              <li className="nav-item" onClick={()=>onRouteChange('signin')}>
                <span className="nav-link">Sign in</span>
              </li>
              <li className="nav-item" onClick={()=>onRouteChange('signup')}>
                <span className="nav-link" >Sign up</span>
              </li>
            </ul>
          }
          {route  === 'home' && 
            <ul className="navbar-nav">
              <li className="nav-item" onClick={()=>onRouteChange('signin')}>
                <span className="nav-link" >Sign out</span>
              </li>
            </ul>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;