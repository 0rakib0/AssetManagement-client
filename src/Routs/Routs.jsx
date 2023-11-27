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
      element:<Dashbord></Dashbord>,
      children:[
        {
          path:'add-asset',
          element: <Addasset></Addasset>
        },
        {
          path:'asset-list',
          element: <AssetList></AssetList>
        },
        {
          path:'add-employee',
          element: <AddEmployee></AddEmployee>
        },
        {
          path:'my-employee',
          element:<MyEmployees></MyEmployees>
        },
        {
          path:'my-team',
          element: <MyTeam></MyTeam>
        },
        {
          path:'request-for-asset',
          element: <RequestForAsset></RequestForAsset>
        },
        {
          path:'my-asset',
          element: <MyAsset></MyAsset>
        },
        {
          path:'all-request',
          element: <AllRequest></AllRequest>
        }
      ]
    }
  ]);

  export default router