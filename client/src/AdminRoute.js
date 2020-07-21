import React,{Fragment} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AdminDashboard from './components/AdminDashboard';
import EditSiteItemPage from './components/EditSiteItemPage';

export const AdminRoute = () => {
    const user = useSelector(function (state) { return state.user });
    if (user.token) {
        return (
            <Fragment>
                <Route exact path="/admin-dashboard" component={AdminDashboard} />
                <Route exact path="/admin-dashboard/edit/site/:_id" component={EditSiteItemPage} />
            </Fragment>
        )
    } else {
        return (
            <Redirect to={"/Signin"} />
        )
    }
};

export default AdminRoute