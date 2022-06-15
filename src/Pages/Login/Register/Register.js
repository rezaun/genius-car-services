import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Your Name' name='name' required />

                <input type="email" name='email' placeholder='Your Email' required />

                <input type="password" name='password' placeholder='Type Your Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'text-primary ps-2' : 'ps-2 text-danger'} htmlFor='terms'> Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' :'text-danger'}`} htmlFor='terms'> Accept Genius Car Terms and Conditions</label>

                <input
                    disabled={!agree}
                    className=' w-50 btn btn-primary mx-auto mt-3'
                    type="submit"
                    value='Register' />
            </form>
            <p>Already have an account <Link to='/login' className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;