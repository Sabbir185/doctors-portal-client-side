import React from 'react';
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import docImg from '../../../images/docImg.png'

const doctorList = [
    {
        name: 'Dr. Caudi Khan',
        phone: '+1 452200300',
        img:'5.jpg'
    },
    {
        name: 'Dr. Kabir Sighn',
        phone: '+1 452200400',
        img:'father.jpg'
    },
    {
        name: 'Dr. Clark Kant',
        phone: '+1 452200500',
        img:'nasim_vay.jpg'
    }
]

const DoctorList = () => {
    return (
        <section className="mt-5 pt-5 container">
            <h5 className='text-center text-info'>Our Doctors</h5>
            <div className="row d-flex justify-content-center my-5">
                {
                    doctorList.map( list => <DoctorInfo info={list}></DoctorInfo>)
                }
            </div>
        </section>
    );
};

export default DoctorList;