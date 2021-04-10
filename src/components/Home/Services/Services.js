import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const servicesData = [
    {
         img: fluoride,
         name: 'Fluoride Treatment'
    },

    {
        img: cavity,
        name: 'Cavity Filling'
    },

    {
        img: whitening,
        name: 'Teeth Whitening'
    }
]

const Services = () => {

    return (
        <section>
            <div className="text-center mt-5">
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h3 style={{color:'#3A4256', fontWeight:'700'}}>Services We Provide</h3>
            </div>

            <article className="d-flex justify-content-center mt-5 pt-5">
                <div className='row w-75'>
                    {
                        servicesData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </article>
        </section>
    );
};

export default Services;