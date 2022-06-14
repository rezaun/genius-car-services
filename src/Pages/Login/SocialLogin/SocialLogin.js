import React from 'react';
import google from './../../../images/social/google.png'
import facebook from './../../../images/social/facebook.png'
import github from './../../../images/social/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'> Google Sign In</span>
                </button>
            </div>
            <div>
                <button className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img src={facebook} alt="" />
                    <span className='px-2'> Facebook Sign In</span>
                </button>
            </div>
            <div>
                <button className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img src={github} alt="" />
                    <span className='px-2'> Github Sign In</span>
                </button>
            </div>
        </>
    );
};

export default SocialLogin;