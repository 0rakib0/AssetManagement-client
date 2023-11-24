import {
    createBrowserRouter
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home/Home";
import RegisterAdmin from "../Pages/RegisterAdmin/RegisterAdmin";
import RegisterEmp from "../Pages/RegisterEmp/RegisterEmp";


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
        }
      ]
    },
  ]);

  export default router