import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import userAvater from "../../assets/icon/userAvater.png";
import useAdmin from "../../hooks/UseAdmin";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";

const Product = ({ product, setProductData }) => {
  const { user } = useContext(AuthContext);

  const { userRole } = useAdmin(product.userEmail);

  const {
    _id,
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
  } = product;

  // state for booked button change dynamicaly
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}&id=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, [user?.email, _id]);

  // access one users
  const [userType, setUserType] = useState(null);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/user/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserType(data);
        });
    }
  }, [user?.email]);

  console.log(userType?.accountType);

  return (
    <>
      <div className="w-72 bg-white shadow-md rounded-sm duration-500 hover:scale-105 hover:shadow-xl">
        <div className="h-60 w-72">
          <img
            src={img}
            alt="Product"
            className="w-full object-cover rounded-t-sm"
          />
        </div>
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
          <p className="my-1 mb-2">
            <b>Description:</b> {description}{" "}
          </p>
          <div>
            <p className="my-1">
              <b>Location:</b> {location}
            </p>
            <p className="my-1">
              <b>Uses Duration:</b> {usedDuration}{" "}
            </p>
          </div>
          <div className="relative flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src={user?.photoURL || userAvater}
              alt=""
            />
            <div className="flex items-center gap-1">
              {userName}
              {userRole === "verified" && (
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
              )}
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

            {/* fot buyer  */}

            {userType?.accountType === "buyer" && (
              <div className="ml-auto">
                {booking?.booked ? (
                  <>
                    <button disabled className="btn btn-sm ">
                      Booked
                    </button>
                  </>
                ) : (
                  <>
                    {/* <button className="btn btn-sm ">Buy Now</button> */}
                    {/* The button to open modal */}
                    <label
                      onClick={() => setProductData(product)}
                      htmlFor="my-modal"
                      className="btn"
                    >
                      Book Now
                    </label>
                    <input
                      type="checkbox"
                      id="bookModal"
                      className="modal-toggle"
                    />
                  </>
                )}
              </div>
            )}
          </div>

          {/* fot seller */}
          {userType?.accountType === "seller" && (
            <>
              <button disabled className="w-full btn btn-sm text-xs ">
                For booking Login as Buyer
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
