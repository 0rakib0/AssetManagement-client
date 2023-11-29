import { FaCookieBite, FaLuggageCart, FaTh, FaCartArrowDown, FaCog, FaSignOutAlt, FaClipboardCheck, FaUsers, FaUserPlus, FaClipboardList, FaBezierCurve } from "react-icons/fa";
import { NavLink, } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";

const SideBar = () => {
    const {user} = useAuth()

    const [isAdmin, adminLoading] = useAdmin()
    if(adminLoading){
        return 'Loadin......'
    }
    const isAdmin2 = isAdmin


    return (
        <div className="h-full z-10">
            <div className="bg-SecondariColor flex items-center py-6 lg:gap-4">
                <div className="avatar pl-2">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <div className="px-4 mt-4 text-white">
                    <h3 className="text-lg font-bold">{user?.displayName}</h3>
                    <p className="text-center">{isAdmin2 ? "Admin":"Employee"}</p>
                </div>

            </div>
            <div className="bg-primaryColor text-white pb-80">
                <h4 className="text-xl text-center py-2 border-b-2 border-thirdColor">General</h4>
                <ul className="space-y-8 pl-6 m-4 text-xl">

                    {isAdmin2 ? <>
                        <li> <NavLink className='flex gap-3 items-center'><FaClipboardCheck className="text-orange-400 text-2xl"></FaClipboardCheck> Admin Home</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center' to="my-employee"><FaUsers className="text-green-400 text-2xl"></FaUsers>My Employee</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center' to='add-employee'><FaUserPlus className="text-orange-600 text-2xl"></FaUserPlus>Add Employee</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center' to='add-asset'><FaClipboardCheck className="text-orange-200 text-2xl"></FaClipboardCheck>Add Asset</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center' to='asset-list'><FaClipboardList className="text-blue-600 text-2xl"></FaClipboardList>Asset List</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center' to='all-request'><FaLuggageCart className="text-orange-600 text-2xl"></FaLuggageCart>All Request</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center' to='all-custom-request'><FaTh className="text-blue-800 text-2xl"></FaTh>All Custom Request</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center'><FaCartArrowDown className="text-indigo-800 text-2xl"></FaCartArrowDown>Limited Stock items</NavLink></li>
                        <li> <NavLink className='flex gap-3 items-center'><FaCog className="text-sky-500 text-2xl"></FaCog>Settings</NavLink></li>

                        <li> <NavLink className='flex gap-3 items-center'><FaSignOutAlt className="text-sky-300 text-2xl"></FaSignOutAlt>Logout</NavLink></li>
                        <li>Others Page</li>
                    </>

                        :

                        <>
                            <li> <NavLink className='flex gap-3 items-center'><FaCookieBite className="text-orange-400 text-2xl"></FaCookieBite> Employee Dashbord</NavLink></li>
                            <li> <NavLink className='flex gap-3 items-center' to='my-team'><FaUsers className="text-orange-600 text-2xl"></FaUsers>My Team</NavLink></li>

                            <li> <NavLink className='flex gap-3 items-center' to='my-asset'><FaTh className="text-blue-800 text-2xl"></FaTh>My Asset</NavLink></li>

                            <li> <NavLink className='flex gap-3 items-center' to='request-for-asset'><FaBezierCurve className="text-pink-400 text-2xl"></FaBezierCurve>Request For Asset</NavLink></li>

                            <li> <NavLink className='flex gap-3 items-center' to='custom-request'><FaCartArrowDown className="text-indigo-800 text-2xl"></FaCartArrowDown>Custom requests</NavLink></li>


                            <li> <NavLink className='flex gap-3 items-center' to='my-custom-request'><FaCartArrowDown className="text-indigo-800 text-2xl"></FaCartArrowDown>My Custom requests</NavLink></li>

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