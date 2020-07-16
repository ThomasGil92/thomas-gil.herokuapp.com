import React, { Fragment } from "react"
import { useSelector } from 'react-redux'
const ADHeader = () => {
    const user = useSelector(state => state.user);

    return (
        <Fragment>
            <div className="col-12 mt-md-4 text-center">
                <h1 className="text-dark"> Bonjour {user.user && user.user.name}</h1>
                <p className="lead">Interface d'administration des projets de Thomas Gil</p>
            </div>

        </Fragment>
    )
}

export default ADHeader