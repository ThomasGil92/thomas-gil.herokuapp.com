import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'



const Menu = () => {
    const dispatch = useDispatch()
    const language = useSelector(state => state.language);

    const selectedLang = e => {
        console.log(e.target.value)
        dispatch(setLang(e.target.value))
    }

    return (
        <nav id="top" className="container navbar navbar-expand-lg navbar-white bg-white my-md-4" >
            <Link className="navbar-brand col-2 px-0" to={"/"}>
                <img src="./img/Groupe_1.png" width="50px" alt="Logo" loading="lazy" />
            </Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item ml-auto mr-md-2 my-1" >
                    {language==="fr" && (
                        <button
                        className="btn btn-bj-outline-custom rounded-pill" style={{backgroundImage:`url(http://http://localhost:3000/img/uk.png)`}} onClick={selectedLang}>

                    </button>
                    )}
                    
                </li>
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
            </ul>
        </nav>
    );
};



export default withRouter(Menu)
