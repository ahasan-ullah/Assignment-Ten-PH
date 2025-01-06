import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Import tooltip styles

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const links = (
    <>
      <NavLink className="p-2 border rounded-lg" to={"/"}>
        Home
      </NavLink>
      <NavLink className="p-2 border rounded-lg" to={"/all"}>
        All Equipment
      </NavLink>
      {user?.email && (
        <>
          <NavLink className="p-2 border rounded-lg" to={"/add"}>
            Add Equipment
          </NavLink>
          <NavLink
            className="p-2 border rounded-lg"
            to={`/my-product/${user?.email}`}
          >
            My Equipment List
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-[#1A1A1A] text-white border-b">
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
            className="menu menu-sm dropdown-content bg-[#1A1A1A] rounded-box z-[1] mt-3 w-48 p-2 shadow space-y-3"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-2xl">Sports Hub</a>
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
              className="btn btn-sm md:btn btn-error border-none"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <NavLink
              to="/auth/login"
              className="btn btn-sm md:btn btn-error border-none"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className="btn btn-sm md:btn btn-error border-none"
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
