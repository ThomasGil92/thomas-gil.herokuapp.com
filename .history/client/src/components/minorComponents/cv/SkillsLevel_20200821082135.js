import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import CVSkills from './CVSkills'
import HardCv from './HardCv'


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
                {/* <h2>Compétences à jour</h2>
                <CVSkills /> */}
                <HardCv/>
            </div>
            <div className="col-12 col-md-9 text-center mx-auto my-5">
                <div className="col-11 col-md-6 mx-auto ">
                    <h2 className="mb-4 mb-md-3">Démarrer un projet ensemble?</h2>
                    <p>Si mon profil correspond à vos besoins, n'hésitez pas à me contacter pour un entretien en physique, dans vos locaux ou en visio.</p>
                    <p>Disponible pour toutes sortes de projets web, je travaille en régie ou bien en présentiel (selon conditions).</p>
                    <p>J'accepte les missions en freelance ainsi que les CDI/CDD selon le projet.</p>
                    
                    <Link className="btn btn-bj-outline-custom rounded-pill"  /* style={isActive(history, "/")} */ to="/contact">
                        Contact  <i className="far fa-hand-spock animate__animated animate__wobble"></i>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}
export default SkillsLevel