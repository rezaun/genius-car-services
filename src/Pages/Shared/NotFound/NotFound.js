import React from 'react';
import sleeping from '../../../images/slleping.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Work Not Found</h2>
            <p className='text-center'><img className='w-100' src={sleeping} alt="" /></p>
        </div>
    );
};

export default NotFound;