import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }
    
    const handleLogin = event =>{
        event.preventDefault();
    }
    return (
        <div className='register'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='Your Name' name='name' id="" required/>
               
                <input type="email" name='email' placeholder='Your Email' id="" required/>
                       
                <input type="password" name='password' placeholder='Type Your Password' id="" required/>
              
                <input type="submit" value='Register'/>
            </form>
            <p>Already have an account <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;