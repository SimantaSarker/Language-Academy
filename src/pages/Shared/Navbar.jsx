import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext,} from "react";
import useVerify from "../../hooks/useVerify";

const Navbar = () => {
  const { LogOut, user,} = useContext(AuthContext);


const [isVerify]=useVerify();
  

 
 



  const handleLogOut = () => {
    LogOut()
      .then(() => {
      })
      .catch((error) => {
        console.log(error.message);

      });
  };
 



  return (
    <div className="navbar bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 z-10 sticky top-0 rounded home">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            {isVerify === "admin" ? (
              <li>
                <Link to="/dashboard/manageUsers">Dashboard</Link>
              </li>
            ) : (
              ""
            )}

            {isVerify === "instructors" ? (
              <li>
                <Link to="/dashboard/myClasses">Dashboard</Link>
              </li>
            ) : (
              ""
            )}

            {isVerify === "student"? (
              <li>
                <Link to="/dashboard/selectedClasses">Dashboard</Link>
              </li>
            ) : (
              ""
            )}

          </ul>
        </div>
        <div className=" flex items-center justify-center">
          <label tabIndex={0} className="btn-circle avatar">
            <div className="w-24 rounded">
              <img
                src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                className="object-cover"
              />
            </div>
          </label>
          <a className="btn btn-ghost normal-case text-2xl"> Learn Language</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          {isVerify === "admin" ? (
            <li>
              <Link to="/dashboard/manageUsers">Dashboard</Link>
            </li>
          ) : (
            ""
          )}

          {isVerify === "instructors" ? (
            <li>
              <Link to="/dashboard/myClasses">Dashboard</Link>
            </li>
          ) : (
            ""
          )}

          {isVerify === "student"? (
            <li>
              <Link to="/dashboard/selectedClasses">Dashboard</Link>
            </li>
          ) : (
            ""
          )}
          {/* {isVerify === "admin" ? (
            <li>
              <Link to="/dashboard/manageUsers">Dashboard</Link>
            </li>
          ) : isVerify === "instructors" ? (
            <li>
              <Link to="/dashboard/myClasses">Dashboard</Link>
            </li>
          ) : isVerify === "student" ? (
            <li>
              <Link to="/dashboard/selectedClasses">Dashboard</Link>
            </li>
          ) : (
            ""
          )} */}
        </ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <label tabIndex={0} className=" btn-circle avatar">
            <div className="w-10 rounded-full" title={user?.displayName}>
              <img src={user?.photoURL} className="object-cover" />
            </div>
          </label>
          <div>
            <button className="btn btn-info" onClick={handleLogOut}>
              LogOut
            </button>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-secondary">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
