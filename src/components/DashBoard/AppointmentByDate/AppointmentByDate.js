import React from 'react';

const AppointmentByDate = ({ selectedDate, appointments }) => {
    
    return (
        <div>
            <h3>Appointments : {appointments.length}</h3>
        </div>
    );
};

export default AppointmentByDate;