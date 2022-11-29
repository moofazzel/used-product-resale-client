import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";

const BookingModal = ({ productData, setProductData, setSuccessToast }) => {
  const navigate = useNavigate();

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
  } = productData;

  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleBooking = (data) => {
    const orders = {
      product_id: _id,
      product_image: img,
      product_title: brand,
      product_model: modal,
      email: user.email,
      name: user.displayName,
      phone: data.phone,
      location: data.location,
      booked: "yes",
      price: data.price,
    };
    console.log(orders);
    // insert orders to orders collection
    fetch(`https://used-procuct.vercel.app/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSuccessToast(toast("Booking confirm"));
          setProductData(null);
          navigate("/dashboard/myOrders");
          return;
        } else {
          setSuccessToast(toast("Something wrong"));
        }
      });
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-4 top-4"
          >
            ✕
          </label>

          <form
            onSubmit={handleSubmit(handleBooking)}
            className="grid gap-3 py-5"
          >
            <h3 className="text-xl font-semibold mb-3">Please fill the form</h3>
            <div className="divider m-0"></div>
            <input
              required
              id="item"
              defaultValue={`Your Name: ${user?.displayName}`}
              disabled
              name="name"
              type="text"
              className=" input input-bordered w-full"
            />

            <input
              required
              id="email"
              defaultValue={`Your Email: ${user?.email}`}
              disabled
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />

            <input
              required
              id="modal"
              defaultValue={`Model: ${modal}`}
              disabled
              name="modal"
              type="modal"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />

            <input
              required
              id="resellingPrice"
              defaultValue={resellingPrice}
              name="resellingPrice"
              type=""
              placeholder="Your Email"
              className="input input-bordered w-full cursor select-none"
              {...register("price", { required: true })}
            />

            <input
              required
              id="location"
              name="location"
              type="text"
              placeholder="Enter your desire location"
              className="input input-bordered w-full"
              {...register("location", { required: true })}
            />

            <input
              required
              id="phone"
              name="phone"
              type="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              {...register("phone", { required: true })}
            />

            <button
              type="submit"
              className="btn input input-bordered mt-5 w-full bg-slate-700 text-white"
            >
              Book
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default BookingModal;
