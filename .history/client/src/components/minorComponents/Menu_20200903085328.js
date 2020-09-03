import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setLang } from '../../actions'



const Menu = () => {
    const dispatch = useDispatch()
    const language = useSelector(state => state.language);

    const selectedLang = e => {
        dispatch(setLang(e.target.name))
        sessionStorage.setItem('lang',e.target.name)
    }

    return (
        <nav id="top" className="container navbar navbar-expand-lg navbar-white bg-white my-md-4" >
            <Link className="navbar-brand col-2 px-0" to={"/"}>
                <img src="./img/Groupe_1.png" width="50px" alt="Logo" loading="lazy" />
            </Link>
            <ul className="navbar-nav ml-auto">
                
                <li className="nav-item ml-auto mr-md-2 my-1" >
                    <Link className="btn btn-bj-outline-custom rounded-pill"  /* style={isActive(history, "/")} */ to="/contact">
                        Contact  <i className="far fa-hand-spock"></i>
                    </Link>
                </li>
                <li className="nav-item my-1" >
                    <Link className="btn btn-bj-outline-custom rounded-pill"  /* style={isActive(history, "/")} */ to="/CV">
                        Espace recruteurs  <i className="far fa-file-alt"></i>
                    </Link>
                </li>
                <li className="nav-item d-flex align-items-center ml-auto ml-md-2 my-1" >
                    {language === "fr" && (
                        <button
                            className="btn rounded-circle"
                            name="en"
                            style={{
                                height: "30px",
                                width: "30px",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundImage: `url("https://thomas-gil.herokuapp.com/img/uk.png")`
                            }}
                            onClick={selectedLang}>
                        </button>
                    )}
                    

                </li>
            </ul>
        </nav>
    );
};



export default withRouter(Menu)
