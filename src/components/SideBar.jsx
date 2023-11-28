import { useState } from "react";
import Profile from "./Profile";
import ButtonNavigasi from "../layout/ButtonNavigasi";
import { FaAlignLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const SideBar = ({ children }) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleListVisibility}
              >
                <FaAlignLeft />
              </button>
              <span className="flex ms-2 md:me-24">
                <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/main-logo-small.png?updatedAt=1697183029244" className="h-8 me-3" alt="Greenworldaware Logo" />
              </span>
            </div>

            {/* profile */}
            <Profile />
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isListVisible ? "translate-x-0" : "-translate-x-full"} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-6 pb-4 mt-8 overflow-y-auto bg-white dark:bg-gray-800">
          <Link to="/">
            <ButtonNavigasi property="active" icon="dashboard" text="Dashboard" />
          </Link>
          <Link to="/user">
            <ButtonNavigasi icon="user" text="User" />
          </Link>
          <Link to="/video">
            <ButtonNavigasi icon="video" text="Video" />
          </Link>
          <Link to="/news">
            <ButtonNavigasi icon="news" text="News" />
          </Link>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">{children}</div>
      </div>
    </>
  );
};

export default SideBar;
