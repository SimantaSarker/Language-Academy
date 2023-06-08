import { Link, Outlet } from "react-router-dom";
import {
  // FaCartPlus,
  // FaCalendarAlt,
  FaHome,
  // FaUtensils,
  FaUsers,
  // FaBook,
} from "react-icons/fa";
import { BsWalletFill } from "react-icons/bs";
import { AiFillHome, AiOutlineMenu, AiTwotoneShopping } from "react-icons/ai";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  //------------TODO load data from server to have dynamic isAdmin based on Data--------

  const [isAdmin,]=useAdmin()

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gray-400 text-base-content border-8  drop-shadow-7xl text-xl">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/manageClasses" className="animate-pulse">
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
            <>
              <li>
                <Link to="/dashboard/selectedClasses">
                  <AiFillHome></AiFillHome>Selected Classes
                </Link>
              </li>

              <li>
                <Link to="/dashboard/paymentHistory">
                  <BsWalletFill></BsWalletFill> Payment History
                </Link>
              </li>
            </>
          )}

          {/* {isInstructors ? (
            <>
              <li>
                <Link to="/dashboard/addClasses">
                  <AiFillHome></AiFillHome>Add Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myClasses">
                  <FaUsers></FaUsers> My Classes
                </Link>
              </li>
            </>
          ) : (
            <>
           
           <li>
                <Link to="/dashboard/selectedClasses">
                  <AiFillHome></AiFillHome>Selected Classes
                </Link>
              </li>

              <li>
                <Link to="/dashboard/paymentHistory">
                  <BsWalletFill></BsWalletFill> Payment History
                </Link>
              </li>
          
            </>
          )} */}

          <div className="divider"></div>

          <li>
            <Link to="/">
              <FaHome></FaHome>Home
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
  );
};

export default Dashboard;
