import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price} =service;
    return (
        <div className='serviceContainer'>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Service;