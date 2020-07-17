import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getSite,editSite,getSites } from '../actions'
import moment from 'moment'
moment.locale();

const EditSiteItemPage = ({ match }) => {
    const siteToUpdate = useSelector(state => state.siteToUpdate);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [imgCollection, setImgCollection] = useState('')
    const [site, setFields] = useState({
        title: '',
        description: '',
        url: '',
        skills: [],
        publicationDate: '',
        formData: ''
    })
    const {
        title=siteToUpdate.title,
        description= siteToUpdate.description,
        url= siteToUpdate.url,
        skills= siteToUpdate.skills,
        publicationDate= siteToUpdate.publicationDate,
        formData
    } = site


    const handleChange = e => {
        
        const value = e.target.value;
        formData.set(e.target.name, value);
        setFields({ ...site, [e.target.name]: value });
        console.log(site)
    }
    const handleChangeFiles = e => {
        setImgCollection({ ...e.target.files });
        console.log(site)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFields({site})
        for (const key of Object.keys(imgCollection)) {
            formData.append('imgCollection', imgCollection[key])
        }
        editSite(user.user._id, user.token, formData,siteToUpdate._id)
            .then(function (response) {
                console.log(response)
                dispatch(getSites());
                document.getElementById("multer-file").value = "";
                // history.go() 
            })
            .catch(function (error) { console.log(error); });
    }
    const init = () => {
        dispatch(getSite(match.params._id))
        setFields({ formData: new FormData() });
    }
    useEffect(() => {
        init()
    }, [])
    return (
        <div className="container-fluid px-0 text-center mx-auto justify-content-center">
            {siteToUpdate && (
                <div>
                    <h1>Modifier les informations du site {siteToUpdate.title}</h1>
                    <div className="col-6 mx-auto">
                        {siteToUpdate.imgCollection && (
                            <img width="300px" alt={siteToUpdate.title} src={siteToUpdate.imgCollection[0]} />
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="title" required defaultValue={title} onChange={handleChange} className="form-control" placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="url" required defaultValue={url} onChange={handleChange} className="form-control" placeholder="url" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="skills" required defaultValue={skills} onChange={handleChange} className="form-control" placeholder="Skills" />
                            </div>
                            <div className="form-group">
                                <input type="date" name="publicationDate" required defaultValue={publicationDate} onChange={handleChange} className="form-control" placeholder="Date de publication" />
                            </div>
                            <div className="form-group">
                                <textarea name="description" rows="5" required defaultValue={description} onChange={handleChange} className="form-control" placeholder="Description" />
                            </div>
                            <div className="form-group">
                                <input type="file" id="multer-file" name="imgCollection" onChange={handleChangeFiles} multiple />
                            </div>
                            <div className="btn-group">
                                <input type="submit" value="Submit" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* <p>{siteToUpdate.imgCollection[0]}</p> */}


            <Link to="/admin-dashboard">Retour a l'Administration</Link>

        </div>
    )
}

export default EditSiteItemPage