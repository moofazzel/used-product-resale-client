import React, { useEffect, useState } from "react";
import b_1_1 from "../../../assets/images/b_1_1.jpg";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Banner = () => {
  // Load categories
  const [categories, setCategories] = useState([]);
  //click dropdown menu
  const [open, setOpen] = useState(true);

  useEffect(() => {
    fetch("https://used-procuct.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="container mx-auto lg:px-20">
      <div className="lg:flex gap-8 justify-center items-center">
        <div className="lg:w-[20%] self-start">
          <div className=" w-full">
            <div
              onClick={() => setOpen(!open)}
              className=" flex gap-3 items-center bg-[#eb3e32] text-white  px-4 py-2 cursor-pointer"
            >
              <GiHamburgerMenu className="text-xl" /> Categories
            </div>
            <ul
              className={` ${
                open ? "lg:block" : "hidden"
              } w-full menu p-2 shadow bg-base-100 rounded-none z-10 hidden `}
            >
              {categories.map((c) => (
                <li
                  className="hover:text-[#eb3e32] border-b last:border-b-0"
                  key={c._id}
                >
                  <Link
                    className="!rounded-none "
                    to={`/products/${c.category_name}`}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li className="hover:text-[#eb3e32] border-b last:border-b-0">
                <Link className="!rounded-none ">More..</Link>
              </li>
            </ul>

            {/* mobile menu */}

            <ul
              className={` ${
                open ? "hidden transition-all h-0" : "block"
              } w-full menu p-2 shadow bg-base-100 rounded-none z-10  lg:hidden h-full transition-all`}
            >
              {categories.map((c) => (
                <li
                  className="hover:text-[#eb3e32] border-b last:border-b-0"
                  key={c._id}
                >
                  <Link
                    className="!rounded-none "
                    to={`/products/${c.category_name}`}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li className="hover:text-[#eb3e32] border-b last:border-b-0">
                <Link className="!rounded-none ">More..</Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="md:h-[30rem] pl-5 md:pl-20 lg:w-[80%] !bg-top xl:bg-[0%]"
          style={{
            background: `url(${b_1_1}) no-repeat center`,
            backgroundSize: "contain",
          }}
        >
          <div>
            <h4 className="text-xs text-[#eb3e32] pt-10 md:pt-[110px]">
              Exclusive Offer -20% Off This Week{" "}
            </h4>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Samsung Gear Vr <br /> Sale 70% Off
            </h1>
            <p className="text-[11px] mb-5">
              Starting at{" "}
              <span className="text-lg md:text-2xl text-red-600 font-semibold ml-1">
                $560.99
              </span>
            </p>
          </div>

          <div>
            <button className="text-xs bg-[#eb3e32] text-white px-6 py-2 rounded-[3px]  uppercase hover:bg-slate-700">
              Shopping now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
