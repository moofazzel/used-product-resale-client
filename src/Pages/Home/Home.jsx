import React from "react";
import Banner from "../Home/HeroSection/Banner";
import FeatruedCategories from "./FeatruedCategories";
import FeturedProduct from "./FeturedProduct";
import HotDealsDesktop from "./HotDealsDesktop/HotDealsDesktop";
import NewArrivals from "./NewArrivals";
import Services from "./Services";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <HotDealsDesktop />
      <FeturedProduct />
      <FeatruedCategories />
      <NewArrivals />
      <Services />
    </div>
  );
};

export default Home;
