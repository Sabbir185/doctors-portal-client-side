import React from 'react';
import './Blog.css'
import kabir from '../../../images/Ellipse 1.png'
import kate from '../../../images/Ellipse 2.png'
import leftQuote from '../../../images/left-quote.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'



const Blog = () => {
    const quote = <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
  

    return (
        <section className="container-fluid">
            <div className="text-center mt-5 mb-3">
                <h5 className="text-info">OUR BLOG</h5>
                <h3 style={{ color: '#203047', fontWeight: '700' }}>From Our Blog News</h3>
            </div>

            <article className="row mt-5 d-flex align-items-center justify-content-center">
                <div className="col-md-3 first-news card-style text-white">
                    <small className='d-block'>Rashed Kabir</small>
                    <small>22 Aug 2020</small>
                    <h6 className='my-4'>Check at least a doctor in a <br /> year for your teeth</h6>
                    <p style={{fontSize:"40px"}}><FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon></p>
                </div>
            
                <div className="col-md-3 card-style">
                    <div className="row">
                        <div className="col-4 mb-3">
                            <img src={kabir} alt="" className='w-75'/>
                        </div>
                        <div className="col-8">
                            <h6 style={{ color: '#203047'}}>Dr. Caudi</h6>
                            <small className="text-secondary">23 April 2020</small>
                        </div>
                    </div>
                    <p style={{ color: '#203047'}}>2 times of Brush in a day can <br /> keep you healthy</p>
                    <small className="text-secondary txt-align">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure, eum sunt culpa delectus vero.</small>
                </div>

                <div className="col-md-3 card-style">
                    <div className="row">
                        <div className="col-4 mb-3">
                            <img src={kate} alt="" className='w-75'/>
                        </div>
                        <div className="col-8">
                            <h6 style={{ color: '#203047'}}>Dr. Kate Winslet</h6>
                            <small className="text-secondary">23 April 2020</small>
                        </div>
                    </div>
                    <p style={{ color: '#203047'}}>The teeth cancer taking a <br/> challenge</p>
                    <small className="text-secondary txt-align">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure, eum sunt culpa delectus vero.</small>
                </div>
            </article>
        </section>
    );
};

export default Blog;