import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-5'>
            <p>Copyright &copy; Developed by <a href="https://rezaun.netlify.app/" >Kabir</a>, {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;