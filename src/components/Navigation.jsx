import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
  const { onRouteChange } = props;
  return (
    <div className='navigation'>
      {/* <button className='btn btn-secondary'> Sign in</button> */}
      <button className='btn btn-dark' type='button'
       onClick={()=>{onRouteChange('signin')}} id='signout-btn'> Sign out</button>
    </div>
  )
}

export default Navigation;