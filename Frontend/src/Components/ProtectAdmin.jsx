import react from 'react';
import { Navigate } from 'react-router-dom';

const ProtectAdmin = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user')); // Assuming user data is stored in localStorage

    if (!user || !user.isAdmin) {
        // If no user is logged in or user is not an admin, redirect to the home page
        alert("You do not have permission to access this page.");
        return <Navigate to="/books" />;
    }

    // If user is authenticated and is an admin, render the children (protected content)
    return children;
}

export default ProtectAdmin;