import React, { Fragment } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {setLang} from "../../actions"


const HomeHeader = () => {
    
    return (
        <Fragment>
            
            <div id="homeHeader" className="text-center py-3 text-dark">
                <h1 className="font-weight-bold mb-2 mt-2">Développeur web Fullstack</h1>
                <p className="lead">React / Node / Wordpress</p>
            </div>
            <div className="col-6 col-md-2 mx-auto mt-5 ">
                <img className="rounded-circle " alt="avatar" width="100%" src="./img/myAvatar.png" />
            </div>
        </Fragment >
    )
}

export default HomeHeader
