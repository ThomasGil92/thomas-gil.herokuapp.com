import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getSite, editSite, getSites, clearToUpdateSite } from '../actions'
import moment from 'moment'
moment.locale();

const EditSiteItemPage = ({ match }) => {
    const history = useHistory()
    const siteToUpdate = useSelector(state => state.siteToUpdate);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [site, setFields] = useState({
        title: siteToUpdate.title,
        description: "",
        url: "",
        skills: [],
        publicationDate: "",
        imgCollection: []
    })

    const {
        title = site.title,
        url= site.url,
        description,
        publicationDate,
        skills
    } = site
    const init = () => {
        dispatch(getSite(match.params._id))
        setFields({
            title: title,
            description: description,
            url: url,
            skills: skills,
            publicationDate: publicationDate,
        })
        console.log(site)
    }

    useEffect(() => {
        init()
    }, [])

    const handleChange = e => {

        const value = e.target.value;
        setFields({ ...site, [e.target.name]: value });
        console.log(site)
    }
    const handleChangeFiles = e => {
        setFields({ ...site, imgCollection: e.target.files.key });
        console.log(site)
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(site)
        editSite(user.user._id, user.token, site, siteToUpdate._id)
            .then(function (response) {
                console.log(response)
                document.getElementById("multer-file").value = "";

                dispatch(getSites());
                dispatch(clearToUpdateSite());
                history.push("/admin-dashboard")
            })
            .catch(function (error) { console.log(error); });
    }

    return (
        <div className="container-fluid px-0 text-center mx-auto justify-content-center">
            {site && siteToUpdate && (
                <div>
                    <h1>Modifiez les informations du site {siteToUpdate.title}</h1>
                    <div className="col-6 mx-auto">
                        {siteToUpdate.imgCollection && (
                            <img width="300px" alt={siteToUpdate.title} src={siteToUpdate.imgCollection[0]} />
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="title" required defaultValue={site.title} onChange={handleChange} className="form-control" placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="url" required defaultValue={siteToUpdate.url} onChange={handleChange} className="form-control" placeholder="url" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="skills" required defaultValue={siteToUpdate.skills} onChange={handleChange} className="form-control" placeholder="Skills" />
                            </div>
                            <div className="form-group">
                                <input type="date" name="publicationDate" required defaultValue={siteToUpdate.publicationDate} onChange={handleChange} className="form-control" placeholder="Date de publication" />
                            </div>
                            <div className="form-group">
                                <textarea name="description" rows="5" required defaultValue={siteToUpdate.description} onChange={handleChange} className="form-control" placeholder="Description" />
                            </div>
                            <div className="form-group">
                                <input type="file" id="multer-file" name="imgCollection" onChange={handleChangeFiles} multiple required />
                            </div>
                            <div className="btn-group">
                                <input type="submit" value="Submit" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* <p>{siteToUpdate.imgCollection[0]}</p> */}

            {JSON.stringify(site)}
            <Link to="/admin-dashboard">Retour a l'Administration</Link>

        </div>
    )
}

export default EditSiteItemPage