import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Menu from './minorComponents/contact/ContactMenu';
import SigninForm from './minorComponents/signin/SigninForm';
import Footer from './minorComponents/Footer'
import Cookie from './minorComponents/Cookie'

const Signin = () => {
    return (
        <Fragment>
            <Menu />
            <SigninForm />
            <Footer />
            <div className="fixed-bottom col-12 p-0 bg-dark">
                <Cookie />
            </div>
        </Fragment >
    )
}
export default Signin
