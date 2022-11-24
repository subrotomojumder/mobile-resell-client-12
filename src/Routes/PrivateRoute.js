import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Spinner from '../Pages/Shared/Spinner';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='min-h-screen flex justify-center items-center'><Spinner></Spinner></div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/sign-in' state={{from: location}} replace/>
};

export default PrivateRoute;