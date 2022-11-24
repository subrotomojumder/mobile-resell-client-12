import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar>
                <label htmlFor="mobile-resell-drawer" className="btn btn-square btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </label>
            </Navbar>
            <div className="drawer drawer-mobile">
                <input id="mobile-resell-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-sky-50">
                    <label htmlFor="mobile-resell-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 text-base-content">
                    <div className='text-center mt-6 mr-4'>
                        <img className='w-20 h-20 mx-auto rounded-full' src={user?.photoURL} alt="" />
                        <p className=' font-bold'> {user?.displayName}</p>
                        <p className=''>{user?.email}</p>
                        <hr className='mx-8' />
                    </div>
                        <Link to='/dashboard/my-orders' className='font-semibold mt-1 text-lg pl-4 hover:bg-sky-400 py-3'><li>My orders</li></Link>
                        <Link to='/dashboard/add-products' className='font-semibold mt-1 text-lg pl-4 hover:bg-sky-400 py-3'><li>Add A product</li></Link>
                        <Link to='/dashboard/my-products' className='font-semibold mt-1 text-lg pl-4 hover:bg-sky-400 py-3'><li>My Products</li></Link>
                        <Link to='/dashboard/all-sellers' className='font-semibold mt-1 text-lg pl-4 hover:bg-sky-400 py-3'><li>All Sellers</li></Link>
                        <Link to='/dashboard/all-buyers' className='font-semibold mt-1 text-lg pl-4 hover:bg-sky-400 py-3'><li>All Buyers</li></Link>
                        <Link to='/dashboard/reported-items' className='font-semibold mt-1 text-lg pl-4 hover:bg-sky-400 py-3'><li>Reported Items</li></Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;