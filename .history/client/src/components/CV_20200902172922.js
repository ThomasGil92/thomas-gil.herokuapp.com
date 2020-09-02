import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Menu from './minorComponents/contact/ContactMenu';
import MenuEn from '../componentsEn/MenuEn';
import SkillsLevel from './minorComponents/cv/SkillsLevel';
import SkillsLevelEn from './minorComponents/cv/SkillsLevelEn.js';
import Footer from './minorComponents/Footer'
import Cookie from './minorComponents/Cookie'
import {useSelector} from 'react-redux'

const CV = () => {
    const language = useSelector(state => state.language);
    document.title = "Espace recruteur";
    return (
        <Fragment>
            
{language==="fr" && (<Menu /><SkillsLevel />)}
{language==="en" && (<MenuEn /><SkillsLevelEn />)}
            

            <Footer />
            <div className="fixed-bottom col-12 p-0 bg-dark">
                <Cookie />
            </div>
        </Fragment >
    )
}
export default CV
