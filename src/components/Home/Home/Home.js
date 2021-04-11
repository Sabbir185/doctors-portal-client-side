import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import ContactForm from '../ContactForm/ContactForm';
import DoctorList from '../DoctorList/DoctorList';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <DoctorList></DoctorList>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;