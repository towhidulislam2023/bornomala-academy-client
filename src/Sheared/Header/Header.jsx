import React from 'react';
import logo from '../../assets/icons/logo-bornonala-final.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const user=1
    const navLinks=<>
        <li> <NavLink
            to={"/"}
            className={({ isActive }) =>
                isActive ? "underline text-xl" : " text-xl"
            }
        >
            Home
        </NavLink></li>
        <li> <NavLink
            to={"/instructors"}
            className={({ isActive }) =>
                isActive ? "underline text-xl" : " text-xl"
            }
        >
            Instructors
        </NavLink></li>
        <li> <NavLink  to={"/classes"} className={({ isActive }) =>isActive ? "underline text-xl" : " text-xl"  } >Classes </NavLink></li>
        {
            user&&user?<>
                <li> <NavLink to={"/dashboard"} className={({ isActive }) => isActive ? "underline text-xl mr-3" : " text-xl mr-3"} >DashBoard </NavLink></li>
                <div className="avatar mr-4">
                    <div className="w-8 rounded-full">
                        <img className='w-12' src="https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg?w=740&t=st=1686069378~exp=1686069978~hmac=4a793b01d839b160207a759d36ae0ebba2a3414968768aa91cd5694c50f7f9b5" />
                    </div>
                </div>

            </>:<>
                    <Link to={"/login"}><button className="btn btn-success px-10 font-bold">Login</button></Link>
            </>
        
        }
        
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to={"/"}> <img className='w-64' src={logo} alt="" /></Link>
                {/* <p className="text-xl font-bold">Bornomala Academy</p> */}
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Header;