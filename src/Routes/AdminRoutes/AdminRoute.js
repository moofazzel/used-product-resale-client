import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/UseAdmin';

const AdminRoute = ({ children }) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,isAdminLoading] = useAdmin(user?.email)

    const location = useLocation()

    if (loading || isAdminLoading) {
        return <LoadingSpinner/>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to={'/login'} state={{from:location}} replace ></Navigate>
    
};

export default AdminRoute;