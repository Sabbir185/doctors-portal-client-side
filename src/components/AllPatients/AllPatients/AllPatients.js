import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../DashBoard/AppointmentDataTable/AppointmentDataTable';
import SIdebar from '../../DashBoard/SIdebar/SIdebar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])


    return (
        <div>
            <div className="container-fluid row " >
                <SIdebar></SIdebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">All Patients</h5>
                    <AppointmentDataTable appointments={appointments} />
                </div>
            </div>
        </div>
    );
};

export default AllPatients;