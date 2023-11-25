import { Outlet } from "react-router-dom";
import Nav from "../Shared/Dashbord/Nav";
import SideBar from "../Shared/Dashbord/SideBar";


const Dashbord = () => {
    return (
        <div>
            <div className="flex">
                <SideBar></SideBar>
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashbord;