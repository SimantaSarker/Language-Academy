import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";


const router=createBrowserRouter([
{
  path:"/",
  element:<Main></Main>,
  children:[
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/signUp",
      element:<SignUp></SignUp>
    },
    {
      path:"/classes",
      element:<Classes></Classes>
    },
    {
      path:"/instructors",
      element:<Instructors></Instructors>
    }
  ]
},
{
  path:"/dashboard",
  element:<Dashboard></Dashboard>

}

]);
export default router;