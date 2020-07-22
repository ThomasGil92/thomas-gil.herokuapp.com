import React from 'react'


const Skills = () => {
    return (
        <div className="card col-10 mx-auto shadow position-absolute skills-card">
            <div className="row text-center">
                <div className="col-10 col-md-4 px-0 px-md-2 mx-auto py-3 border-md-right">
                    <img width="100px" src="./img/48.png" alt="logo front-end" />
                    <h4 className="font-weight-bolder">Développeur Front-End</h4>
                    <p className="pt-4 px-md-3 px-0">
                        Je développe des composants web simple et dynamique pour rendre vos sites web attractif tout en respectant les valeurs de votre projet.
                            </p>
                    <h4 className="color-custom mt-5">Langages maitrisés:</h4>
                    <p className="lead">Html 5, Css 3, Javascript (React)</p>
                    <h4 className="color-custom mt-5">Outils design:</h4>
                    <p className="lead">Photoshop, Bootstrap</p>
                    <h4 className="color-custom mt-5">Design:</h4>
                    <ul className="list-group justify-content-center">
                        <li className="list-group-item  border-0 py-1 lead">UX</li>
                        <li className="list-group-item  border-0 py-1 lead">Mobile</li>
                        <li className="list-group-item  border-0 py-1 lead">Tablette</li>
                        <li className="list-group-item  border-0 py-1 lead">Desktop</li>
                    </ul>
                </div>
                <div className="col-10 col-md-4 px-0 px-md-2 mx-auto py-3 border-md-right">
                    <img width="100px" src="./img/47.png" alt="logo backend" />
                    <h4 className="font-weight-bolder">Développeur Back-End</h4>
                    <p className="pt-4 px-md-3 px-0 ">
                        Grace au backend, je peut développer des applications bien plus riches en créant une API. Ce qui me permet de stocker et recevoir des données en temps réel.
                            </p>
                    <h4 className="color-custom mt-5">Langages utilisés:</h4>
                    <p className="lead">Node.js, Express.js</p>
                    <h4 className="color-custom mt-5">Outils de développement:</h4>
                    <p className="lead">MongoDb, Postman, Github, Heroku</p>
                    <h4 className="color-custom mt-5">Composants:</h4>
                    <ul className="list-group justify-content-center">
                        <li className="list-group-item border-0 py-1 lead">API</li>
                        <li className="list-group-item border-0 py-1 lead">Gestion de bases de données</li>
                        <li className="list-group-item border-0 py-1 lead">Interfaces administrateurs</li>
                        <li className="list-group-item border-0 py-1 lead">Pages web dynamiques</li>
                        <li className="list-group-item border-0 py-1 lead">Intégration de webservices</li>
                        <li className="list-group-item border-0 py-1 lead">SPA</li>
                    </ul>
                </div>
                <div className="col-10 col-md-4 px-0 px-md-2 mx-auto py-3 pt-4">
                    <i className="fab fa-wordpress-simple fa-5x mt-2 mb-3" style={{ color: "rgb(100,100,100)" }}></i>
                    <h4 className="font-weight-bolder">Développeur Wordpress</h4>
                    <p className="pt-4 px-md-3 px-0 ">
                        Wordpress est de loin la solution la plus utilisé sur le web ainsi que le plus simple à prendre en main pour les plus novices d'entre vous.
                            </p>
                    <h4 className="color-custom mt-5">Extensions utilisées:</h4>
                    <p className="lead">ContactForm7, Yoast SEO, Elementor, Essential Addons, Visual Builder, Google Tag Manager, Woocommerce</p>
                    <h4 className="color-custom mt-5 pt-md-5">Sites réalisables avec Wordpress:</h4>
                    <ul className="list-group justify-content-center">
                        <li className="list-group-item   border-0 py-1 lead">Site vitrine</li>
                        <li className="list-group-item   border-0 py-1 lead">Blog</li>
                        <li className="list-group-item   border-0 py-1 lead">E-commerce</li>
                        <li className="list-group-item   border-0 py-1 lead">Portfolio</li>
                        <li className="list-group-item   border-0 py-1 lead">Landing Page</li>
                        <li className="list-group-item   border-0 py-1 lead">SPA</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Skills