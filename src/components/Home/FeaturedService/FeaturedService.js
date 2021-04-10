import React from 'react';
import FeaturedImage from '../../../images/FeaturedImg.png'
import './FeaturedService.css'

const FeaturedService = () => {
    return (
        <section>
            <div className="row mt-5 pt-5 container mb-5">
                <div className="col-md-6 mb-4 m-md-0 d-flex justify-content-center">
                    <img src={FeaturedImage} alt="" className="img-fluid w-75 rounded"/>

                </div>
                <div className="col-md-6 align-self-center">
                    <h3 style={{fontWeight:'700', color:'#3A4256'}}>Exceptional Dental <br/> Care, on Your Terms</h3>
                    <p className='text-secondary  my-5 txt-style'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque qui quam blanditiis repellendus veniam officia id accusamus aperiam voluptates sint ipsa possimus quia eligendi quidem. Ab et provident molestiae perspiciatis tempore quidem ea accusamus esse obcaecati non maxime nostrum, est soluta, delectus magnam consectetur iste. Aliquam eligendi nulla sapiente.</p>
                    
                    <button className='btn btn-info'>Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;