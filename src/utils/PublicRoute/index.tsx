import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PublicRoute = () => {
    const {pathname} = useLocation();
    const isAuthenticated = localStorage.getItem("accessToken");
  return (
    isAuthenticated ? <Navigate to="/landingPage"/> : <Outlet/>
  )
}

export default PublicRoute