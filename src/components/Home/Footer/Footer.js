import React from 'react';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab , faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="container mt-5 py-5 footerBg">
            <section>
                <div className="row footer-style">
                    <div className="col mt-4 p-2">
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>CheakUp</p>
                    </div>
                    <div className="col">
                        <h5 style={{color:'#1CC7C1'}}>Services</h5>

                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>CheakUp</p>
                        <p>CheakUp</p>
                    </div>
                    <div className="col">
                        <h5 style={{color:'#1CC7C1'}}>Services</h5>
                        
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>CheakUp</p>
                    </div>
                    <div className="col">
                        <h5 style={{color:'#1CC7C1'}}>Our Address</h5>
                        
                        <p>KDA Avenue, Shibbari Mor, Khulna, Bangladesh</p>
                        <h1 className="mb-4"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon></h1>

                        <h6 className="mb-3">Call Now</h6>
                        <span className="bg-info py-2 px-4 rounded">+1 200300400</span>
                    </div>
                </div>
            </section>

            <small className="d-block text-center mt-5">Copyright @{new Date().getFullYear()} All Rights Reserved</small>
        </footer>
    );
};

export default Footer;