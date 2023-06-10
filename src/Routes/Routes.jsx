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
import AdminRoutes from "./AdminRoutes";
import InstructorsRoutes from "./InstructorsRoutes";
import FeedBack from "../pages/Dashboard/Admin/FeedBack";
import MyEnrolled from "../pages/Dashboard/Students/MyEnrolled";
import Payment from "../pages/Payment.jsx/Payment";



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
    // student Routes
    {
      path:"selectedClasses",
      element:<SelectedClasses></SelectedClasses>
    },
    {
      path:"paymentHistory",
      element:<PaymentHistory></PaymentHistory>
    },
    {
      path:"myEnrolled",
      element:<MyEnrolled></MyEnrolled>
    },
    {
      path:"payment/:id",
      element:<Payment></Payment>
    },
    // Instructors Routes
    {
      path:"addClasses",
      element:<InstructorsRoutes><AddClass></AddClass></InstructorsRoutes>
    },
    {
      path:"myClasses",
      element:<InstructorsRoutes><MyClasses></MyClasses></InstructorsRoutes>
    },
    //admin Routes
    {
      path:"manageClasses",
      element:<AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
    },
    {
      path:"manageUsers",
      element:<AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
    },
    {
      path:"feedback/:id",
      element:<AdminRoutes><FeedBack></FeedBack></AdminRoutes>
    }


  ]

}

]);
export default router;