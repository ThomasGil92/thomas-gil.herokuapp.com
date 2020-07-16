import React,{Fragment} from "react"
import ADHeader from "./minorComponents/admindashboard/ADHeader"
import ADProjectGallery from "./minorComponents/admindashboard/ADProjectGallery"

const AdminDashboard = () => {
    return (
        <div className="container-fluid px-0">
            <ADHeader />
            <ADProjectGallery/>
        </div>
    )
}

export default AdminDashboard