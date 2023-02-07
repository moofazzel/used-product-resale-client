import React, { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const BestSeller = () => {
  const sliderRef = useRef(null);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
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
      <div className="">
        <div className="bg-[#eb3e32] rounded-t flex items-center justify-between px-4 py-3 -z-10">
          <h3 className=" text-white font-semibold rounded-sm">Bestseller</h3>
          <div className="flex items-center">
            <AiOutlineRight
              title="Show more"
              className="text-slate-100 hover:text-white transition-all hover:cursor-pointer duration-300"
            />
          </div>
        </div>

        {/* items */}

        <div className="flex items-center justify-between">
          <div className="border-r-2 flex-1 mt-4">
            <div className="flex items-center">
              <img
                width="200"
                height="200"
                src="http://javenist.mallthemes.com/wp-content/uploads/2018/02/6.jpg"
                alt="#"
              />
              <div className="">
                <h3>Natural Popularised</h3>
                <span className="flex  items-center text-yellow-500">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </span>
                <span className="text-[#ef665d] font-semibold">$ 74.00</span>
              </div>
            </div>
            <hr className="w-[96%] mx-auto" />
            <div className="flex items-center">
              <img
                width="200"
                height="200"
                src="http://javenist.mallthemes.com/wp-content/uploads/2018/02/6.jpg"
                alt="#"
              />
              <div className="">
                <h3>Natural Popularised</h3>
                <span className="flex  items-center text-yellow-500">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </span>
                <span className="text-[#ef665d] font-semibold">$ 74.00</span>
              </div>
            </div>

            {/* <hr className="lg:block last:hidden bg-slate-100 h-[3px] mx-1" /> */}
          </div>
          <div className="flex-1 mt-4">
            <div className="flex items-center">
              <img
                width="200"
                height="200"
                src="http://javenist.mallthemes.com/wp-content/uploads/2018/02/6.jpg"
                alt="#"
              />
              <div className="">
                <h3>Natural Popularised</h3>
                <span className="flex  items-center text-yellow-500">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </span>
                <span className="text-[#ef665d] font-semibold">$ 74.00</span>
              </div>
            </div>
            <hr className="w-[96%] mx-auto" />
            <div className="flex items-center">
              <img
                width="200"
                height="200"
                src="http://javenist.mallthemes.com/wp-content/uploads/2018/02/6.jpg"
                alt="#"
              />
              <div className="">
                <h3>Natural Popularised</h3>
                <span className="flex  items-center text-yellow-500">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </span>
                <span className="text-[#ef665d] font-semibold">$ 74.00</span>
              </div>
            </div>

            {/* <hr className="lg:block last:hidden bg-slate-100 h-[3px] mx-1" /> */}
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}></Slider>
      </div>
    </>
  );
};

export default BestSeller;
