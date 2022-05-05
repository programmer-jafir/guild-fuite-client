import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init'
import './Register.css'
import '../Login/Login.css'

const Register = () => {
  const EmailRef = useRef('');
  const PasswordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navagate = useNavigate();

      const navigateLogin = () => {
          navagate('/login')
      }
      const handleRegister = event =>{
          event.preventDefault();
          const email = EmailRef.current.value;
          const password = PasswordRef.current.value;
          createUserWithEmailAndPassword(email, password);
      }
    return (
      <div className='form-body'>
      <div className='global-container'>
      <div className='card register-form'>
      <div className='cord-body'>
          <h1 className='form-title text-center'>Registration</h1>
          <div className="card-text">
              <form onSubmit={handleRegister} action="" className='m-3'>
                  <div className="form-group">
                      <label htmlFor="Name">Name</label>
                      <input type="name" name="name" className='form-control form-control-sm' id="Name" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="Email">Email Address</label>
                      <input ref={EmailRef} type="email" name="email" className='form-control form-control-sm' id="Email" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="Password">Password</label>
                      <input ref={PasswordRef} type="password" name="password" className='form-control form-control-sm' id="Password" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="Confirm Password">Confirm Password</label>
                      <input type="confirm password" name="confirm password" className='form-control form-control-sm' id="Confirm Password" />
                  </div>
                  <button type='submit' className=' btn form-btn btn-primary btn-block'>
                      Sign Up
                  </button>
                  <div className="signup">
                      <p> Arleady have an account? <Link to='/login' className='pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
                  </div>
                  </form>
              <h6 className='text-center'>Or</h6>
              <SocialLogin/>
          </div>
      </div>
      </div>
  </div>
  </div>
    );
};

export default Register;