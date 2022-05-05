import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const emailRef = useRef('');
    const PasswordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
      );

    if(loading){
        return <Loading/>
    }

    let errormassage;
    if (error) {
        errormassage = <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }

      if(user){
        navigate(from, { replace: true });
      }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = PasswordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event =>{
        navigate('/register');
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
          toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }
    return (
        <div className='form-body'>
            <div className='global-container'>
            <div className='card login-form'>
            <div className='cord-body'>
                <h1 className='card-title text-center'>Login</h1>
                <div className="card-text">
                    <form onSubmit={handleSubmit} className='m-3'>
                        <div className="form-group">
                            <label htmlFor="Email">Email Address</label>
                            <input ref={emailRef} type="email" name="email" className='form-control form-control-sm' id="Email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <a href="#" className='forget'>Forget Password</a>
                            <input ref={PasswordRef} type="password" name="password" className='form-control form-control-sm' id="Password" required/>
                        </div>
                        <button type='submit' className='btn form-btn btn-primary btn-block'>
                            Sign In
                        </button>
                        <div className="signup">
                            <p> Dont have an account? <Link to='/register' className='pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                            <p> Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                        </div>
                    </form>
                    {errormassage}
                    <h6 className='text-center'>Or</h6>
                    <SocialLogin/>
                    <ToastContainer />
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Login;