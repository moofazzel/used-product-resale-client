import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { BsFillGearFill, BsFillStarFill, BsFillCartFill } from "react-icons/bs";
import { BiChevronDown, BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const { user, logOut } = useContext(AuthContext);

  const [open, setOpen] = useState(true);

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
        <li className="hover:text-[#eb3e32]">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-[#eb3e32]">
          <Link>Features</Link>
        </li>
        <li className="hover:text-[#eb3e32]">
          <Link>Shop</Link>
        </li>
        <li className="hover:text-[#eb3e32]">
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
              <li className="hover:text-[#eb3e32]" key={c._id}>
                <Link to={`/products/${c.category_name}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </>

      <li className="hover:text-[#eb3e32]">
        <Link>Contact</Link>
      </li>
      <li className="hover:text-[#eb3e32]">
        <Link>Wishlist</Link>
      </li>
    </>
  );

  return (
    <div className="px-4 lg:px-0">
      {/* Top bar */}
      <div className="container mx-auto pr-2 lg:px-16 mt-1 my-[6px] ">
        <div className="flex items-center justify-end text-xs gap-6">
          <div>
            <Link>TRACK MY ORDERS</Link>
          </div>

          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className=" flex items-center m-1 hover:underline group"
            >
              <BsFillGearFill className="  mr-1 group-hover:animate-spin" />

              {user ? (
                <span className="capitalize">{user.displayName}</span>
              ) : (
                <span>My Account</span>
              )}

              <BiChevronDown className="text-[22px]" />
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
              {user?.uid && (
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
              )}
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
        </div>
      </div>

      {/* divider */}
      <span className="mb-5 shadow-md border-b-2 block" />
      {/* Top bar End */}

      {/* Navbar middle */}
      <div className="container mx-auto pr-2 lg:px-16 mb-5">
        <div className="navbar flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between">
          <div>
            <Link
              to={"/"}
              className="text-[#eb3e32] text-xl md:text-3xl normal-case font-bold"
            >
              Laptop World
            </Link>
          </div>

          <form className="w-full lg:w-fit">
            <div class="flex w-full lg:w-fit pl-3 xl:ml-28 items-center border border-red-400 rounded-full">
              <div className="dropdown border-r-[1px] hidden md:block">
                <label className="flex items-center m-2 text-[13px] ">
                  All&#160;Categories
                  <BiChevronDown className="text-[16px] ml-3" />
                </label>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-sm w-52">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between w-full">
                <input
                  className="input placeholder:text-[13px] focus:outline-none"
                  type="search"
                  placeholder="Search product..."
                />
                {/* <BiSearch className="text-[25px] "/> */}
                <button className="btn rounded-l-none rounded-r-full border-[#eb3e32] bg-[#eb3e32]">
                  <BiSearch className="text-[22px] " />
                </button>
              </div>
            </div>
          </form>

          <div>
            <span className="text-[#eb3e32] border-2 border-[#eb3e32] p-3 rounded-full">
              <BsFillStarFill />
            </span>

            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="flex items-center m-2 text-[13px] "
              >
                <span className="relative text-[#eb3e32] border-2 border-[#eb3e32] p-3 rounded-full ml-4">
                  <BsFillCartFill />
                  <span className="absolute -top-2 -right-[10px] w-6 h-6 inline-block bg-[#eb3e32] rounded-full text-white text-center leading-6">
                    0
                  </span>
                </span>

                <span className="flex items-center text-[16px] font-semibold ml-3">
                  $0.00
                  <BiChevronDown />
                </span>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-sm  w-72 px-8 py-5"
              >
                <li> No products in the cart.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar middle End */}

      <div className="container mx-auto lg:px-20 hidden lg:flex mt-5">
        <ul className="uppercase font-semibold text-sm menu menu-horizontal text-white w-full bg-[#363f4d] rounded-t-3xl px-5 ">
          {menuItems}
        </ul>
      </div>

      {/* Mobile Menu */}
      {/* TODO: mobile menu add icoon to mobile menu */}

      <div className="container mx-auto lg:px-20 lg:hidden">
        <ul className="uppercase font-semibold text-sm menu menu-horizontal text-white w-full bg-[#363f4d] rounded-t-3xl px-5 ">
          <li className="lg:hidden w-full">
            <span>Menu</span>

            <label
              onClick={() => setOpen(!open)}
              className="btn btn-ghost lg:hidden ml-auto"
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
          </li>
          <li>
            <div className={`mt-5 ${open ? "hidden" : "block"}  bg-[#363f4d]`}>
              <ul className="uppercase font-semibold text-sm menu text-white text-center w-full px-5 ">
                {menuItems}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
