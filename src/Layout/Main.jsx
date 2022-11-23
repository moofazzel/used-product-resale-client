import React from "react";

import Navbar from "../Shared/Navbar/Navbar.jsx";
import Footer from "../Shared/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
