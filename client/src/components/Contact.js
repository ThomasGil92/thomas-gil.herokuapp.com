import React, { Fragment } from 'react';
import ContactMenu from './minorComponents/contact/ContactMenu';
import ContactForm from './minorComponents/contact/ContactForm';
import Cookie from './minorComponents/Cookie';
import Footer from './minorComponents/Footer'

const Contact = () => {

    document.title = "Contact développeur web";
    return (
        <div className="container-fluid px-0">
            <ContactMenu />
            <div className="col-12 col-md-6 text-center mx-auto text-dark">
                <h1 className="font-weight-bold my-5">Formulaire de contact</h1>
            </div>
            <ContactForm />
            <div className="fixed-bottom col-12 p-0 bg-dark">
                <Cookie />
            </div>
            <Footer />
        </div>
    )
};
export default Contact