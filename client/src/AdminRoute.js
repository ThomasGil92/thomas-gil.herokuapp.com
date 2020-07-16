import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AdminDashboard from './components/AdminDashboard';

export const AdminRoute = () => {
    const user = useSelector(function (state) { return state.user });
    if (user.token) {
        return (
            <Route exact path="/admin-dashboard" component={AdminDashboard} />
        )
    } else {
        return (
            <Redirect to={"/signin"} />
        )
    }
};

export default AdminRoute