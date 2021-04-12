import React from 'react';

const BookCard = (props) => {
    // console.log(props.appDate, props.booking)
    const {title, bookingTime, availableSeat} = props.booking;


    return (
        <div classNameName="card col-4 d-flex justify-content-center " style={{width: "18rem"}}>
            <div className="card-body text-center mb-5 shadow-sm p-3 mb-5 bg-body rounded pb-4">
                <h5 className="card-title brand-text1">{title}</h5>
                <h6 className="card-subtitle mb-2 brand-text2">{bookingTime}</h6>
                <small className="card-text text-secondary">{availableSeat}</small>
                <button className="btn btn-info text-uppercase mt-3">appointment</button>
            </div>
        </div>
    );
};

export default BookCard;