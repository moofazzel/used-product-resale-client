import React from "react";
import Lottie from "lottie-react";
import expressDelivery from "../../assets/lotties/expressDelivery.json";
import cashBack from "../../assets/lotties/cashBack.json";
import support from "../../assets/lotties/support.json";

const Services = () => {
  return (
    <div className="bg-[#f3f3f3] py-10 my-10 mx-5">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 ">
            <div className="text-center">
              <div className="w-20 mx-auto">
                <Lottie animationData={expressDelivery} loop={true} />
              </div>
              <h3 className="text-xl font-semibold">FREE SHIPPING & RETURNS</h3>
              <h4 className="text-md font-semibold">All Orders Over $99</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                vestibulum magna, et dapibus.
              </p>
            </div>
        
            <div className="text-center ">
              <div className="w-20 mx-auto">
                <Lottie animationData={cashBack} loop={true} />
              </div>
              <h3 className="text-xl font-semibold">MONEY BACK GUARANTEE</h3>
              <h4 className="text-md font-semibold">Safe & Fast</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                vestibulum magna, et dapibus.
              </p>
            </div>
        
            <div className="text-center">
              <div className="w-20 mx-auto">
                <Lottie animationData={support} loop={true} />
              </div>
              <h3 className="text-xl font-semibold">ONLINE SUPPORT</h3>
              <h4 className="text-md font-semibold">Need Assistence?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                vestibulum magna, et dapibus.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Services;
