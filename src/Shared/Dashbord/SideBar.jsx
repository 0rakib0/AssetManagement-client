import { FaCookieBite, FaLuggageCart, FaTh, FaCartArrowDown, FaCog, FaSignOutAlt } from "react-icons/fa";
import { NavLink, } from "react-router-dom";

const SideBar = () => {


    const isAdmin = true


    return (
        <div className="h-[100vh] z-10">
            <div className="bg-SecondariColor flex items-center py-6 gap-4">
                <div className="avatar pl-2">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/x8V6sjM/399323234-3729285343972003-6378922235259600241-n.jpg" />
                    </div>
                </div>
                <div className="px-4 mt-4 text-white">
                    <h3 className="text-2xl font-bold">Rakibul Hasan</h3>
                    <p className="text-center">Admin</p>
                </div>

            </div>
            <div className="bg-primaryColor text-white">
                <h4 className="text-xl text-center py-2 border-b-2 border-thirdColor">General</h4>
                <ul className="space-y-8 pl-6 m-4 text-xl">

                    {isAdmin ? <>
                        <li> <NavLink className='flex gap-3 items-center'><FaCookieBite className="text-orange-400 text-2xl"></FaCookieBite> Admin Dashbord</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center'><FaLuggageCart className="text-orange-600 text-2xl"></FaLuggageCart>Pending requests</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center'><FaTh className="text-blue-800 text-2xl"></FaTh>Most requested items</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center'><FaCartArrowDown className="text-indigo-800 text-2xl"></FaCartArrowDown>Limited Stock items</NavLink></li>
                        <li> <NavLink className='flex gap-3 items-center'><FaCog className="text-sky-500 text-2xl"></FaCog>Settings</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center'><FaSignOutAlt className="text-sky-300 text-2xl"></FaSignOutAlt>Logout</NavLink></li>
                        <li>Others Page</li>
                    </>

                        :

                        <>
                            <li> <NavLink className='flex gap-3 items-center'><FaCookieBite className="text-orange-400 text-2xl"></FaCookieBite> Employee Dashbord</NavLink></li>
                        </>

                    }


                </ul>
            </div>
        </div>
    );
};

export default SideBar;