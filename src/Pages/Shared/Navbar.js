import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthProvider';

const Navbar = ({children}) => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then(() => { }).catch(e => toast.error(e.message))
    }
    const naveItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/aboutUs'>About Us</Link></li>
        <li className='font-semibold'><Link to='/blog'>FAQ</Link></li>
        {user?.email && <li className='font-bold lg:hidden'><button onClick={handleLogOut} >Logout</button></li>}
    </>;
    return (
        <div className="navbar bg-sky-200 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {naveItems}
                    </ul>
                </div>
                <Link to='/' className="ml-2 text-xl  normal-case font-bold font-serif text-primary">Mobile Resell Shope</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {naveItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <>
                            <button className="">
                            </button>
                            <Link to='/dashboard'><button className='btn btn-ghost text-slate-500'>Dashboard</button></Link>
                            {children}
                            <button onClick={handleLogOut} className="btn btn-primary rounded-3xl hidden lg:flex btn-sm mr-2">Logout</button>
                        </> :
                        <>
                            <Link className="btn btn-primary rounded-3xl hidden lg:flex btn-sm mr-2" to='/register'>Sign-Up</Link>
                            <Link className="btn btn-success text-white mr-4" to='/sign-in'>Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;
