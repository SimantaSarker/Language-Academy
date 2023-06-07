import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import SelectedClasses from "../pages/Dashboard/Students/SelectedClasses";
import PaymentHistory from "../pages/Dashboard/Students/PaymentHistory";
import AddClass from "../pages/Dashboard/InstructorsDash/AddClass";
import MyClasses from "../pages/Dashboard/InstructorsDash/MyClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";


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
  element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
  children:[
    //student Routes
    {
      path:"selectedClasses",
      element:<SelectedClasses></SelectedClasses>
    },
    {
      path:"paymentHistory",
      element:<PaymentHistory></PaymentHistory>
    },
    // Instructors Routes
    {
      path:"addClasses",
      element:<AddClass></AddClass>
    },
    {
      path:"myClasses",
      element:<MyClasses></MyClasses>
    },
    //admin Routes
    {
      path:"manageClasses",
      element:<ManageClasses></ManageClasses>
    },
    {
      path:"manageUsers",
      element:<ManageUsers></ManageUsers>
    }


  ]

}

]);
export default router;