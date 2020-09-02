import React from 'react'
import { Link } from 'react-router-dom'

const ContactMenu = () => {

    return (
        <nav id="top" className="container navbar navbar-expand-lg navbar-white bg-white my-md-4" >
            <Link className="navbar-brand col-2 px-0" to={"/"}>
                <img src="./img/Groupe_1.png" width="50px" alt="Logo" loading="lazy" />
            </Link>
            <ul
                className="navbar-nav ml-auto"
                style={{ overflowY: "hidden" }}>
                <li
                    className="nav-item my-1"
                >
                    <Link
                        className="btn btn-bj-outline-custom rounded-pill" /* style={isActive(history, "/")} */ to="/">
                        <i className="fas fa-backward "></i>   Previous page
                        </Link>
                </li>
            </ul>
        </nav>
    )
}
export default ContactMenu