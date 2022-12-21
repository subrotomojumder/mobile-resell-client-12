import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../context/AuthProvider';
import Spinner from '../Shared/Spinner';

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);

    return (
        <div className='h-screen flex justify-center lg:pt-12 bg-green-100'>
            <Helmet>
                <title>Dashboard-Mobile Resell Shop</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            {
                loading ? <Spinner></Spinner>
                    : <div className='text-center'>
                        <div>
                            <img className='w-24 h-28 mx-auto mt-10 rounded-lg mb-2' src={user?.photoURL} alt="" />
                            <p className=' font-bold text-xl'> {user?.displayName}</p>
                            <p className='font-bold'>{user?.email}</p>
                            <p>UID: {user?.uid}</p>
                            <hr className='mx-8 mt-1' />
                        </div>
                        <h3 className='text-3xl font-serif mt-2'>Welcome Your Dashboard</h3>
                    </div>
            }
        </div>
    );
};

export default Dashboard;