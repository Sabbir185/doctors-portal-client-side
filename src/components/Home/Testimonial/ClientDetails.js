import React from 'react';
import './ClientDetails.css'

const ClientDetails = ({ comment }) => {

    return (
        <div className="mt-5 box-style">
            <p className="text-secondary txt-style">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatibus, enim sint tempora eum aut odio veritatis harum expedita sit.</p>
            <div className="d-flex align-items-center mt-5">
                <img src={comment.img} alt=""/>
                <div className="ms-3">
                    <h4>{comment.name}</h4>
                    <h6>{comment.state}</h6>
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;