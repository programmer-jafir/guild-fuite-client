import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css'

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errormassage;

    if(loading){
        return <Loading/>
    }
    
    if (error) {
        errormassage = <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }

      if(user){
        navigate(from, { replace: true });
      }

    return (
        <div>
            {errormassage}
            <div className="social-icons">
                <div onClick={() => signInWithGoogle()} className="socila-icon google"><span className='fab fa-google'></span></div>
                <div className="socila-icon google"><span className='fab fa-github'></span></div>
                <div className="socila-icon facebook"><span className='fab fa-facebook'></span></div>
            </div>
        </div>
    );
};

export default SocialLogin;