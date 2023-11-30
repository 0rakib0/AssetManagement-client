import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Nav = () => {
    const naviget = useNavigate()
    const {Logout} = useAuth()

    const handleLogout = () =>{
        Logout()
        naviget('/')
    
    }
    return (
        <div className="bg-primaryColor text-white absolute top-0 md:left-44 lg:left-60 w-[81%] py-6">
            <div className="flex justify-between items-center">
                <div>
                    <img src="https://themewagon.github.io/pluto/images/logo/logo.png" className="w-28 ml-12" alt="" />
                </div>
                <div className="mr-12 text-2xl bg-thirdColor py-2 px-8 rounded-lg">
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>

        </div>
    );
};

export default Nav;