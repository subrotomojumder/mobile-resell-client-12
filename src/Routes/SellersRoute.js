import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useUserRole from '../Hooks/checkUserRole';
import Spinner from '../Pages/Shared/Spinner';

const SellerRoute = ({children}) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();
    const [userRole, isLoading] = useUserRole(user?.email);
    if (loading || isLoading) {
        return <div className='min-h-screen flex items-center justify-center'><div className='min-h-screen flex justify-center items-center'><Spinner></Spinner></div></div>
    }
    if (userRole === "Sellers") {
        return children;
    }
    return <Navigate to='/sign-in' state={{from: location}} replace/>
};

export default SellerRoute;