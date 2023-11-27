import { FaCookieBite, FaLuggageCart, FaTh, FaCartArrowDown, FaCog, FaSignOutAlt, FaClipboardCheck, FaUsers, FaUserPlus, FaClipboardList } from "react-icons/fa";
import { NavLink, } from "react-router-dom";

const SideBar = () => {


    const isAdmin = false


    return (
        <div className="h-full z-10">
            <div className="bg-SecondariColor flex items-center py-6 gap-4">
                <div className="avatar pl-2">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg" />
                    </div>
                </div>
                <div className="px-4 mt-4 text-white">
                    <h3 className="text-lg font-bold">Rakibul Hasan</h3>
                    <p className="text-center">Admin</p>
                </div>

            </div>
            <div className="bg-primaryColor text-white pb-80">
                <h4 className="text-xl text-center py-2 border-b-2 border-thirdColor">General</h4>
                <ul className="space-y-8 pl-6 m-4 text-xl">

                    {isAdmin ? <>
                        <li> <NavLink className='flex gap-3 items-center'><FaClipboardCheck className="text-orange-400 text-2xl"></FaClipboardCheck> Admin Home</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center' to="my-employee"><FaUsers className="text-green-400 text-2xl"></FaUsers>My Employee</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center' to='add-employee'><FaUserPlus className="text-orange-600 text-2xl"></FaUserPlus>Add Employee</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center' to='add-asset'><FaClipboardCheck className="text-orange-200 text-2xl"></FaClipboardCheck>Add Asset</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center' to='asset-list'><FaClipboardList className="text-blue-600 text-2xl"></FaClipboardList>Asset List</NavLink></li>

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
                            <li> <NavLink className='flex gap-3 items-center' to='my-team'><FaUsers className="text-orange-600 text-2xl"></FaUsers>My Team</NavLink></li>

                            <li> <NavLink className='flex gap-3 items-center' to='request-for-asset'><FaTh className="text-blue-800 text-2xl"></FaTh>My Asset</NavLink></li>

                            <li> <NavLink className='flex gap-3 items-center'><FaCartArrowDown className="text-indigo-800 text-2xl"></FaCartArrowDown>My monthly requests</NavLink></li>
                            <li> <NavLink className='flex gap-3 items-center'><FaCog className="text-sky-500 text-2xl"></FaCog>Settings</NavLink></li>

                            <li> <NavLink className='flex gap-3 items-center'><FaSignOutAlt className="text-sky-300 text-2xl"></FaSignOutAlt>Logout</NavLink></li>
                            <li>Others Page</li>
                        </>

                    }


                </ul>
            </div>
        </div>
    );
};

export default SideBar;