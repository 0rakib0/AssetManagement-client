import { Outlet } from "react-router-dom";
import Nav from "../Shared/Dashbord/Nav";
import SideBar from "../Shared/Dashbord/SideBar";


const Dashbord = () => {
    return (
        <div className="flex">
            <div className="flex">
                <SideBar></SideBar>
                <Nav></Nav>
            </div>
            <div className="mt-20 md:w-10/12 text-red">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;