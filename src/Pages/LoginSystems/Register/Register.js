import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init'
import './Register.css'
import '../Login/Login.css'
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const NameRef = useRef('');
  const EmailRef = useRef('');
  const PasswordRef = useRef('');
  const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

      let errormassage;
    if (error) {
        errormassage = <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }

      if(loading){
        return <Loading/>
    }

      const navigateLogin = () => {
        navigate('/login')
      }
      const handleRegister = async (event) =>{
          event.preventDefault();
          const name = NameRef.current.value;
          const email = EmailRef.current.value;
          const password = PasswordRef.current.value;
          await createUserWithEmailAndPassword(email, password);
          await updateProfile({ displayName: name});
          console.log('Updated profile');
          navigate('/home');

          const password1 = document.getElementById("Password").value;
          const ConfirmPassword = document.getElementById("Confirm Password").value;

          if(password1 !== ConfirmPassword){
            document.getElementById('massage').innerHTML ="Password are not match"
          }
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
                      <input ref={NameRef} type="name" name="name" className='form-control form-control-sm' id="Name" />
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
                      <input type="password" name="confirm password" className='form-control form-control-sm' id="Confirm Password" />
                  </div>
                  <button type='submit' className=' btn form-btn btn-primary btn-block'>
                      Sign Up
                  </button>
                  <div className="signup">
                      <p> Arleady have an account? <Link to='/login' className='pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
                  </div>
                  </form>
                  <p id = 'massage' className='text-danger text-center'></p>
                  <p className='text-center'>{errormassage}</p>
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