import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import HotDeals from "./HotDeals";
import DesktopAndTelevision from "./DesktopAndTelevision";
import BestSeller from "../BestSeller";

const HotDealsDesktop = () => {
  return (
    <section className="bg-white lg:py-14">
      <div className="container mx-auto lg:px-14 lg:flex px-4 gap-8">
        {/* Hot deals section */}
        <div>
          <HotDeals />
        </div>

        <div className="relative lg:w-[calc(100%-285px)]">
          {/* Desktop and television */}
          <DesktopAndTelevision />
          <BestSeller />
        </div>
      </div>
    </section>
  );
};

export default HotDealsDesktop;
