import React from 'react';
import './Signin.css';

const Signin = (props) => {
  const { onRouteChange } = props;
  return (
    <div  className='signin-form'>
      <h4 className='text-center'>Sign in </h4>
      <div className='mb-3'>
        <label htmlFor="email" className='mb-2'>Email</label>
        <input className='form-control' type="email" name='email' id='email'/>
      </div>
      <div className='mb-3'>
        <label htmlFor="password" className='mb-2'>Password</label>
        <input className='form-control' type="password" name='password'id='password' />
      </div>
      <div className='form-btns'>
        <button type='submit' className='btn btn-outline-primary'
        onClick={() => onRouteChange('home')}>Sign in</button>
        <button type='button' className='btn btn-dark border boder-light'
         onClick={() => onRouteChange('signup')}>Sign up</button>
      </div>
    </div>
  )
}

export default Signin;