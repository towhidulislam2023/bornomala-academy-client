import React from 'react';
import logo from '../../assets/icons/logo-bornonala-final.png';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import UseAuthorizarion from '../../hook/UseAuthorization/UseAuthorizarion';
import ThemeToggle from '../../ThemeToggle/ThemeToggle';



const Header = () => {
    const [userRole]=UseAuthorizarion()
    const { user, logout } = useContext(AuthProviderContext);

    const handleLogout = () => {
        logout();
    };

    const navLinks = (
        <>
            <li>
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive ? "underline text-xl" : " text-xl"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/instructors"}
                    className={({ isActive }) =>
                        isActive ? "underline text-xl" : " text-xl"
                    }
                >
                    Instructors
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/classes"}
                    className={({ isActive }) =>
                        isActive ? "underline text-xl" : " text-xl"
                    }
                >
                    Classes
                </NavLink>
            </li>
            {user && user ? (
                <>
                    <li>
                       {
                            userRole && <NavLink
                                to={`${userRole === "user" ? "/dashboard/selectedClasses" : userRole === "admin" ? "/dashboard/manageUsers" : userRole === "instructor" ? "/dashboard/addAClass" : '/'}`}
                                className={({ isActive }) =>
                                    isActive ? "underline text-xl mr-3" : " text-xl mr-3"
                                }
                            >
                                Dashboard
                            </NavLink>
                       }
                    </li>
                    <div className="avatar mr-4">
                        <div className="w-8 rounded mx-auto my-10 md:my-0">
                            <img className='w-12' src={user && user?.photoURL ? user?.photoURL : "https://i.ibb.co/3vB2C0M/chef-57.png"} alt="" />
                        </div>
                    </div>
                    <button onClick={handleLogout} className="btn btn-success px-10 font-bold">Logout</button>
                </>
            ) : (
                <>
                    <Link to={"/login"}>
                        <button className="btn btn-success px-10 font-bold">Login</button>
                    </Link>
                </>
            )}
        </>
    );

    return (
        <div className="navbar w-full bg-base-100 z-10 sticky top-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to={"/"}>
                    <img className='w-64' src={logo} alt="" />
                </Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <ThemeToggle></ThemeToggle>
        </div>
    );
};

export default Header;
