import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import winson from '../../../images/Ellipse 1.png'
import loopez from '../../../images/Ellipse 2.png'
import theron from '../../../images/Ellipse 3.png'
import './Testimonial.css'
import ClientDetails from './ClientDetails';

const clientComment = [
    {
        name:'Winson Herry',
        state:'California',
        img: winson
    },
    {
        name:'Jennyfer Loopez',
        state:'California',
        img: loopez
    },
    {
        name:'Charlize Theron',
        state:'California',
        img: theron
    }
]

const Testimonial = () => { 
    return (
        <section className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xlg-6">
                    <h5 style={{color:'#1CC7C1', fontWeight:'700'}} >TESTIMONIAL</h5>
                    <h3 style={{color:'#3A4256', fontWeight:'700', marginTop:'20px'}}>What's Our Patients <br/> Says</h3>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xlg-6">
                    <h1> <FontAwesomeIcon className="awesome-icon text-end" icon={faQuoteLeft}></FontAwesomeIcon></h1>
                </div>
            </div>

            <article className=''>
                <div className="client-grid">
                    {
                        clientComment.map( comment => <ClientDetails comment={comment}></ClientDetails>)
                    }
                </div>
            </article>

        </section>
    );
};

export default Testimonial;