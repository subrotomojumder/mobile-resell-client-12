import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div className='relative'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;