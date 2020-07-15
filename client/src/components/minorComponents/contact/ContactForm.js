import React, { Fragment } from 'react'
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'ContactUs', e.target, 'user_4OCMAoXXWlSfnD7fgLVEP')
            .then((result) => {
                console.log(result.text);
                window.location.reload(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Fragment>
            <div id="contact-background" className="col-12 d-flex pb-5 align-items-center text-dark text-left">
                <div className="flex-column col-10 col-md-6 mx-auto my-auto">
                    <form
                        className="contact-form d-flex flex-column"
                        onSubmit={sendEmail}
                    >
                        <input
                            type="hidden"
                            name="contact_number" />
                        <label className="lead">Votre nom:</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            minLength="3"
                            maxLength="40"
                        />
                        <label className="lead mt-4">Votre adresse email:</label>
                        <input
                            type="email"
                            name="user_email"
                            required

                            maxLength="40" />
                        <label className="lead mt-4">Votre message:</label>
                        <textarea
                            name="message"
                            minLength="10"
                            maxLength="2000"
                            rows="10"
                            required />
                        <button
                            className="mt-5 btn btn-bj-outline-custom-contact"
                            type="submit"
                        ><h4 className="m-0">Envoyer le message</h4>
                        </button>

                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default ContactForm