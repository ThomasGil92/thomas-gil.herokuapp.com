import React, { Fragment } from 'react'

const HardCv = () => {
    return (
        <div style={{ color: "#515050" }}>
            <header>
                <div className="row">
                    <div className="col-12">
                        <h1 className="mb-0">Thomas Gil-Escriche</h1>
                        <span>Fullstack web developer</span>
                    </div>
                </div>
            </header>
            <div className="row mt-4">
                <div className="col-md-9 col-12">
                    <div className="row px-4 text-justify">
                        <div className="col-12 mx-auto mx-md-0 col-md-6"><p><i className="fas fa-at"></i> Tgil849@gmail.com</p></div>
                        <div className="col-12 mx-auto mx-md-0 col-md-6"><p><i className="fab fa-github-square"></i> ThomasGil92</p></div>
                        <div className="col-12 mx-auto mx-md-0 col-md-6"><p><i className="fas fa-map-marker-alt"></i> Rueil-Malmaison (92500)</p></div>
                        <div className="col-12 mx-auto mx-md-0 col-md-6">Âge: 29 ans</div>
                        <div className="col-12 mx-auto mx-md-0 col-md-6"><p><i className="fas fa-phone-volume"></i> 07.62.50.70.97</p></div>
                        <div className="col-12 mx-auto mx-md-0 col-md-6"><p><i className="fab fa-linkedin"></i> thomas-g-81543b162</p></div>
                    </div>
                    <div className="row text-left mt-5">
                        <div className="col-12">
                            <h2 className="text-center">Experiences</h2>
                            <div className="text-justify bg-light py-2 px-4 mb-1">
                                <h4>July-August 2020</h4>
                                <p>Development of a project management application which allows to follow according to the selected project, what tasks remain to be performed, how much time remains before delivery of the project, ...</p>
                                <br />
                                <p><u>Technologies used</u>: React, Node, Redux, MongoDB, Bootstrap/React-bootstrap.</p>
                                <h6>Link:</h6>
                                <p><a href="https://fokjlenot.herokuapp.com" rel="target_blank">Fokjlenot.herokuapp.com</a></p>
                            </div>
                            <div className="text-justify bg-light py-2 px-4 mb-1">
                                <h4>June-July 2020</h4>
                                <p>Development of my online portfolio. Creation of an administration page with token identification to record the sites I have created as a post, dynamically displayed on the home page.</p>
                                <br />
                                <p><u>Technologies used</u>: React, Node, Redux, Express.Js, MongoDB.</p>
                                <h6>Link:</h6>
                                <p><a href="https://thomas-gil.fr" rel="target_blank">Thomas-gil.fr</a></p>
                            </div>
                            <div className="text-justify bg-light py-2 px-4 mb-1">
                                <h4>April-May 2020</h4>
                                <p>Development of a Wordpress site for a firm of chiropodists. SEO, web design, theme customization, compliance with the guidelines of the national order of chiropodists in terms of websites.</p>
                                <br />
                                <p><u>Technologies used</u>: Wordpress, Photoshop, utilisation de "Page Builder", YoastSEO, ...</p>
                                <h6>Link:</h6>
                                <p><a href="https://podologues-des-bruyeres.fr/" rel="target_blank">Podologues-des-bruyères.fr</a></p>
                            </div>
                            <div className="text-justify bg-light py-2 px-4 mb-1">
                                <h4>January-February 2020</h4>
                                <p>Development of 2 web projects thanks to the MERN stack. The first is a social network of
developers and the second is an e-commerce of books.</p>
                                <p><u>Technologies used</u>: React, MongoDB, Express.js, Node.</p>
                                <br /><span>(Training projects on <a href="https://www.udemy.com/" rel="target_blank">Udemy.com</a>)</span>
                            </div>
                            <div className="text-justify bg-light py-2 px-4 mb-1">
                                <h4>September-October 2019</h4>
                                <p>Development of a blog for a writer based on the CRUD (Create, Read, Update, Delete) model.
                                Introduction to PHP and MySql.
</p>
                                <p><u>Technologies used</u>: PHP, HTML, CSS.</p>
                                <br /><span>(Training project)</span>
                            </div>
                            <div className="text-justify bg-light py-2 px-4 mb-1">
                                <h4>May-July 2019</h4>
                                <p>Development of a Single Page Application simulating the online reservation of a self-service bicycle in the city of Nantes. Using the API jcdeceaux to retrieve information in real time.Introduction to JavaScript and OOP.

</p>
                                <p><u>Technologies used</u>: Javascript, HTML, CSS.</p>
                                <br /><span>(Training project)</span>
                            </div>
                            <div className="text-justify bg-light py-2 px-4 mb-1">
                                <h4>March-April 2019</h4>
                                <p>Development of a fictitious site for the Strasbourg tourist office with integration of pure Css animation, imposed modules (last published articles), imposed pages and content (a page with a table of activities to be offered in the city, latest news, ...).
</p>
                                <p><u>Technologies used</u>: Wordpress, YoastSEO</p>
                                <br /><span>(Training project)</span>
                            </div>
                            <div className="text-justify bg-light py-2 px-4 mb-1">
                                <h4>February 2019</h4>
                                <p>Integration of a website mockup with only Html, css and bootstrap (introduction to basic web languages).
</p>
                                <p><u>Technologies utilisées</u>: HTML, CSS, Bootstrap</p>
                                <br /><span>(Training project)</span>
                            </div>
                            <div className="text-justify bg-light py-2 px-4 mb-1">
                                <h4>Septembre 2008 - Novembre 2018</h4>
                                <p>2008 - 2010 : Cuisinier en alternance au restaurant “La place” à
                                Rueil-Malmaison (Préparation des entrées, plats et desserts, mise en place et entretien de la cuisine)

                                2010 - 2018 : Barman et chef de rang au restaurant “Lavenue” à
                                Rueil-Malmaison (Préparation et entretien des salles, gestion des boissons et de la mise en place, etc.).
</p>
                            </div>

                        </div>
                        <div className="col-12">
                            <h2 className="text-center">Formations</h2>
                            <div className="text-justify bg-light py-2 px-4 mb-1">
                                <h4>Décembre 2019 - Février 2020</h4>
                                <h5>Formation de dévelopeur web FullStack React.js/Node.js sur "Udemy.</h5>
                                <ul className="list-group bg-light">Compétences aquises:
                <li className="list-group-item border-0 py-1 bg-light">-Créer un site fullstack React multi-pages avec Node.js, Express.js et MongoDB.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Gérer les autorisations pour fournir une page d’administration sécurisée pour les administrateur et une page de profile ou autres pour les clients.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Gérer le state avec les hooks.</li>
                                </ul>
                            </div>
                            <div className="text-justify bg-light py-2 px-4 mb-1">
                                <h4>Septembre 2018 - Novembre 2019</h4>
                                <h5>Formation de dévelopeur web au sein de l’organisme de formation "Openclassrooms". </h5>
                                <ul className="list-group bg-light">Compétences aquises:
                <li className="list-group-item border-0 py-1 bg-light">-Découper, assembler et intégrer tous les éléments d’une maquette graphique en HTML5 et CSS.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Animer les pages web avec CSS3.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Appliquer les standards du web et les normes en vigueur.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Construire un site web responsive.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Améliorer le référencement naturel en utilisant les balises selon leur sémantique.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Rendre une page dynamique en fonction des actions de l’utilisateur en Javascript.</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Se connecter à un service web pour exploiter des données tierces (API).</li>
                                    <li className="list-group-item border-0 py-1 bg-light">-Créer, gérer et afficher le contenu d’une base de données.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-12 h-100">
                    <div className="col-md-12 col-6 mt-2 mt-md-0 mx-auto">
                        <img className="rounded-circle" src="img/photo-thomas-gil.png" width="100%" />
                    </div>
                    <div className="text-left mt-md-5 mt-2 mb-5">
                        <h5>Langues</h5>
                        <ul className="list-group">
                            <li className="list-group-item bg-light">Français: langue maternelle</li>
                            <li className="list-group-item bg-light">Anglais: bon niveau, manque de pratique</li>
                        </ul>
                    </div>
                    <div className="text-left mb-5">
                        <h5>Qualités</h5>
                        <ul className="list-group">
                            <li className="list-group-item bg-light">Soif d'apprendre</li>
                            <li className="list-group-item bg-light">Motivé</li>
                            <li className="list-group-item bg-light">Ponctuel</li>
                            <li className="list-group-item bg-light">Autonome</li>
                        </ul>
                    </div>
                    <div className="text-left mb-5">
                        <h5>Centres d'interêts</h5>
                        <ul className="list-group">
                            <li className="list-group-item bg-light">Voyage</li>
                            <li className="list-group-item bg-light">Cuisine</li>
                            <li className="list-group-item bg-light">Décoration</li>
                            <li className="list-group-item bg-light">Sport</li>
                            <li className="list-group-item bg-light">Informatique</li>
                        </ul>
                    </div>
                    <div className="text-left comp">
                        <h5>Compétences</h5>
                        <div className="bg-light px-3 pb-3 rounded">
                            <span>HTML</span>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                            </div>
                            <span>CSS</span>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                            </div>
                            <span>Javascript</span>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}></div>
                            </div>
                            <span>React</span>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                            </div>
                            <span>Node.js</span>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                            </div>
                            <span>Redux</span>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                            </div>
                            <span>Bootstrap</span>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                            </div>
                            <span>Github</span>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}></div>
                            </div>
                            <span>MongoDB</span>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                            </div>
                            <span>Wordpress</span>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}></div>
                            </div>
                            <span>Photoshop</span>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HardCv