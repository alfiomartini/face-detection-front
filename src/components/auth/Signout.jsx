import React from 'react';
import './Signout.css';

const Signout = (props) => {
  const { onRouteChange } = props;
  return (
    <div className='signout'>
      <button className='btn btn-dark' type='button'
       onClick={()=>{onRouteChange('signin')}} id='signout-btn'> Sign out</button>
    </div>
  )
}

export default Signout;