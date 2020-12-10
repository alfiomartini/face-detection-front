import { React, Component } from 'react';
import './Signup.css';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      signUpName:'',
      signUpEmail:'',
      signUpPassword:''
    }
  }

  onNameChange = (event) => {
    this.setState({signUpName:event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({signUpEmail:event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({signUpPassword:event.target.value});
  }

  onSubmitSignup = () => {
    const {signUpName, signUpEmail, signUpPassword} = this.state;
    fetch('http://localhost:3100/register', {
      method:'post',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
        name:signUpName,
        email:signUpEmail,
        password:signUpPassword
      })
    })
    .then(resp => resp.json().then(data => {
      return ({status: resp.status, body: data})
    }))
    .then(obj => {
      console.log('resp', obj);
      if (obj.status === 200){
        this.props.loadUser(obj.body.user);
        this.props.onRouteChange('home');
      }
      else {
        const message = document.querySelector('.signup-error');
        message.innerHTML = obj.body.message;
        message.classList.remove('signup-error-hide');
      }
    })
    .catch(error => console.log(error));
  }
  render(){
    return (
      <div className='signin-form'>
        <h4 className='text-center'>Sign up </h4>
        <div className='mb-3'>
          <label htmlFor="name" className='mb-2'>Name</label>
          <input onChange={this.onNameChange}
          className='form-control' type="text" name='name' id='name'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="email" className='mb-2'>Email</label>
          <input onChange={this.onEmailChange}
          className='form-control' type="email" name='email' id='email'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="password" className='mb-2'>Password</label>
          <input onChange={this.onPasswordChange}
          className='form-control' type="password" name='password'id='password' />
        </div>
        <div className='signup-error signup-error-hide text-center my-3'>
        </div>
        <div className='form-btns'>
          <button type='submit' className='btn btn-outline-primary'
          onClick={this.onSubmitSignup}>Sign up</button>
         <button type='submit' className='btn btn-dark border boder-light'
          onClick={() => this.props.onRouteChange('signin')}>Sign in</button>
        </div>
      </div>
    )
  }
}

export default Signup;