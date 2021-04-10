import React from 'react';
import AppointmentImg from '../../../images/appointmentImg.png'
import './Appointment.css'

const Appointment = () => {

    return (
        <section className="main-container">
            <div className="sub-container">
                <div className="row ">
                    <div className="col-md-5">
                        <img src={AppointmentImg} alt="" className="img-fluid img-style"/>
                    </div>
                    <div className="col-md-7 text-white mt-5">
                        <h5 className="text-info">APPOINTMENT</h5>
                        <h3 className="mt-5">Make an appointment <br/> today</h3>
                        <p className="mb-5 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nihil. Dignissimos harum <br/> dicta officiis, excepturi cumque esse quis eveniet quaerat!</p>
                        <button className="btn btn-info">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;