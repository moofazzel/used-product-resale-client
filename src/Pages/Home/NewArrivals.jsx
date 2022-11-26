import React from "react";
import Product from "./Product";

const NewArrivals = () => {
  return (
    <>
      <div className="container mx-auto px-6 lg:px-20">
        {/* <!-- title --> */}
        <div className="p-5">
          <h1 className="font-bold text-lg">New Arrivals</h1>
          <div className="divider"></div>
        </div>

        {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5">
          {/* <!--   ✅ ProductStarts Here 👇 --> */}
          {/* <Product /> */}
          {/* <!--   🛑 ProductEnds Here  --> */}
        </section>

        {/* <!-- 🛑 Grid Section - Ends Here --> */}
      </div>
    </>
  );
};

export default NewArrivals;
