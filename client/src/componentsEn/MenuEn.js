import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setLang } from '../actions'


const MenuEn = () => {
    const dispatch = useDispatch()
    const language = useSelector(state => state.language);

    const selectedLang = e => {
        dispatch(setLang(e.target.name))
        sessionStorage.setItem('lang', e.target.name)
    }

    return (
        <nav id="top" className="navbar navbar-expand-lg navbar-white bg-white mx-auto my-md-4" style={{ width: "80%" }} >
            <Link className="navbar-brand col-2 px-0" to={"/"}>
                <img src="./img/Groupe_1.png" alt="Logo" id="logo" />
            </Link>
            <ul className="navbar-nav ml-auto">

                <li className="nav-item ml-auto mr-md-2 my-1" >
                    <Link className="btn btn-bj-outline-custom rounded-pill"  /* style={isActive(history, "/")} */ to="/contact">
                        Contact  <i className="far fa-hand-spock"></i>
                    </Link>
                </li>
                <li className="nav-item my-1" >
                    <Link className="btn btn-bj-outline-custom rounded-pill"  /* style={isActive(history, "/")} */ to="/CV">
                        Recruiters area  <i className="far fa-file-alt"></i>
                    </Link>
                </li>
                <li className="nav-item d-flex align-items-center ml-auto ml-md-2 my-1" >
                    {language === "en" && (
                        <button
                            className="btn rounded-pill"
                            id="frFlag"
                            name="fr"
                            style={{
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundImage: `url("https://thomas-gil.herokuapp.com/img/fr.png")`
                            }}
                            onClick={selectedLang}>
                        </button>
                    )}
                </li>
            </ul>
        </nav>
    );
};



export default withRouter(MenuEn)
