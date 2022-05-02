import React from 'react';
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div>
            <div className="social-icons">
                <div className="socila-icon google"><span className='fab fa-google'></span></div>
                <div className="socila-icon google"><span className='fab fa-github'></span></div>
                <div className="socila-icon facebook"><span className='fab fa-facebook'></span></div>
            </div>
        </div>
    );
};

export default SocialLogin;