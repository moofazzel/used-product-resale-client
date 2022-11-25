import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const BookingModal = ({ handleBooking, productData, setProductData }) => {
  const {
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
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleBooking} className="grid gap-3 py-5">
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
              defaultValue={`Price: ${resellingPrice}`}
              disabled
              name="resellingPrice"
              type="resellingPrice"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />

            <input
              required
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter your desire location"
              className="input input-bordered w-full"
            />

            <input
              required
              id="phone"
              name="phone"
              type="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />

            <input
              type="submit"
              value={"Submit"}
              className="btn input input-bordered mt-5 w-full bg-slate-700 text-white"
            //   onClick={setProductData(null)}
            />

            {/* <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Submit
              </label>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
