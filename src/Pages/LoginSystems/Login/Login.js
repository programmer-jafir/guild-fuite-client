import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const PasswordRef = useRef('');
    const navagate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = PasswordRef.current.value;
        console.log(email, password);
    }

    const navigateRegister = event =>{
        navagate('/register');
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

export default Login;