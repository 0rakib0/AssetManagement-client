import {
    createBrowserRouter
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home/Home";
import RegisterAdmin from "../Pages/RegisterAdmin/RegisterAdmin";
import RegisterEmp from "../Pages/RegisterEmp/RegisterEmp";
import Login from "../Pages/Login/Login";
import Dashbord from "../Roots/Dashbord";


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
      element:<Dashbord></Dashbord>
    }
  ]);

  export default router