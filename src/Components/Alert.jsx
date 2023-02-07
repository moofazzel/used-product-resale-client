import React from "react";
import Marquee from "react-fast-marquee";

const Alert = () => {
  return (
    <>
      <Marquee speed={100} className="text-red-600 font-semibold">
        "SORRY 😔😔" This website in now under development some Features and
        Visual may not perfect. "SORRY😔😔"
      </Marquee>
      ;
    </>
  );
};

export default Alert;
