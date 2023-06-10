import React, { useContext } from 'react';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuthorizarion from '../../hook/UseAuthorization/UseAuthorizarion';

const InstructorsRoute = ({children}) => {
    const { user, loading, logout } = useContext(AuthProviderContext);
    const [userRole, isAuthLoading] = UseAuthorizarion();
    const location = useLocation();

    if (loading || isAuthLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && userRole === "instructor") {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorsRoute;