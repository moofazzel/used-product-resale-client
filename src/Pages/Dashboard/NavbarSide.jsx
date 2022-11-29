import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const NavbarSide = () => {
  const [categories, setCategories] = useState([]);

  const { user, logOut } = useContext(AuthContext);

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
      <ul
        tabIndex={0}
        className="lg:hidden menu menu-compact dropdown-content mt-3 p-2"
      >
        {menuItems}
      </ul>
    </>
  );
};

export default NavbarSide;
