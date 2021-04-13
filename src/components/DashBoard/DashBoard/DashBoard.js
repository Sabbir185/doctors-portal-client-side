import React, { useState } from 'react';
import SIdebar from '../SIdebar/SIdebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';

const style = {
    backgroundColor:'#AED6F1',
    height:'100%',
}

const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointment] = useState([]);

    const handleCalender = (date) => {
        setSelectedDate(date);
        const dateApp = date.toDateString();
        
        fetch("http://localhost:5055/appointmentByDate",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({dateApp})
        })
        .then(res=> res.json())
        .then(result =>{
            setAppointment(result);
        })
    }


    return (
        <section>
            <div className="row" style={style}>
                <div className="col-md-2">
                    <SIdebar></SIdebar>
                </div>
                <div className="col-md-5">
                    <div>
                        <h3 style={{ color: '#3A4256'}}>Appointment</h3>
                        <Calendar
                            onChange={handleCalender}
                            value={new Date()}
                        />
                    </div>
                </div>
                <div className="col-md-5">
                    <AppointmentByDate selectedDate={selectedDate} appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;