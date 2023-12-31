import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../../Sheared/Header/Header';
import Footer from '../../Sheared/Footer/Footer';
import UseAuthorizarion from '../../hook/UseAuthorization/UseAuthorizarion';
import { FaBars, FaChalkboardTeacher, FaClipboardList, FaPlay, FaPlusSquare, FaTrash, FaUsers, FaWallet } from 'react-icons/fa';
import logo from '../../assets/icons/logo-bornonala-final.png';
import { useContext } from 'react';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';

const DashBoardLayout = () => {
    const { user } = useContext(AuthProviderContext)
    const [userRole] = UseAuthorizarion()
    const userNavLinks = <>
        <li>
            <NavLink
                to={"/dashboard/selectedClasses"}
                className={({ isActive }) =>
                    isActive ? "underline" : ""
                }
            >
                <FaChalkboardTeacher></FaChalkboardTeacher> Selected Classes
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/dashboard/enrolledClasses"}
                className={({ isActive }) =>
                    isActive ? "underline " : " "
                }
            >
                <FaPlay></FaPlay> Enrolled Classes
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/dashboard/paymenthistory"}
                className={({ isActive }) =>
                    isActive ? "underline " : " "
                }
            >
                <FaWallet></FaWallet> Payment History
            </NavLink>
        </li>
    </>
    const AdminNavLinks = <>
        <li>
            <NavLink
                to={"/dashboard/manageUsers"}
                className={({ isActive }) =>
                    isActive ? "underline text-xl" : " text-xl"
                }
            >
                <FaUsers></FaUsers> Manage Users
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/dashboard/manageClasses"}
                className={({ isActive }) =>
                    isActive ? "underline text-xl" : " text-xl"
                }
            >
                <FaClipboardList></FaClipboardList> Manage Classes
            </NavLink>

        </li>

        <li>
            <NavLink
                to={"/dashboard/manageallClasses"}
                className={({ isActive }) =>
                    isActive ? "underline text-xl" : " text-xl"
                }
            >
                <FaBars></FaBars> Manage All Classes
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/dashboard/deniedclasses"}
                className={({ isActive }) =>
                    isActive ? "underline text-xl" : " text-xl"
                }
            >
                <FaTrash></FaTrash> Denied Classes
            </NavLink>
        </li>
    </>
    const instructorsNAvLinks = <>
        <li>
            <NavLink
                to={"/dashboard/addAClass"}
                className={({ isActive }) =>
                    isActive ? "underline text-xl" : " text-xl"
                }
            >
                <FaPlusSquare></FaPlusSquare>  Add a Class
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/dashboard/myClasses"}
                className={({ isActive }) =>
                    isActive ? "underline text-xl" : " text-xl"
                }
            >
                <FaChalkboardTeacher></FaChalkboardTeacher>   My Classes
            </NavLink>
        </li>
    </>
    return (
        <div className='md:w-[80%] mx-auto px-6 md:px-0' >
            <Header></Header>
            <div className='grid md:grid-cols-12 gap-10'>
                <div className='md:col-span-3 w-[95%] bg-green-200'>
                    <img className='w-56 mx-auto' src={logo} alt="" />
                    <p className='text-center'> Hi , {user && user.displayName}</p>
                    <ul className="menu  md:block   rounded-box  font-bold ">
                        {
                            userRole && userRole === "user" ? userNavLinks :
                                userRole === "instructor" ? instructorsNAvLinks :
                                    userRole === "admin" ? AdminNavLinks :
                                        "user"
                        }
                    </ul>
                </div>
                <div className='md:col-span-9'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;