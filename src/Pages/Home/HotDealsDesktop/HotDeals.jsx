import React, { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

import "./DesktopAndTelevision";

const HotDeals = () => {
  const sliderRef = useRef(null);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      // {
      //   breakpoint: 1300,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     infinite: true,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          vertical: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          vertical: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
  ];

  return (
    <>
      <div className="relative lg:w-[250px] border rounded-b">
        <div className="bg-[#eb3e32] rounded-t flex items-center justify-between px-4 py-3 -z-10">
          <h3 className=" text-white font-semibold rounded-sm">Hot deals</h3>
          <div className="flex items-center">
            <AiOutlineLeft
              onClick={() => sliderRef.current.slickPrev()}
              className=" text-slate-300 hover:text-white transition-all hover:cursor-pointer duration-300"
            />
            <RxDividerVertical className="text-white" />
            <AiOutlineRight
              onClick={() => sliderRef.current.slickNext()}
              className="text-slate-300 hover:text-white transition-all hover:cursor-pointer duration-300"
            />
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {hotDeals.map((hotdeal, i) => (
            <div className="border-b-2 pb-4 mt-[1px] " key={i}>
              <div className="border-r lg:border-r-0 my-10 mb-2">
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
              {/* <hr className="lg:block last:hidden bg-slate-100 h-[3px] mx-1" /> */}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HotDeals;
