import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {_id, name, img, description, price} =service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='serviceContainer'>
            <img className='w-100' src={img} alt={name} />
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <p>{description}</p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;