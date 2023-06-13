import { Link, Outlet } from "react-router-dom";
import {
  // FaCartPlus,
  // FaCalendarAlt,
  FaHome,
  // FaUtensils,
  FaUsers,
  // FaBook,
} from "react-icons/fa";
import { AiFillHome, AiOutlineMenu, AiTwotoneShopping } from "react-icons/ai";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Dashboard = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: isVerify } = useQuery({
    queryKey: ["isVerify", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axiosSecure.get(`/users/verify/${user?.email}`);
      return response.data.role;
    },
  });



  return (
    <>
  
    
    <Navbar></Navbar>
    <div className="drawer lg:drawer-open   bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 language-font">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content flex flex-col items-center justify-center  ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
       
       
      
   
    
     <div className="w-full">
     <Outlet></Outlet>
     </div>
  
 
       
    
      
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu  w-70 h-full bg-base-200 text-base-content  text-xl flex justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 ">
          {/*-----Sidebar content here----*/}

          {isVerify == "admin" ? (
            <>
              <li>
                <Link to="/dashboard/manageClasses">
                  <AiFillHome></AiFillHome>Mange Classes
                </Link>
              </li>

              <li>
                <Link to="/dashboard/manageUsers">
                  <FaUsers></FaUsers> Manage Users
                </Link>
              </li>
            </>
          ) : (
            ""
          )}

          {isVerify === "instructors" ? (
            <>
              <li>
                <Link to="/dashboard/addClasses">
                  <AiFillHome className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none "></AiFillHome>
                  Add Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myClasses">
                  <FaUsers className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none "></FaUsers>
                  My Classes
                </Link>
              </li>
            </>
          ) : (
            ""
          )}

          {isVerify === "student" ? (
            <>
              <li>
                <Link to="/dashboard/selectedClasses">
                  <AiFillHome className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none "></AiFillHome>
                  Selected Class
                </Link>
              </li>
              <li>
                <Link to="/dashboard/paymentHistory">
                  <FaUsers className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none "></FaUsers>
                 Payment History
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myEnrolled">
                  <FaUsers className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none "></FaUsers>
                 My Enrolled
                </Link>
              </li>

              
            </>
          ) : (
            ""
          )}



          <div className="divider"></div>

          <li>
            <Link to="/">
              <FaHome className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none "></FaHome>
              Home
            </Link>
          </li>
          <li>
            <Link to="/instructors">
              <AiOutlineMenu></AiOutlineMenu> Instructors
            </Link>
          </li>
          <li>
            <Link to="/classes">
              <AiTwotoneShopping></AiTwotoneShopping>Classes
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Dashboard;
