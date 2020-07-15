import React from 'react'

    const CVSkills = () => {
        const skillsBar = (valueBis, skillName, logo) => {
            return (
                <div className="progress col-11 col-md-3 p-0 mx-2 mb-3 border bg-light" style={{
                    height: "30px"
                }}>
                    <div className="progress-bar progress-bar-striped bg-pink progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                            width: valueBis
                        }}>
                        <h5 className="m-0">{skillName}{logo ? (<i className={logo}></i>) : ''}</h5>
                    </div>
                </div>
            )
        }
        return (
            <div className="row d-flex justify-content-center">
                {skillsBar("85%", "HTML ", "fab fa-html5")}
                {skillsBar("85%", "CSS ", "fab fa-css3-alt")}
                {skillsBar("65%", "Javascript ", "fab fa-js-square")}
                {skillsBar("85%", "Bootstrap ", "fab fa-bootstrap")}
                {skillsBar("80%", "React.js ", "fab fa-react")}
                {skillsBar("45%", "PHP ", "fab fa-php")}
                {skillsBar("85%", "Wordpress ", "fab fa-wordpress")}
                {skillsBar("80%", "MongoDb ", "fas fa-database")}
                {skillsBar("70%", "MySql ", "fas fa-table")}
                {skillsBar("85%", "Express.js ", "fas fa-server")}
                {skillsBar("85%", "Node.", "fab fa-node-js")}
                {skillsBar("65%", "Photoshop ", "fab fa-adobe")}
                {skillsBar("40%", "GraphQL ", "fas fa-project-diagram")}
                {skillsBar("70%", "Rest API ", "fas fa-project-diagram")}
                {skillsBar("70%", "Agilité SCRUM ", "far fa-comments")}
            </div>
        );
    };

export default CVSkills