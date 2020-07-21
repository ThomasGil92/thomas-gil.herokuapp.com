import React, { Fragment } from "react"
import ADHeader from "./minorComponents/admindashboard/ADHeader"
import ADProjectGallery from "./minorComponents/admindashboard/ADProjectGallery"
import ADNewProject from "./minorComponents/admindashboard/ADNewProject"
import Alert from './minorComponents/layout/alert'

const AdminDashboard = () => {
    return (
        <div className="container-fluid px-0">
            <ADHeader />
            <Alert/>
            <div className="row">
                <ADNewProject />
                <ADProjectGallery />
            </div>
        </div>
    )
}

export default AdminDashboard