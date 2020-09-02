import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import HardCvEn from './HardCvEn'


const SkillsLevel = () => {

    return (
        <Fragment>
            <div className="text-center py-3 text-dark-2">
                <h1 className="font-weight-bold mb-2 mt-2">Développeur web Fullstack</h1>
                <p className="lead">React / Node / Wordpress</p>
            </div>
            {/* <div className="col-12 col-md-7 my-5 px-5 px-md-2 mx-auto d-flex justify-content-between">
                <div className="col-6 col-md-4 align-items-center d-flex"><i className="fas text-danger fa-3x fa-long-arrow-alt-right repeat2"></i></div>

                <a className="col-6 col-md-4 btn btn-outline-danger zoom-on-hover my-1" href="https://thomas-gil.herokuapp.com/img/CV_THOMAS_GIL_2020.pdf" download>
                    Télécharger le CV   <i className="fas fa-cloud-download-alt"></i>
                </a>
                <div className="col-3 col-md-4 text-right d-none d-md-block"><i className="fas text-danger fa-3x fa-long-arrow-alt-left repeat1"></i></div>
            </div> */}
            <div className="card col-12 col-md-10 text-center mx-auto my-5">
                <HardCvEn />
            </div>
            <div className="col-12 col-md-9 text-center mx-auto my-5">
                <div className="col-11 col-md-6 mx-auto ">
                    <h2 className="mb-4 mb-md-3">Begin a project together?</h2>
                    <p>If my profile corresponds to your needs, do not hesitate to contact me for an interview in physics, in your premises or in video.</p>
                    <p>Available for all kinds of web projects, I work in remote or face-to-face (depending on conditions).</p>
                    <p>I accept freelance assignments as well as CDI / CDD depending on the project.</p>

                    <Link className="btn btn-bj-outline-custom rounded-pill"  /* style={isActive(history, "/")} */ to="/contact">
                        Contact  <i className="far fa-hand-spock animate__animated animate__wobble"></i>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}
export default SkillsLevel