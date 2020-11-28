import React from 'react';
import './Signup.css';

const Signup = (props) => {
  const { onRouteChange } = props;
  return (
    <div className='signin-form'>
      <h4 className='text-center'>Sign up </h4>
      <div className='mb-3'>
        <label htmlFor="name" className='mb-2'>Name</label>
        <input className='form-control' type="text" name='name' id='name'/>
      </div>
      <div className='mb-3'>
        <label htmlFor="email" className='mb-2'>Email</label>
        <input className='form-control' type="email" name='email' id='email'/>
      </div>
      <div className='mb-3'>
        <label htmlFor="password" className='mb-2'>Password</label>
        <input className='form-control' type="password" name='password'id='password' />
      </div>
      <div className='form-btn'>
        <button type='submit' className='btn btn-outline-primary'
        onClick={() => onRouteChange('signin')}>Sign up</button>
      </div>
    </div>
  )
}

export default Signup;