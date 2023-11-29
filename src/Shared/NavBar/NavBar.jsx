import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const NavBar = () => {

    const naviget = useNavigate()
    const { user, Logout } = useAuth()

    const handleLogout = () => {
        Logout()
        naviget('/')
    }

    const NavLinks = <>
        <li className="md:text-lg ml-2"><NavLink to=''>HOME</NavLink></li>
        {user ? <>
            <li className="md:text-lg ml-2"><NavLink to='/dashbord'>Dashbord</NavLink></li>
            <li className="md:text-lg ml-2" onClick={handleLogout}><NavLink to='/login'>LOGOUT</NavLink></li>
        </>
            :
            <><li className="md:text-lg ml-2"><NavLink to='/employee-register'>JOIN AS EMPLOYEE</NavLink></li>
                <li className="md:text-lg ml-2"><NavLink to='/admin-register'>JOIN AS HR/ADMIN</NavLink></li>
                <li className="md:text-lg ml-2"><NavLink to='/login'>LOGIN</NavLink></li></>
        }
    </>

    return (
        <div className="navbar bg-primaryColor text-white md:px-12 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-primaryColor">
                        {NavLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src="https://themewagon.github.io/pluto/images/logo/logo.png" className="w-44" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            {user && <>
                <div className="navbar-end mr-6">
                    <a className="btn">{user?.email}</a>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div>
            </>}
        </div>
    );
};

export default NavBar;