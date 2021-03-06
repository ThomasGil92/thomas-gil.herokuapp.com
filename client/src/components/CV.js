import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import ContactMenu from './minorComponents/contact/ContactMenu';
import ContactMenuEn from './minorComponents/contact/ContactMenuEn';
import SkillsLevel from './minorComponents/cv/SkillsLevel';
import SkillsLevelEn from './minorComponents/cv/SkillsLevelEn.js';
import Footer from './minorComponents/Footer'
import Cookie from './minorComponents/Cookie'
import {useSelector} from 'react-redux'

const CV = () => {
    const language = useSelector(state => state.language);
    if(language==="fr"){
        document.title = "Espace recruteur";
    }
    if(language==="en"){
        document.title="Recruiters area"
    }
    
    return (
        <Fragment>
            
{language==="fr" && (<Fragment><ContactMenu /><SkillsLevel /></Fragment>)}
{language==="en" && (<Fragment><ContactMenuEn /><SkillsLevelEn /></Fragment>)}
            

            <Footer />
            <div className="fixed-bottom col-12 p-0 bg-dark">
                <Cookie />
            </div>
        </Fragment >
    )
}
export default CV
