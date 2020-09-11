import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Menu from './minorComponents/contact/ContactMenu';
import SkillsLevel from './minorComponents/cv/SkillsLevel';
import Footer from './minorComponents/Footer'
import Cookie from './minorComponents/Cookie'

const CV = () => {
    document.title = "Espace recruteur";
    return (
        <Fragment>
            <Menu />

            <SkillsLevel />

            <Footer />
            <div className="fixed-bottom col-12 p-0 bg-dark">
                <Cookie />
            </div>
        </Fragment >
    )
}
export default CV
