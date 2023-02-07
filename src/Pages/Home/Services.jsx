import React from "react";
import Lottie from "lottie-react";
import expressDelivery from "../../assets/lotties/expressDelivery.json";
import cashBack from "../../assets/lotties/cashBack.json";
import support from "../../assets/lotties/support.json";

const Services = () => {
  const services = [
    {
      title: "Free Shipping",
      subTitle: "Free shipping on all order",
      lottie: expressDelivery,
    },
    {
      title: "Money Return",
      subTitle: "Back guarantee under 7 days",
      lottie: cashBack,
    },
    {
      title: "Online Support",
      subTitle: "Support online 24 hours a day",
      lottie: support,
    },
    {
      title: "Member Discount",
      subTitle: "On every order over $420.00",
      lottie: support,
    },
  ];
  return (
    <div className="bg-white px-10 py-7 rounded-[2px]">
      <div className="grid justify-center grid-cols-1 lg:grid-cols-4">
        {services.map((serv, i) => {
          console.log(serv);
          return (
            <div
              key={i}
              className=" flex justify-center items-center border-r-2 last:border-none"
            >
              <div className="w-11">
                <Lottie animationData={serv.lottie} loop={true} />
              </div>
              <div className="mx-3d">
                <h3 className="text-xs font-semibold capitalize text-[#363f4d]">
                  {serv.title}
                </h3>
                <h4 className="text-[0.6rem] text-[#7a7a7a]">
                  {serv.subTitle}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
