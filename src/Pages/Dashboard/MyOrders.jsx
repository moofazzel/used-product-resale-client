import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const MyOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProduct"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/my_orders`);
      const data = await res.json();
      console.log(data);

      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <h3 className="mt-6 text-xl  font-semibold">Product List</h3>
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 px-5 ">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
              <table className="w-full overflow-x-scroll divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Title/Model/ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Price
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order, i) => (
                    <tr
                      key={i}
                      className="transition-all hover:bg-gray-100 hover:shadow-lg"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-36 h-36flex items-center">
                            <img
                              className="w-full rounded-md m-auto"
                              src={order?.product_image}
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          Title: {order?.brand}
                        </div>
                        <div className="text-sm text-gray-500">
                          Model: {order?.modal}
                        </div>
                        <div className="text-sm text-gray-500">
                          Product ID: {order?._id}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex py-2 px-4 text-md font-semibold leading-5 text-green-800 bg-blue-400-100 rounded-full">
                          {order.price}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <div className="dropdown dropdown-top dropdown-end">
                          <label
                            tabIndex={0}
                            className="btn bg-green-400 hover:bg-green-500 m-1 text-black border-0"
                          >
                            Buy
                          </label>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow-2xl bg-base-200 rounded-md w-52"
                          ></ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
