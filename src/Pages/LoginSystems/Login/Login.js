import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    return (
        <div className='body'>
            <div className='global-container'>
            <div className='card login-form'>
            <div className='cord-body'>
                <h1 className='card-title text-center'>Login</h1>
                <div className="card-text">
                    <form action="" className='m-3'>
                        <div className="form-group">
                            <label htmlFor="Email">Email Address</label>
                            <input type="email" name="email" className='form-control form-control-sm' id="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <a href="#" className='forget'>Forget Password</a>
                            <input type="password" name="password" className='form-control form-control-sm' id="Password" />
                        </div>
                        <button type='submit' className='btn btn-primary btn-block'>
                            Sign In
                        </button>
                        <div className="signup">
                            Dont have an account? <Link to="/register">Create One</Link>
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