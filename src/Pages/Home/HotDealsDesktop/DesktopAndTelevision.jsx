import React, { useState } from "react";
import { useRef } from "react";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import Slider from "react-slick";

const DesktopAndTelevision = () => {
  const sliderRef = useRef(null);

  const hotDeals = [
    {
      title: "Natural Popularised",
      icon: AiFillStar,
      price: "$210.00",
      img: "http://javenist.mallthemes.com/wp-content/uploads/2018/02/6.jpg",
    },
    {
      title: "Natural Simply",
      icon: AiFillStar,
      price: "$105.00",
      img: "http://javenist.mallthemes.com/wp-content/uploads/2018/02/9-9.jpg",
    },
    {
      title: "Natural Simply",
      icon: AiFillStar,
      price: "$74.00",
      img: "http://javenist.mallthemes.com/wp-content/uploads/2018/02/12-12.jpg",
    },
    {
      title: "Natural Simply",
      icon: AiFillStar,
      price: "$74.00",
      img: "http://javenist.mallthemes.com/wp-content/uploads/2018/02/12-12.jpg",
    },
    {
      title: "Natural Simply",
      icon: AiFillStar,
      price: "$74.00",
      img: "http://javenist.mallthemes.com/wp-content/uploads/2018/02/12-12.jpg",
    },
    {
      title: "Natural Simply",
      icon: AiFillStar,
      price: "$74.00",
      img: "http://javenist.mallthemes.com/wp-content/uploads/2018/02/12-12.jpg",
    },
    {
      title: "Natural Simply",
      icon: AiFillStar,
      price: "$74.00",
      img: "http://javenist.mallthemes.com/wp-content/uploads/2018/02/12-12.jpg",
    },
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <div className="md:flex items-center justify-between md:border-b-2 border-b-[#eb3e32] mt-8 lg:mt-0">
          <div className="border-b-2 border-b-[#eb3e32] mb-6 md:mb-0">
            <h2 className="bg-[#eb3e32] text-white rounded-t px-4 py-3 -mb-[1px] inline-block">
              Desktop & Television
            </h2>
          </div>
          <div className="flex justify-between ml-auto">
            <div className="flex gap-5 mr-10">
              <a
                href="#"
                className="hover:text-[#eb3e32] translate-all duration-200"
              >
                Laptop
              </a>
              <a
                href="#"
                className="hover:text-[#eb3e32] translate-all duration-200"
              >
                Notebook
              </a>
              <a
                href="#"
                className="hover:text-[#eb3e32] translate-all duration-200"
              >
                TV
              </a>
              <a
                href="#"
                className="hover:text-[#eb3e32] translate-all duration-200"
              >
                Speaker
              </a>
            </div>
            <div className="flex items-center">
              <AiOutlineLeft
                onClick={() => sliderRef.current.slickPrev()}
                className="text-lg text-slate-500 hover:text-[#eb3e32] transition-all hover:cursor-pointer duration-300"
              />
              <RxDividerVertical className="text-slate-300" />
              <AiOutlineRight
                onClick={() => sliderRef.current.slickNext()}
                className="text-lg text-slate-500 hover:text-[#eb3e32] transition-all hover:cursor-pointer duration-200"
              />
            </div>
          </div>
        </div>

        <>
          <Slider ref={sliderRef} {...settings}>
            {hotDeals.map((hotdeal, i) => (
              <div key={i}>
                <div className="border-r my-10">
                  <img src={hotdeal.img} alt="#" />
                  <div className="flex flex-col items-center gap-3">
                    <h3> {hotdeal.title} </h3>
                    <span className="flex  items-center text-yellow-500">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </span>
                    <span className="text-[#ef665d] font-semibold">
                      {hotdeal.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </>
      </div>
    </>
  );
};

export default DesktopAndTelevision;
