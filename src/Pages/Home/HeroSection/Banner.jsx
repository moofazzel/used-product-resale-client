import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

import b_1_1 from "../../../assets/images/b_1_1.jpg";
import b_2_1 from "../../../assets/images/b_2_1.jpg";
import Services from "../Services";

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

  const bannerData = [
    {
      titleBrand: "Samsung Gear VR",
      title: "Sale 70% Off",
      subtitle: "Exclusive Offer -20% Off This Week",
      price: "56.99",
      titleColor: "text-[#000000]",
      subTitleColor: "text-[#eb3e32]",
      priceColor: "text-[#000000]",
      image: b_1_1,
    },
    {
      titleBrand: "Samsung",
      title: "Galaxy Note 3",
      subtitle: "Exclusive Offer -20% Off This Week",
      price: "566.99",
      image: b_2_1,
      titleColor: "text-[#ffffff]",
      subTitleColor: "text-[#ffffff]",
      priceColor: "text-[#ffea00]",
    },
  ];

  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const subTitleMotion = {
    hidden: { opacity: 1, scale: 0, x: -800 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: 2,
      },
    },
  };

  return (
    <section className="bg-[#f3f3f3] py-10 px-4 lg:px-0">
      <div className="container mx-auto lg:px-16">
        <div className="lg:flex gap-8 items-center">
          <div className="lg:w-[337px] self-start">
            <div className="w-full">
              <div
                onClick={() => setOpen(!open)}
                className=" flex gap-3 items-center bg-[#eb3e32] rounded-t text-white  px-4 py-2 cursor-pointer"
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

          <div className="lg:w-[calc(100%-280px)]">
            <Slider {...settings}>
              {bannerData.map((b, i) => (
                <div key={i} className="relative">
                  <img src={b.image} alt="" />
                  <div className="absolute top-10 md:top-[140px] left-16 ">
                    <div className="">
                      <motion.h4
                        variants={subTitleMotion}
                        initial="hidden"
                        animate="visible"
                        className={`text-xs ${b.subTitleColor} mb-3`}
                      >
                        {b.subtitle}
                      </motion.h4>
                      <h1
                        className={`text-2xl md:text-4xl font-bold mb-4 ${b.titleColor}`}
                      >
                        {b.titleBrand} <br /> {b.title}
                      </h1>
                      <p className={`text-[11px] mb-5 ${b.titleColor}`}>
                        Starting at
                        <span
                          className={`text-lg md:text-2xl text-red-600 font-semibold ml-1 ${b.priceColor}`}
                        >
                          ${b.price}
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
              ))}
            </Slider>
          </div>
        </div>
        <Services />
      </div>
    </section>
  );
};

export default Banner;
