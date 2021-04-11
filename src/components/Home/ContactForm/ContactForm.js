import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <section className='contact-container '>
            <div className="form-container">
                
                <div className="row">
                    <div className="col"> </div>
                    <div className="col-6">
                        <div className="text-center mb-5 mt-5">
                            <h5 className="text-info">CONTACT US</h5>
                            <h3 style={{ color: 'white',fontWeight: '700'}}>Always Connect With Us</h3>
                        </div>
                        <form className="my-5">
                            <input type="text" className="form-control mt-2" placeholder="Email Address" required/>
                            <input type="text" className="form-control mt-2" placeholder="Subject" required/>
                            <textarea name="" id="" cols="90" rows="6" className="form-control mt-2" placeholder="Your Message" required></textarea>
                            <button className="btn btn-info d-block mx-auto mt-3 px-4">Submit</button>
                        </form>
                    </div>
                    <div className="col"> </div>
                </div>

            </div>
        </section>
    );
};

export default ContactForm;