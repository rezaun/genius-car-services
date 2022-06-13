import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='text-center mt-5 pt-2'>
            <p>Copyright &copy; Developed by <a href="https://rezaun.netlify.app/" >Kabir</a>, {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;