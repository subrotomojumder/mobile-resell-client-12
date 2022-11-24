import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const naveItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to=''>All-Products</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
    </>;
    return (
        <div className="navbar bg-sky-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {naveItems}
                    </ul>
                </div>
                <Link className="ml-2 text-xl  normal-case font-bold text-primary">Mobile Resell Shope</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {naveItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-square btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
                <Link className="btn btn-primary rounded-3xl hidden lg:flex btn-sm mr-2" to='/login'>Sign-Up</Link>
                <Link className="btn btn-success text-white mr-4" to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;