import React from 'react';
import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useUserRole from '../Hooks/checkUserRole';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [userRole, isLoading] = useUserRole(user?.email);
    const linkStyle = (isActive) => {
        if (isActive) {
            return 'font-semibold mt-1 text-lg pl-4 bg-sky-300 hover:bg-sky-400 py-3 border-2';
        }else{
            return 'font-semibold mt-1 text-lg pl-4 hover:bg-sky-400 py-3 border-2';
        }
    }
    return (
        <div className='relative'>
            <Navbar>
                <label htmlFor="mobile-resell-drawer" className="btn btn-square btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </label>
            </Navbar>
            <div className="drawer drawer-mobile">
                <input id="mobile-resell-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-sky-50">
                    <label htmlFor="mobile-resell-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 text-white lg:text-base-content">
                        { isLoading ? <></> : userRole === "Admin" ?
                            <>
                                <NavLink to='/dashboard/all-sellers' className={({ isActive }) => isActive ? linkStyle(true) : linkStyle()}><li>All Sellers</li></NavLink>
                                <NavLink to='/dashboard/all-buyers' className={({ isActive }) => isActive ? linkStyle(true) : linkStyle()}><li>All Buyers</li></NavLink>
                                <NavLink to='/dashboard/reported-items' className={({ isActive }) => isActive ? linkStyle(true) : linkStyle()}><li>Reported Items</li></NavLink>
                            </>
                            : userRole === "Sellers" ?
                                <>
                                    <NavLink to='/dashboard/add-products' className={({ isActive }) => isActive ? linkStyle(true) : linkStyle()}><li>Add A product</li></NavLink>
                                    <NavLink to='/dashboard/my-products' className={({ isActive }) => isActive ? linkStyle(true) : linkStyle()}><li>My Products</li></NavLink>
                                    <NavLink to='/dashboard/my-orders' className={({ isActive }) => isActive ? linkStyle(true) : linkStyle()}><li>My orders</li></NavLink>
                                </>
                                : <>
                                    <NavLink to='/dashboard/my-orders' className={({ isActive }) => isActive ? linkStyle(true) : linkStyle()}><li>My orders</li></NavLink>
                                    <NavLink to='/dashboard/my-wishlist' className={({ isActive }) => isActive ? linkStyle(true) : linkStyle()}><li>My Wishlist</li></NavLink>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;