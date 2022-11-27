import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Addproduct = () => {
  const { user } = useContext(AuthContext);

  const today = new Date().toLocaleDateString();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imagebb_key;

  // add product submit handle
  const handleAddProduct = (v) => {
    // console.log(imageHostKey);

    const image = v.picture[0];
    const formData = new FormData();

    formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    const url = `https://api.imgbb.com/1/upload?key=121434ed25072b618fb998af7dda3f59`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          const productDetails = {
            brand: v.productName,
            modal: v.Model,
            buyingPrice: v.ProductPrice,
            resellingPrice: v.sellingPrice,
            category: v.category,
            condition: v.condition,
            description: v.description,
            usedDuration: v.duration,
            location: v.location,
            img: imgData.data.display_url,
            postedDate: today,
            userName: user.displayName,
            userEmail: user.email,
            userImg: user.photoURL,
            booked: "",
          };

          // save doctor information to the database
          fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(productDetails),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.acknowledged) {
                toast.success(`${v.name} is added successfully`);
              }
              if (v.category === "MacBook") {
                navigate("/products/MacBook");
              } else if (v.category === "Windows") {
                navigate("/products/Windows");
              } else {
                navigate("/products/Linux");
              }
            });
        }
      })
      .catch((error) => {
        console.error("product image upload Error:", error);
      });
  };

  return (
    <>
      <div className="lg:w-[70%] ">
        <form onSubmit={handleSubmit(handleAddProduct)} className="text-sm">
          <div className="xt-row xt-row-x-6 xt-row-y-4">
            <div className="w-full">
              <label className="block mb-3 font-medium text-gray-700">
                Product brand
              </label>
              <input
                type="text"
                id="ProductName"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Input"
                {...register("productName", {
                  required: "Product Name is required",
                })}
              />

              {errors.ProductName && (
                <p className="text-red-600">{errors.ProductName?.message}</p>
              )}
            </div>

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Product Model
              </label>
              <input
                type="text"
                id="Model"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Input"
                {...register("Model", {
                  required: "Product Model is required",
                })}
              />

              {errors.Model && (
                <p className="text-red-600">{errors.Model?.message}</p>
              )}
            </div>

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Original Price
              </label>
              <input
                type="number"
                id="ProductPrice"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Input"
                {...register("ProductPrice", {
                  required: "Product Price is required",
                })}
              />

              {errors.ProductPrice && (
                <p className="text-red-600">{errors.ProductPrice?.message}</p>
              )}
            </div>

            {/* <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Uses duration
              </label>
              <input
                type="text"
                id="duration"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Input"
                {...register("duration", {
                  required: "Product Price is required",
                })}
              />

              {errors.duration && (
                <p className="text-red-600">{errors.duration?.message}</p>
              )}
            </div> */}

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Reselling Price
              </label>
              <input
                type="number"
                id="sellingPrice"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Input"
                {...register("sellingPrice", {
                  required: "Product Price is required",
                })}
              />

              {errors.sellingPrice && (
                <p className="text-red-600">{errors.sellingPrice?.message}</p>
              )}
            </div>

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Uses duration
              </label>
              <input
                type="text"
                id="duration"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Input"
                {...register("duration", {
                  required: "Product Price is required",
                })}
              />

              {errors.duration && (
                <p className="text-red-600">{errors.duration?.message}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-3 font-medium text-gray-700">
                Select product picture
              </label>
              <input
                type="file"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="File"
                {...register("picture", {
                  required: "picture is required",
                })}
              />
              {errors.picture && (
                <p className="text-red-600">{errors.picture?.message}</p>
              )}
            </div>

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Product description
              </label>
              <textarea
                placeholder="Write about your product"
                className="block w-full h-20 max-h-48 rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none resize-vertical"
                aria-label="Textarea"
                {...register("description", {
                  required: "Product description is required",
                })}
              ></textarea>
              {errors.description && (
                <p className="text-red-600">{errors.description?.message}</p>
              )}
            </div>

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Product Condition
              </label>
              <select
                className="block w-full xt-select rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Select"
                {...register("condition", {
                  required: "Product Price is required",
                })}
              >
                <option defaultValue="">Select Condition</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
              {errors.condition && (
                <p className="text-red-600">{errors.condition?.message}</p>
              )}
            </div>

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Select category
              </label>
              <select
                className="block w-full xt-select rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Select"
                {...register("category", {
                  required: "Product Price is required",
                })}
              >
                <option defaultValue="">Select category</option>
                <option>Windows</option>
                <option>MacBook</option>
                <option>Linux</option>
              </select>
              {errors.category && (
                <p className="text-red-600">{errors.category?.message}</p>
              )}
            </div>

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Select location
              </label>
              <select
                className="block w-full xt-select rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Select"
                {...register("location", {
                  required: "Product Price is required",
                })}
              >
                <option defaultValue="">Select your district</option>
                <option>Khulna</option>
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Sylhet</option>
                <option>Barisal</option>
                <option>Rangpur</option>
                <option>Mymensingh</option>
              </select>
              {errors.location && (
                <p className="text-red-600">{errors.location?.message}</p>
              )}
            </div>

            <div className="w-full my-8">
              <button type="submit" className="btn btn-wide">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addproduct;
