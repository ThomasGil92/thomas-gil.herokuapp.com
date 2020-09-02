import React from 'react'


const SkillsEn = () => {
    return (
        <div className="card col-10 mx-auto shadow position-absolute skills-card">
            <div className="row text-center">
                <div className="col-10 col-md-4 px-0 px-md-2 mx-auto py-3 border-md-right">
                    <img width="100px" src="./img/48.png" alt="logo front-end" />
                    <h4 className="font-weight-bolder">Frontend Developer</h4>
                    <p className="pt-4 px-md-3 px-0">
                        I develop simple and dynamic web components to make your websites attractive while respecting the values ​​of your project.
                            </p>
                    <h4 className="color-custom mt-5">Mastered technologies:</h4>
                    <p className="lead">Html 5, Css 3, Javascript (React)</p>
                    <h4 className="color-custom mt-5">Design tools:</h4>
                    <p className="lead">Photoshop, Bootstrap</p>
                    <h4 className="color-custom mt-5">Design:</h4>
                    <ul className="list-group justify-content-center">
                        <li className="list-group-item  border-0 py-1 lead">UX</li>
                        <li className="list-group-item  border-0 py-1 lead">Mobile</li>
                        <li className="list-group-item  border-0 py-1 lead">Tablet</li>
                        <li className="list-group-item  border-0 py-1 lead">Desktop</li>
                    </ul>
                </div>
                <div className="col-10 col-md-4 px-0 px-md-2 mx-auto py-3 border-md-right">
                    <img width="100px" src="./img/47.png" alt="logo backend" />
                    <h4 className="font-weight-bolder">Backend Developer</h4>
                    <p className="pt-4 px-md-3 px-0 ">
                        Thanks to the backend, i can develop much richer applications by creating an API, which allows me to store and receive data in real time.
                            </p>
                    <h4 className="color-custom mt-5">Mastered technologies:</h4>
                    <p className="lead">Node.js, Express.js</p>
                    <h4 className="color-custom mt-5">Develoment tools:</h4>
                    <p className="lead">MongoDb, Postman, Github, Heroku</p>
                    <h4 className="color-custom mt-5">Hard Skills:</h4>
                    <ul className="list-group justify-content-center">
                        <li className="list-group-item border-0 py-1 lead">API</li>
                        <li className="list-group-item border-0 py-1 lead">Database management</li>
                        <li className="list-group-item border-0 py-1 lead">Administrator interfaces</li>
                        <li className="list-group-item border-0 py-1 lead">Dynamic web pages</li>
                        <li className="list-group-item border-0 py-1 lead">Integration of webservices</li>
                        <li className="list-group-item border-0 py-1 lead">SPA</li>
                    </ul>
                </div>
                <div className="col-10 col-md-4 px-0 px-md-2 mx-auto py-3 pt-4">
                    <i className="fab fa-wordpress-simple fa-5x mt-2 mb-3" style={{ color: "rgb(100,100,100)" }}></i>
                    <h4 className="font-weight-bolder">Wordpress Developer</h4>
                    <p className="pt-4 px-md-3 px-0 ">
                    Wordpress is by far the most used solution on the web as well as the easiest to learn for the most novices among you.
                            </p>
                    <h4 className="color-custom mt-5">Extensions used:</h4>
                    <p className="lead">ContactForm7, Yoast SEO, Elementor, Essential Addons, Visual Builder, Google Tag Manager, Woocommerce</p>
                    <h4 className="color-custom mt-5 pt-md-5">Workable sites with Wordpress:</h4>
                    <ul className="list-group justify-content-center">
                        <li className="list-group-item   border-0 py-1 lead">Showcase site</li>
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
export default SkillsEn