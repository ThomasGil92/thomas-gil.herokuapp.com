import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {setLang} from '../../../actions'

const ContactMenu = () => {
    const dispatch=useDispatch()
    const language = useSelector(state => state.language);

    const selectedLang = e => {
        dispatch(setLang(e.target.name))
        sessionStorage.setItem('lang',e.target.name)
    }

    return (
        <nav id="top" className="navbar navbar-expand-lg navbar-white mx-auto bg-white my-md-4" style={{width:"80%"}}>
            <Link className="navbar-brand col-2 px-0" to={"/"}>
                <img src="./img/Groupe_1.png"  alt="Logo" id="logo" />
            </Link>
            <ul
                className="navbar-nav ml-auto"
                style={{ overflowY: "hidden" }}>
                <li
                    className="nav-item my-1"
                >
                    <Link
                        className="btn btn-bj-outline-custom rounded-pill mr-md-2" /* style={isActive(history, "/")} */ to="/">
                        <i className="fas fa-backward "></i>   Page précédente
                        </Link>
                </li>
                <li className="nav-item d-flex align-items-center ml-auto ml-md-2 my-1" >
                    {language === "fr" && (
                        <button
                            className="btn rounded-circle"
                            id="enFlag"
                            name="en"
                            style={{
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
    )
}
export default ContactMenu