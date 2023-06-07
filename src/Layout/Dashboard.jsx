import { Link, Outlet } from "react-router-dom";
import {
  FaCartPlus,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import { BsWalletFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiFillHome, AiOutlineMenu, AiTwotoneShopping } from "react-icons/ai";

const Dashboard = () => {
  //------------TODO load data from server to have dynamic isAdmin based on Data--------
  const isAdmin = true;

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
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

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
          <li>
            <Link>
              <GrMail></GrMail>Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
