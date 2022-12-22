import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        // console.error(error);
      });
  };

  // Load categories
  useEffect(() => {
    fetch("https://used-procuct.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const menuItems = (
    <>
      <>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li className="dropdown dropdown-hover">
          <label tabIndex={0} className="m-1">
            Categories
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52"
          >
            {categories.map((c) => (
              <li key={c._id}>
                <Link to={`/products/${c.category_name}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </>
      {user?.uid && (
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      
      

      <div className="shadow-md">
        <div className="container mx-auto pr-2 lg:px-20">
          <div className="navbar flex justify-between">
            <div className="navbar-start">
              <div className="dropdown">
                <label
                  htmlFor="dashboard-drawer"
                  tabIndex={3}
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
              </div>
              <Link
                to={"/"}
                className="font-bold text-xl md:text-3xl normal-case"
              >
                Vendor
              </Link>
            </div>
            <div>
              <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
              </div>
              <div className="flex items-center gap-2 ml-2">
                {user?.uid ? (
                  <>
                    <div className="dropdown dropdown-hover dropdown-end rounded-md ">
                      <label tabIndex={0} className=" m-1">
                        <div className="avatar online">
                          <div className="w-14 rounded-full">
                            <img src={user?.photoURL} alt="" />
                          </div>
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 bg-fuchsia-50 rounded-md shadow-lg border w-auto"
                      >
                        <li className="">
                          <Link className="w-full hover:bg-fuchsia-50 cursor-text">
                            {user?.displayName}{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="w-full hover:bg-fuchsia-50 cursor-text">
                            {user?.email}{" "}
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            onClick={handleLogOut}
                            className="w-full bg-red-100 hover:bg-red-400"
                          >
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <Link to={"/login"} className="leading-tight">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
