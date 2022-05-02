import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'
const Register = () => {
    return (
        <div className='body'>
            <div className='global-container'>
            <div className='card register-form'>
            <div className='cord-body'>
                <h1 className='card-title text-center'>Registration</h1>
                <div className="card-text">
                    <form action="" className='m-3'>
                        <div className="form-group">
                            <label htmlFor="Email">Email Address</label>
                            <input type="email" name="email" className='form-control form-control-sm' id="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <input type="password" name="password" className='form-control form-control-sm' id="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Confirm Password">Confirm Password</label>
                            <input type="confirm password" name="confirm password" className='form-control form-control-sm' id="Confirm Password" />
                        </div>
                        <button type='submit' className='btn btn-primary btn-block'>
                            Sign Up
                        </button>
                        <div className="signup">
                            Arleady have an account? <Link to="/login">Login</Link>
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