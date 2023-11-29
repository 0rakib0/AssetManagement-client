import {
    createBrowserRouter
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home/Home";
import RegisterAdmin from "../Pages/RegisterAdmin/RegisterAdmin";
import RegisterEmp from "../Pages/RegisterEmp/RegisterEmp";
import Login from "../Pages/Login/Login";
import Dashbord from "../Roots/Dashbord";
import Addasset from "../Pages/Dashbord/AddAsset/Addasset";
import AssetList from "../Pages/Dashbord/AssetList/AssetList";
import AddEmployee from "../Pages/Dashbord/addEmployee/AddEmployee";
import MyEmployees from "../Pages/Dashbord/MyEmployees/MyEmployees";
import MyTeam from "../Pages/Dashbord/MyTeam/MyTeam";
import RequestForAsset from "../Pages/Dashbord/RequestForAsset/RequestForAsset";
import MyAsset from "../Pages/Dashbord/MyAsset/MyAsset";
import AllRequest from "../Pages/Dashbord/AllRequest/AllRequest";
import CustomRequest from "../Pages/Dashbord/CustomRequest/CustomRequest";
import MyCustomRequest from "../Pages/Dashbord/MyCustomRequest/MyCustomRex";
import AllCustomRequest from "../Pages/Dashbord/AllCustomRequest/AllCustomRequest";
import UpdateAsset from "../Pages/Dashbord/UpdateAsset/UpdateAsset";
import PrivatRouts from "./PrivatRouts";
import AdminRouts from "./AdminRouts";
import HomeDashbord from "../Pages/Dashbord/HomeDashbord/HomeDahsbord";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children: [
        {
            path:'',
            element: <Home></Home>
        },
        {
            path:'/admin-register',
            element: <RegisterAdmin></RegisterAdmin>
        },
        {
            path:'/employee-register',
            element: <RegisterEmp></RegisterEmp>
        },
        {
          path:'/login',
          element: <Login></Login>
        }
      ]
    },
    {
      path:'/dashbord',
      element:<PrivatRouts><Dashbord></Dashbord></PrivatRouts>,
      children:[
        {
          path:'add-asset',
          element: <AdminRouts><Addasset></Addasset></AdminRouts>
        },
        {
          path:'/dashbord',
          element: <HomeDashbord></HomeDashbord>
        },
        {
          path:'asset-list',
          element: <AdminRouts><AssetList></AssetList></AdminRouts>
        },
        {
          path:'add-employee',
          element: <AdminRouts><AddEmployee></AddEmployee></AdminRouts>
        },
        {
          path:'my-employee',
          element: <AdminRouts><MyEmployees></MyEmployees></AdminRouts>
        },
        {
          path:'my-team',
          element: <PrivatRouts><MyTeam></MyTeam></PrivatRouts>
        },
        {
          path:'request-for-asset',
          element: <PrivatRouts><RequestForAsset></RequestForAsset></PrivatRouts>
        },
        {
          path:'my-asset',
          element: <PrivatRouts><MyAsset></MyAsset></PrivatRouts>
        },
        {
          path:'all-request',
          element: <AllRequest></AllRequest>
        },
        {
          path:'custom-request',
          element: <PrivatRouts><CustomRequest></CustomRequest></PrivatRouts>
        },
        {
          path:'my-custom-request',
          element: <PrivatRouts><MyCustomRequest></MyCustomRequest></PrivatRouts>
        },
        {
          path:'all-custom-request',
          element:<AllCustomRequest></AllCustomRequest>
        },
        {
          path:'updated-asset/:id',
          element: <PrivatRouts><UpdateAsset></UpdateAsset></PrivatRouts>
        },
      ]
    }
  ]);

  export default router