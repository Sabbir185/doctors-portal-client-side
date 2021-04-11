import React from 'react';
import AppointmentImg from '../../../images/appointmentImg.png'
import './AppointmentInfo.css'

const AppointmentInfo = () => {
    return (
        <div className="main-container container-fluid">
            <div className="row ">
                <div className="col-sm-12 col-md-8 col-lg-6 col-xlg-6 ">
                    <img src={AppointmentImg} alt="" className="underLine img-style img-fluid"/>
                </div>
                <div className="col-sm-12 col-md-4 text-white text-area">
                    <h5 className='text-info  mt-5 mb-4'>APPOINTMENT</h5>
                    <h3 className='mb-3'>Make an appointment <br/> Today</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, architecto. Iusto debitis magnam cupiditate fuga?</p>
                    <button className="btn btn-info">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentInfo;