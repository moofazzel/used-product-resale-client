import React, { useState } from "react";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const DesktopAndTelevision = () => {
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
  return (
    <>
      <div className="relative lg:w-full border">
        <div className="flex items-center justify-between border-b-2 border-b-[#eb3e32]">
          <h3 className="bg-[#eb3e32] text-white px-4 py-3 -mb-[1px]">
            Desktop & Television
          </h3>
          <div className="flex ml-auto">
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
                onClick={prevHandler}
                className="text-lg text-slate-500 hover:text-[#eb3e32] transition-all hover:cursor-pointer duration-300"
              />
              <RxDividerVertical className="text-slate-300" />
              <AiOutlineRight
                onClick={nextHandler}
                className="text-lg text-slate-500 hover:text-[#eb3e32] transition-all hover:cursor-pointer duration-200"
              />
            </div>
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
            1500: {
              width: 1500,
              slidesPerView: 4,
            },
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          cssWidthAndHeight={true}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => setSwiperRef(swiper)}
        >
          {hotDeals.map((hotdeal, i) => (
            <SwiperSlide className=" md:border-2 lg:border-0 mb-" key={i}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DesktopAndTelevision;
