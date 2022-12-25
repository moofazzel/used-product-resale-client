import React from "react";
import Banner from "../Home/HeroSection/Banner";
import FeatruedCategories from "./FeatruedCategories";
import FeturedProduct from "./FeturedProduct";
import NewArrivals from "./NewArrivals";
import Services from "./Services";

const Home = () => {
  return (
    <div className="bg-[#f3f3f3] pt-7 px-4 lg:px-0">
      <Banner />
      <FeturedProduct />
      <FeatruedCategories />
      <NewArrivals />
      <Services />
    </div>
  );
};

export default Home;
