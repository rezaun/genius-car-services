import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,        
      ] = useCreateUserWithEmailAndPassword(auth);


    
    const navigateLogin = () =>{
        navigate('/login');
    }
    
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Your Name' name='name' required/>
               
                <input type="email" name='email' placeholder='Your Email' required/>
                       
                <input type="password" name='password' placeholder='Type Your Password' required/>
              
                <input type="submit" value='Register'/>
            </form>
            <p>Already have an account <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;