import React, { Fragment } from 'react'
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom'
import { setAlert } from '../../../actions'
import { useDispatch } from 'react-redux'
import Alert from '../layout/alert'

const ContactForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = e => {
        if (e.target.value !== "") {
            e.target.parentNode.classList.add('active-input')
            if (e.target.value.includes('$')) {
                e.target.classList.add('border-danger')
            }
        } else if (e.target.value === "") {
            e.target.parentNode.classList.remove('active-input')
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'ContactUs', e.target, 'user_4OCMAoXXWlSfnD7fgLVEP')
            .then((result) => {
                console.log(e.persist())
                console.log(result.text);
                document.getElementById("contactForm").reset();
                history.push("/")
                dispatch(setAlert("Votre message à bien été envoyé", "info"))

            }, (error) => {
                console.log(error.text);
                dispatch(setAlert("Une erreur est survenue", "danger"))
            })
    };
    return (
        <Fragment>
            <div id="contact-background" className="col-12 d-flex pb-5 align-items-center text-dark text-left">
                <div className="flex-column col-10 col-md-6 mx-auto my-auto">
                    <form
                        id="contactForm"
                        className="contact-form d-flex flex-column"
                        onSubmit={sendEmail}
                    >
                        <div className="inp-name">
                            <label htmlFor="user_name" className="lead">Votre nom</label>
                            <input
                                className="inp-anim"
                                type="text"
                                name="userName"
                                id="user_name"
                                required
                                onChange={handleChange}
                                minLength="3"
                                maxLength="40"
                            />
                        </div>

                        <div className="inp-email">
                            <label htmlFor="user_email" className="lead">Votre adresse email:</label>
                            <input
                                className="inp-anim"
                                type="email"
                                name="userEmail"
                                required
                                onChange={handleChange}
                                id="user_email"
                                maxLength="40" />
                        </div>
                        <div className="inp-message">
                            <label htmlFor="message" className="lead">Votre message:</label>
                            <textarea
                                className="inp-anim"
                                name="message"
                                id="message"
                                onChange={handleChange}
                                minLength="10"
                                maxLength="2000"
                                rows="5"
                                required />
                        </div>

                        <button
                            className="mt-5 btn btn-bj-outline-custom-contact"
                            type="submit"
                        ><h4 className="m-0">Envoyer le message</h4>
                        </button>
                        <Alert />

                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default ContactForm