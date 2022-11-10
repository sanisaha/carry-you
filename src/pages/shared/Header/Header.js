import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/website logo/carryYou.jpg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    const navbarItems = <>
        <li className='font-semibold'><Link to='/myreviews'>My reviews</Link></li>
        <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user?.uid ?
                                <>{navbarItems}</>
                                :
                                <><li className='font-semibold'><Link to='/blog'>Blogs</Link></li></>
                        }
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src={logo} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl ms-0">Carry <span className='text-orange-400'>You</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        user?.uid ?
                            <>{navbarItems}</>
                            :
                            <><li className='font-semibold'><Link to='/blog'>Blogs</Link></li></>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <><Link onClick={handleLogOut}><button className="btn">LogOut</button></Link></>
                        :
                        <><Link to='/login'><button className="btn">Log In</button></Link></>
                }
            </div>
        </div>
    );
};

export default Header;