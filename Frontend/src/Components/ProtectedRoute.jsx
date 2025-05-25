import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.user); // Adjust based on your Redux store

    if (!localStorage.getItem('user')) {
        // If no user is logged in, redirect to the login page
        alert("Please login to access this page.");
        return <Navigate to="/login" />;
    }

    // If user is authenticated, render the children (protected content)
    return children;
};

export default ProtectedRoute;
