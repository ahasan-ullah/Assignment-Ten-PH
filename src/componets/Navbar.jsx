import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Import tooltip styles

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const links = (
    <>
      <NavLink className="p-2 bg-first rounded-lg" to={"/"}>
        Home
      </NavLink>
      <NavLink className="p-2 bg-first rounded-lg" to={"/all"}>
        All Equipment
      </NavLink>
      {user?.email && (
        <>
          <NavLink className="p-2 rounded-lg bg-first" to={"/add"}>
            Add Equipment
          </NavLink>
          <NavLink
            className="p-2 rounded-lg bg-first"
            to={`/my-product/${user?.email}`}
          >
            My Equipment List
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed top-0 z-10 bg-background shadow-sm max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-300 rounded-box z-[1] mt-3 w-48 p-2 shadow space-y-3"
          >
            {links}
          </ul>
        </div>
        <a className="text-2xl md:text-3xl font-bold text-third">Sports Hub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex space-x-3 items-center justify-center">
            <div id="user-avatar-tooltip" className="cursor-pointer">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={user.photoURL}
                alt={user.displayName}
                data-tooltip-id="user-avatar-tooltip"
                data-tooltip-content={user.displayName || "User"}
              />
            </div>
            <Tooltip id="user-avatar-tooltip" place="bottom" />
            <button
              onClick={logout}
              className="p-2 rounded-lg bg-second"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <NavLink
              to="/auth/login"
              className="p-2 rounded-lg bg-second"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className="p-2 border-b-2 rounded-lg bg-second"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
