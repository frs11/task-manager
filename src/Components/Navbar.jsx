/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import Swal from "sweetalert2";
import useTheme from "../Hooks/useTheme";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [avatarContent, setAvatarContent] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);
  const { toggleTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // console.log(user);

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    userSignOut()
      .then((res) => {
        if (res.data) {
          Swal.fire({
            title: "Success!!!",
            text: "Logout Successfully",
            icon: "success",
            confirmButtonText: "Exit",
          });
          navigate("/login");
        }
      })
      .catch((err) => console.log(err.message));
  };
  const handleTheme = () => {
    toggleTheme();
    setDarkMode(!darkMode);
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "dark:text-white text-black px-3 py-1 border-y-4 border-purple-700 dark:border-purple-300 rounded font-medium"
            : "flex mx-2 py-1 font-semibold hover:text-purple-700 dark:hover:text-purple-400"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "dark:text-white text-black px-3 py-1 border-y-4 border-purple-700 dark:border-purple-300 rounded font-medium"
            : "flex mx-2 py-1 font-semibold hover:text-purple-700 dark:hover:text-purple-400"
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  const dropdownLinks = (
    <>
      <span
        className={
          "block my-1 w-full px-2 rounded-md bg-purple-100 dark:bg-purple-300 text-white py-1"
        }
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-2 text-purple-800  font-bold underline"
              : "px-2 font-medium rounded-md text-purple-700 "
          }
        >
          Home
        </NavLink>
      </span>
      <span
        className={
          "block my-1 w-full px-2 rounded-md bg-purple-100 dark:bg-purple-300 text-white py-1"
        }
      >
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "px-2 text-purple-800  font-bold underline"
              : "px-2 font-medium rounded-md text-purple-700 "
          }
        >
          Dashboard
        </NavLink>
      </span>
    </>
  );

  return (
    <div className="navbar sticky z-50 top-0 bg-opacity-90 bg-white dark:opacity-80 shadow-lg w-full dark:bg-slate-900 dark:text-white lg:px-12 mx-auto md:py-3">
      <div className="navbar-start">
        <div className="dropdown" onClick={() => setOpen(!open)}>
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
            className={` dropdown-content mt-3 p-2 z-[1] ${
              open ? "" : "hidden"
            } shadow bg-base-100 rounded-lg w-52`}
          >
            {dropdownLinks}
          </ul>
        </div>

        <Link to="/" className="text-xl">
          <span className="flex items-center">
            <img
              src="https://i.ibb.co/QdqtDs7/management.png"
              className="w-10 md:w-10 mr-1"
            />
            <span className="font-medium font-logoFont dark:text-white text-sm md:text-xl lg:text-2xl">
              Task
              <span className="text-purple-600 dark:text-purple-300">book</span>
            </span>
          </span>
        </Link>
      </div>

      {/* Center Content */}
      <div className="navbar-center hidden lg:flex">{links}</div>

      {/* Navbar End */}
      <div className="navbar-end">
        <div
          onClick={handleTheme}
          className="mr-2 md:mr-6 cursor-pointer"
          title={darkMode ? "Dark Mode" : "Light Mode"}
        >
          {darkMode ? (
            <BsSun className="text-xl"></BsSun>
          ) : (
            <BsMoon className="text-xl"></BsMoon>
          )}
        </div>
        {user ? (
          <div className="flex items-center space-x-3">
            <div
              className="dropdown dropdown-bottom dropdown-end"
              onClick={() => setAvatarContent(!avatarContent)}
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    className="w-7 lg:w-10 h-7 lg:h-10 rounded-full mr-3"
                    src={user?.photoURL}
                    referrerPolicy="no-referrer"
                    alt="User Image"
                  />
                </div>
              </label>
              <div
                tabIndex={0}
                className={`menu menu-sm dropdown-content dark:bg-slate-700 mt-3 z-[1] p-2 ${
                  avatarContent ? "" : "hidden"
                } shadow bg-base-100 rounded-box w-max`}
              >
                <div>
                  <p className="text-lg font-medium font-logoFont text-center mt-1 mb-5">
                    {user.displayName}
                  </p>
                  <Link
                    to="/dashboard"
                    className="px-4 py-1 font-semibold bg-slate-200 dark:bg-slate-800 my-1 hover:bg-slate-400 dark:hover:bg-slate-500 rounded-lg"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-1 py-px mt-10 block text-sm lg:text-base lg:px-5 lg:py-2 border duration-150 ease-in-out border-red-700 hover:border-red-300 bg-red-700 text-white font-medium rounded-md"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            {/* <img
              className="w-7 lg:w-10 h-7 lg:h-10 rounded-full mr-3"
              src="https://i.ibb.co/By0YFNn/default-profile-picture-grey-male-icon.png"
              alt=""
            /> */}
            <button
              onClick={handleLogin}
              className="px-2 py-0.5 duration-150 ease-in-out text-sm lg:text-base lg:px-5 lg:py-2 border-2 border-purple-500 hover:bg-purple-500 hover:text-white rounded-md"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
