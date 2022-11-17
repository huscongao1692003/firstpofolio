import React from "react"
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "./context/Context.js"

const PrivateRoute = () => {

    let { currentUser } = useAuth();

    return typeof currentUser === 'undefined' ? (
        <h1>YOU NEED TO LOGIN FIRST!...</h1>
    ) : currentUser ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    );

}


export default PrivateRoute;;