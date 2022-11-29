import React, { useEffect, useState } from "react";

import SingleFeaturedProduct from "./SingleFeaturedProduct";

const FeturedProduct = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("https://used-procuct.vercel.app/featuredProduct")
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data));
  }, []);

  return (
    <>
      {featuredProducts.length > 0 && (
        <div className="container mx-auto px-6 py-10  lg:px-20">
          {/* <!-- title --> */}
          <div className="p-5 text-center">
            <h1 className="font-bold text-4xl mb-4">Featured Products</h1>
            <h3 className="font-semibold text-xl mb-4">
              Get Your Desired Product from Featured Category!
            </h3>
            <div className="divider"></div>
          </div>

          {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
          <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5">
            {/* <Product /> */}

            {featuredProducts.map((featuredProduct) => (
              <SingleFeaturedProduct
                key={featuredProduct._id}
                featuredProduct={featuredProduct}
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default FeturedProduct;
