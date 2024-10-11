import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from './UserContext';

const ProtectedRoute = () => {
    const { user } = useUser();
    return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
