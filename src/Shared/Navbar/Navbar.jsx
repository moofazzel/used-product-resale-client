import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import cart from "../../assets/lotties/cart.json";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.error(error);
      });
  };

  // Loading all categories
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li tabIndex={0}>
        <Link>
          Categories
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="w-52 p-2 bg-white shadow-md z-20">
          {categories.map((category, i) => (
            
            <li key={i}>
              <Link to={`/products/${category.category_id}`} >{category.name}</Link>
            </li>

          ))}
        </ul>
      </li>
      <li>
        <Link>Blog</Link>
      </li>

      {/* {user?.uid ? (
        <>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <span className="text-secondary">{user?.displayName}</span>
          </li>
          <li>
            <button onClick={handleLogOut}>
              <Link>Sign Out</Link>
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )} */}
    </>
  );

  return (
    <header className="container mx-auto px-20">
      <div className="navbar bg-base-100">
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
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="navbar-end">
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>

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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <div className="flex items-center gap-2">
            {user?.uid ? (
              <>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className=" m-1">
                    <div className="avatar online">
                      <div className="w-14 rounded-full">
                        <img src={user?.photoURL} alt="" />
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link>Item 1</Link>
                    </li>
                    <li>
                      <Link onClick={handleLogOut}>Log Out</Link>
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
      <div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
      {/* TODO: need to add sticky header */}
      {/* sticky Header */}
      <div></div>
    </header>
  );
};

export default Navbar;
