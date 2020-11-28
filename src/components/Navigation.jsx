import React from 'react';
import './Navigation.css';
import Logo from './Logo';
import Signout from './auth/Signout';

const Navigation = (props) => {
  const { onRouteChange, state } = props;
  return (
    <div className='header'>
      <Logo />
      {
        state.route === 'signin' || state.route === 'signup'
        ? false
        : <Signout onRouteChange={onRouteChange} /> 
      } 
    </div>
  )
}

export default Navigation;