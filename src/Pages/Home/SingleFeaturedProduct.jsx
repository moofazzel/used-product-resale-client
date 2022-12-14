import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import userAvater from "../../assets/icon/userAvater.png";

const SingleFeaturedProduct = ({ featuredProduct }) => {
  const {
    category,
    brand,
    booked,
    usedDuration,
    buyingPrice,
    resellingPrice,
    postedDate,
    modal,
    location,
    img,
    description,
    userName,
  } = featuredProduct;
  const { user } = useContext(AuthContext);
  return (
    <>
      <Link to={`/products/${category}`}>
        <div className="w-72 bg-white shadow-md rounded-sm duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={img}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-sm"
          />
          <div className="px-4 py-3 w-72">
            <div className="flex justify-between">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {brand}
              </span>
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {postedDate}
              </span>
            </div>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {modal}
            </p>
            <div>
              <p>Location: {location}</p>
              <p>Uses Duration: {usedDuration} </p>
            </div>
            <div className="relative flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL || userAvater}
                alt=""
              />
              <div className="flex items-center gap-1">
                {userName}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="green"
                  className="w-5 h-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>

              {/* <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
            </div>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                ${resellingPrice}
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  $ {buyingPrice}{" "}
                </p>
              </del>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleFeaturedProduct;
