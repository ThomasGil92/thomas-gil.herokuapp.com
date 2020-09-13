import React, { Fragment } from "react"
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {deleteSite,getSites} from '../../../actions'
const ADProjectGallery = () => {
    const sites = useSelector(state => state.sites);
    const user = useSelector(state => state.user);
    const dispatch=useDispatch();
const handleDelete=(siteId)=>e=>{
    e.preventDefault();
    deleteSite(siteId,user.user._id,user.token)
    .then(()=>{
        dispatch(getSites())
    })
}
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
                                {/* <Link className="btn btn-danger" to={`/admin-dashboard/edit/site/${site._id}`}>Modifier les information de ce site</Link> */}
                                <button className="btn btn-danger" type="button" onClick={handleDelete(site._id)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </Fragment>
    )
}

export default ADProjectGallery