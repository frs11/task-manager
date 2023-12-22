import { FaHome, FaList, FaPlus, FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Sidebar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="h-[85vh] md:h-screen sticky top-0 py-5 md:py-12 px-1 md:px-5 w-3/12 md:w-3/12 lg:w-2/12 flex flex-col text-black dark:text-white dark:bg-slate-900 bg-slate-300">
      <div className="mx-auto space-y-2 mb-5 text-center">
        <img className="rounded-full" src={user.photoURL} alt="user profile" />
        <p>{user.displayName}</p>
      </div>
      <div className="flex flex-col space-y-2 md:space-y-4">
        <NavLink
          to="taskList"
          className={({ isActive }) =>
            isActive
              ? "flex text-white text-xs md:text-sm lg:text-base items-center px-2 py-1 rounded bg-slate-600"
              : "flex text-black dark:text-white text-xs md:text-sm lg:text-base items-center px-2 py-1 rounded"
          }
        >
          <span className="mr-2">
            <FaList></FaList>
          </span>{" "}
          To-Do List
        </NavLink>

        <NavLink
          to="addtodo"
          className={({ isActive }) =>
            isActive
              ? "flex text-white text-xs md:text-sm lg:text-base items-center px-2 py-1 rounded bg-slate-600"
              : "flex text-black dark:text-white text-xs md:text-sm lg:text-base items-center px-2 py-1 rounded"
          }
        >
          <span className="mr-2">
            <FaPlus></FaPlus>
          </span>{" "}
          Add To-Do
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive
              ? "flex text-white text-xs md:text-sm lg:text-base items-center px-2 py-1 rounded bg-slate-600"
              : "flex text-black dark:text-white text-xs md:text-sm lg:text-base items-center px-2 py-1 rounded"
          }
        >
          <span className="mr-2">
            <FaRegUser></FaRegUser>
          </span>{" "}
          Profile
        </NavLink>
      </div>

      {/* Home Section */}
      <div className="divider"></div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "flex text-white text-xs md:text-sm lg:text-base items-center px-2 py-1 rounded bg-slate-600"
            : "flex text-black dark:text-white text-xs md:text-sm lg:text-base items-center px-2 py-1 rounded"
        }
      >
        <FaHome className="mr-2"></FaHome> Home
      </NavLink>
    </div>
  );
};

export default Sidebar;
