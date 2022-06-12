import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price} =service;
    return (
        <div className='serviceContainer'>
            <img className='w-100' src={img} alt={name} />
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <p>{description}</p>
            <button className='btn btn-primary'>Hire us</button>
        </div>
    );
};

export default Service;