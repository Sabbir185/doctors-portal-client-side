import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <div className='col-md-4 text-center'>
            <img src={service.img} alt="" style={{height:'50px'}}/>
            <h6 className="mt-3 mb-3">{service.name}</h6>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quam.</p>
        </div>
    );
};

export default ServiceDetails;