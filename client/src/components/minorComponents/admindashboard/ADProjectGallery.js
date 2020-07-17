import React, { Fragment } from "react"
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
const ADHeader = () => {
    const sites = useSelector(state => state.sites);

    return (

        <Fragment>
            <div className="col-md-10 bg-light text-center text-dark">
                <h1 className="text-dark">Gallerie des projets</h1>
                {sites.length && sites.map((site, i) => {
                    return (
                        <div className="card p-md-0 col-11 mx-auto" key={i}>
                            <div className="card-header">
                                <h3>{site.title}</h3>
                            </div>
                            <div
                                className="mx-auto my-3"
                                style={{
                                    backgroundImage: `url(${site.imgCollection[0]})`,
                                    height: "300px",
                                    width: "500px",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat"
                                }}
                            />
                            <div className="card-body">
                                <Link className="btn btn-danger" to={`/admin-dashboard/edit/site/${site._id}`}>Modifier les information de ce site</Link>
                            </div>
                        </div>
                    )
                })}
            </div>

        </Fragment>
    )
}

export default ADHeader