import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import "./DesktopAndTelevision";

const HotDeals = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
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
      <div className="relative lg:w-[300px] border">
        <div className="bg-[#eb3e32] flex items-center justify-between px-4 py-3 -z-10">
          <h3 className=" text-white font-semibold rounded-sm">Hot deals</h3>
          <div className="flex items-center">
            <AiOutlineLeft
              onClick={prevHandler}
              className=" text-slate-300 hover:text-white transition-all hover:cursor-pointer duration-300"
            />

            <RxDividerVertical className="text-white" />

            <AiOutlineRight
              onClick={nextHandler}
              className="text-slate-300 hover:text-white transition-all hover:cursor-pointer duration-300"
            />
          </div>
        </div>

        <Swiper
          breakpoints={{
            // when window width is >= 425px
            600: {
              width: 425,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => setSwiperRef(swiper)}
        >
          {hotDeals.map((hotdeal, i) => (
            <SwiperSlide key={i}>
              <div className="lg:w-[300px] md:border-2 lg:border-0 mb-">
                <img width="300" height="300" src={hotdeal.img} alt="#" />
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HotDeals;
