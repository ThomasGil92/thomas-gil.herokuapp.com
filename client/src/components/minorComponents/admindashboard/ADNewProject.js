import React, { useState, useEffect } from 'react';
import { postSite, setNewSite, getSites } from '../../../actions/index'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


const ADNewProject = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const user = useSelector(state => state.user);
    
    const [site, setFields] = useState({
        title: '',
        description: '',
        url: '',
        skills: [],
        publicationDate: '',
        imgCollection:null
    })
    
    const handleChange = e => {
        setFields({ ...site, [e.target.name]: e.target.value });
    }
    const handleChangeFiles = e => {
        setFields({ ...site,imgCollection:e.target.files[0] });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const data=new FormData()
            data.append('imgCollection', site.imgCollection)
            data.append('title', site.title)
            data.append('description', site.description)
            data.append('url', site.url)
            data.append('skills', site.skills)
            data.append('publicationDate', site.publicationDate)
        postSite(user.user._id, user.token, data)
            .then(function (response) {
                console.log(response)
                dispatch(setNewSite(response));
                setFields({
                    title: '',
                    description: '',
                    url: '',
                    skills: [],
                    publicationDate: '',
                    
                })
                dispatch(getSites());
                document.getElementById("multer-file").value = "";
                /* history.go() */
            })
            .catch(function (error) { console.log(error); });
    };
    return (
        <div className="col-md-2 bg-warning text-center text-dark">

            <h4>Add Article</h4>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="title" required value={site.title} onChange={handleChange} className="form-control" placeholder="Title" />
                </div>
                <div className="form-group">
                    <input type="text" name="url" required value={site.url} onChange={handleChange} className="form-control" placeholder="url" />
                </div>
                <div className="form-group">
                    <input type="text" name="skills" required value={site.skills} onChange={handleChange} className="form-control" placeholder="Skills" />
                </div>
                <div className="form-group">
                    <input type="date" name="publicationDate" required value={site.publicationDate} onChange={handleChange} className="form-control" placeholder="Date de publication" />
                </div>
                <div className="form-group">
                    <textarea name="description" rows="5" required value={site.description} onChange={handleChange} className="form-control" placeholder="Description" />
                </div>
                <div className="form-group">
                    <input type="file" id="multer-file" name="imgCollection" enctype="multipart/form-data"  onChange={handleChangeFiles} multiple />
                </div>
                <div className="btn-group">
                    <input type="submit" value="Submi" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default ADNewProject