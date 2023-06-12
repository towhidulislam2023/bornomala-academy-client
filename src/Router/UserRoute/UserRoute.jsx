import React, { useContext } from 'react';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import UseAuthorizarion from '../../hook/UseAuthorization/UseAuthorizarion';
import { Navigate, useLocation } from 'react-router-dom';

const UserRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProviderContext);
    const [userRole, isAuthLoading] = UseAuthorizarion();
    const location = useLocation();

    if (loading || isAuthLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && userRole === "user") {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default UserRoute;