import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Footer = () => {
    const language = useSelector(state => state.language);
    const footerLink = (fa, link) => {
        return (
            <a
            rel="target_blank"
                className="btn btn-outline-light rounded-circle m-2 p-3"
                href={link}><i className={fa + " d-flex justify-content-center align-items-center"}
                    style={{ width: "25px", height: "25px" }}></i></a>

        )
    }


    return (
        <div
        id="bottom"
            className="col-12 text-center pt-5 pb-5 d-flex justify-content-center"
            style={{
                background: " linear-gradient(180deg, rgba(33,11,132,1) 0%, rgba(17,46,232,1) 100%)"
            }}>
            <div className="row justify-content-center">
                <div className="col-12">
                    {footerLink("fab fa-linkedin-in ", "https://www.linkedin.com/in/thomas-gil-react-developer/")}
                    {footerLink("fas fa-user-tie ", "https://www.malt.fr/profile/thomasgil")}
                    {footerLink("fab fa-github ", "https://github.com/ThomasGil92?tab=repositories")}
                    <Link className="btn btn-outline-light rounded-circle m-2 p-3 " to={"/contact"}>
                        <i className="far fa-envelope d-flex justify-content-center align-items-center" style={{ width: "25px", height: "25px" }}></i>
                    </Link>
                </div>
                <div className="col-12">
                    <a className="btn btn-outline-light mt-2" href={"/mentions-legales#top"}>{language === "fr" && "Mentions légales"}{language === "en" && "Legal notice"}</a>
                </div>
            </div>

        </div>
    )
}

export default Footer