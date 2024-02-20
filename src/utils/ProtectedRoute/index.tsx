import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = () => {
    const { pathname } = useLocation();

    const isAuthenticated = localStorage.getItem("accessToken");
  
    return isAuthenticated && pathname === "/login" ? (
      <Navigate to="/admin/dashboard" />
    ) : isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
}

export default ProtectedRoute