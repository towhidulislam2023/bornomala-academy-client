import React, { useContext } from 'react';
import UseAuthorizarion from '../../hook/UseAuthorization/UseAuthorizarion';
import { useLocation } from 'react-router-dom';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthProviderContext);
    const [userRole, isAuthLoading] = UseAuthorizarion();
    const location = useLocation();

    if (loading || isAuthLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && userRole==="admin") {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;