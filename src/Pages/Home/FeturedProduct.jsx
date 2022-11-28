import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Product from "./Product";
import SingleFeaturedProduct from "./SingleFeaturedProduct";

const FeturedProduct = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/featuredProduct")
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data));
  }, []);

  return (
    <>
      {featuredProducts.length > 0 && (
        <div className="container mx-auto px-6 lg:px-20">
          {/* <!-- title --> */}
          <div className="p-5">
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
