import React from 'react';
import chair from '../../../images/chair1.png'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem magni sit iste, nesciunt est ratione.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className='img-fluid'/>
            </div>
        </main>
    );
};

export default HeaderMain;