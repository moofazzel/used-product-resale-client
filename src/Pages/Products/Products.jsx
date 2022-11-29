import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../Components/BookingModal";
import Product from "../Home/Product";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const [productData, setProductData] = useState(null);
  const [successToast, setSuccessToast] = useState(undefined);

  const products = useLoaderData();

  if (successToast) {
    return successToast;
  }

  return (
    <div className="container mx-auto px-20 my-16">
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5">
        {products.length === 0 && (
          <div className="h-[65vh] ">
            <h2 className="w-full text-4xl font-semibold mx-5">
              No product found
            </h2>
          </div>
        )}

        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            setProductData={setProductData}
          />
        ))}
      </div>

      {productData && (
        <BookingModal
          setSuccessToast={setSuccessToast}
          productData={productData}
          setProductData={setProductData}
        />
      )}
    </div>
  );
};

export default Products;
