import React from 'react';

const AppointmentByDate = ({ selectedDate, appointments }) => {

    return (
        <div>
            <h3>Appointments : {appointments.length}</h3>
            {
                appointments.map(data=> <li>{data.fullName}</li>)
            }
        </div>
    );
};

export default AppointmentByDate;