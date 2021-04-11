import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const AppointmentMain = () => {
    const handleCalender = (data) => {
        console.log(data)
    }


    return (
        <div>
            <NavBar></NavBar>
            <AppointmentHeader handleCalender={handleCalender}></AppointmentHeader>
            <Footer></Footer>
        </div>
    );
};

export default AppointmentMain;