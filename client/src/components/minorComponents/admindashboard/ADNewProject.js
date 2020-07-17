import React, { useState, useEffect } from 'react';
import { postSite, setNewSite, getSites } from '../../../actions/index'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


const ADNewProject = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const user = useSelector(state => state.user);
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
        title = '',
        description = '',
        url = '',
        skills = [''],
        formData,
        publicationDate = ''
    } = site

    const init = () => {
        setFields({ formData: new FormData() });
    }

    useEffect(() => {
        init()
    }, [])
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
        for (const key of Object.keys(imgCollection)) {
            formData.append('imgCollection', imgCollection[key])
        }
        postSite(user.user._id, user.token, formData)
            .then(function (response) {
                console.log(response)
                dispatch(setNewSite(response));
                setFields({
                    title: '',
                    description: '',
                    url: '',
                    skills: [],
                    publicationDate: '',
                    formData: ''
                })
                setImgCollection('')
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
                    <input type="text" name="title" required value={title} onChange={handleChange} className="form-control" placeholder="Title" />
                </div>
                <div className="form-group">
                    <input type="text" name="url" required value={url} onChange={handleChange} className="form-control" placeholder="url" />
                </div>
                <div className="form-group">
                    <input type="text" name="skills" required value={skills} onChange={handleChange} className="form-control" placeholder="Skills" />
                </div>
                <div className="form-group">
                    <input type="date" name="publicationDate" required value={publicationDate} onChange={handleChange} className="form-control" placeholder="Date de publication" />
                </div>
                <div className="form-group">
                    <textarea name="description" rows="5" required value={description} onChange={handleChange} className="form-control" placeholder="Description" />
                </div>
                <div className="form-group">
                    <input type="file" id="multer-file" name="imgCollection" onChange={handleChangeFiles} multiple />
                </div>
                <div className="btn-group">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default ADNewProject