import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import HotDeals from "./HotDeals";
import DesktopAndTelevision from "./DesktopAndTelevision";

const HotDealsDesktop = () => {
  return (
    <section className="bg-white lg:py-14">
      <div className="container mx-auto lg:px-14 lg:flex gap-8">
        {/* Hot deals section */}
        <HotDeals />

        {/* Desktop and television */}
        <DesktopAndTelevision />
      </div>
    </section>
  );
};

export default HotDealsDesktop;
