import React from 'react';
import BookCard from '../BookCard/BookCard';

const bookingInfo = [
    {
        title:'Teeth Orthodontics',
        bookingTime:'8.00 - 9.00 AM',
        availableSeat:'10 space available'
    },
    {
        title:'Cosmetic Dentistry',
        bookingTime:'10.05 - 11.30 AM',
        availableSeat:'10 space available'
    },
    {
        title:'Teeth Cleaning',
        bookingTime:'5.00 - 6.00 AM',
        availableSeat:'7 space available'
    },
    {
        title:'Cavity Protection',
        bookingTime:'7.00 - 8.00 AM',
        availableSeat:'5 space available'
    },
    {
        title:'Teeth Orthodontics',
        bookingTime:'8.00 - 9.00 AM',
        availableSeat:'8 space available'
    },
    {
        title:'Teeth Orthodontics',
        bookingTime:'8.00 - 9.00 AM',
        availableSeat:'6 space available'
    }
]

const BookAppointment = (props) => {
    const appDate = props.date;
    
    return (
        <section>
            <h2 className='text-center brand-text1'>Available Appointments on {appDate.toDateString()}</h2>

            <div className="container my-5">
                <div className="row justify-content-center">
                    {
                        bookingInfo.map(book => <BookCard appDate={appDate} booking={book}></BookCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;