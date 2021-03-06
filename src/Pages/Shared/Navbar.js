import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const menuItems = <>
        <li><Link to='/home' className='text-slate-600 text-xl font-raleway'>Home</Link></li>
        <li><Link to='/allproduct' className='text-slate-600 text-xl font-raleway'>Purchase</Link></li>
        <li><Link to='/blog' className='text-slate-600 text-xl font-raleway'>Blog</Link></li>
        <li><Link to='/myportfolio' className='text-slate-600 text-xl font-raleway'>My Portfolio</Link></li>
        {
            user && <li><Link to='/dashboard' className='text-slate-600 text-xl font-raleway'>Dashboard</Link></li>
        }
        <li>{user ? <button onClick={logout} className="btn btn-ghost text-slate-600 text-xl font-raleway normal-case font-normal">Sign Out</button> : <Link to='/login' className='text-slate-600 text-xl font-raleway'>Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100 lg:flex lg:justify-around drop-shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-3xl font-finger text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Picasso Painting</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashSidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;