import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const DoctorInfo = ({ info }) => {
    const cardStyle = {
        padding:'20px',
        margin:'20px'
    }
    return (
        <div className="col-md-3 text-center" style={cardStyle}>
            <img style={{height:'200px'}} src={`http://localhost:5055/${info.img}`} alt="" className='img-fluid'/>
            <h6 className="mt-3">{info.name}</h6>
            <small className="text-secondary"><FontAwesomeIcon icon={faPhoneAlt} className="text-info"></FontAwesomeIcon>{info.phone}</small>
        </div>
    );
};

export default DoctorInfo;