import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const DisplayError = () => {
    const {logOut} =useContext(AuthContext);
    const navigate = useNavigate();
    const error = useRouteError();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                
                navigate('/')
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className='h-screen flex items-center justify-center text-center'>
            <div>
                <img className='w-[50%] mx-auto mb-3' src="https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/error-icon.png" alt="" />
                <h4 className='text-2xl mb-2'>Something went wrong !!!</h4>
                <h3 className='text-6xl my-4'>{error.statusText || error.message}</h3>
                <h2 className='text-4xl text-warning'>{error.status}</h2>
                <p>Please <button onClick={handleLogOut} className='btn btn-ghost btn-sm'>Sign out</button> and log back in</p>
            </div>
        </div>
    );
};

export default DisplayError;