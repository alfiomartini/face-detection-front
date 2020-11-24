import React from 'react';
import './Logo.css';
// see: https://stackoverflow.com/questions/34582405/react-wont-load-local-images
import profile from './smart_logo/default.png';

const imgSize = {
  height: '150px',
  width: '150px',
  margin: '20px'
};

const Logo = () => {
  return (
    <div className='logo'>
      <img src={profile} style={imgSize} alt="Logo"/>
    </div>
    
  )
}

export default Logo;