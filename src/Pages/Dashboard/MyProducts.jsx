import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import DeleteConfirmModal from "../../Components/DeleteConfirmModal/DeleteConfirmModal";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../../context/AuthProvider";

const MyProducts = () => {
  const { user, loading } = useContext(AuthContext);


  const [deleteProduct, setDeleteProduct] = useState(null);

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myProduct?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });



  //  button for delete doctor
  const handleDeleteProduct = (product) => {
    console.log(product);
    fetch(`http://localhost:5000/product/${product?._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast(`Product "${product.modal}" deleted Successfully`,{position:"top-center"});
        }
      });
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/product/advertise/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast('Your Product is now in advertising',{position:"top-center"});
        }
        refetch()
      });
  };

  if (isLoading || loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <h3 className="mt-6 text-xl  font-semibold">Product List</h3>
      <table className=" mx-3 my-5 w-full overflow-x-scroll divide-y divide-gray-200 ">
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
              Status
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {myProducts.map((p, i) => (
            <tr
              key={i}
              className="transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="">
                  <div className="flex items-center w-36 h-36">
                    <img className="  rounded-md" src={p?.img} alt="" />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Title: {p?.brand}</div>
                <div className="text-sm text-gray-500">Model: {p?.modal}</div>
                <div className="text-sm text-gray-500">
                ResellingPrice: {p?.resellingPrice}
                </div>
                <div className="text-sm text-gray-500">
                  Product ID: {p?._id}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                  Unsold
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <div className="dropdown dropdown-top dropdown-end z-50">
                  <label tabIndex={0} className="btn btn-sm m-1">
                    Edit
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow-2xl bg-base-200 rounded-md w-52 z-50"
                  >
                    <li>
                      {/* The button to open modal */}
                      <label
                        onClick={() => setDeleteProduct(p)}
                        htmlFor="confirm-delete"
                        className="hover:bg-red-200"
                      >
                        Delete
                      </label>
                    </li>
                    <li>
                      <Link onClick={handleUpdate} className="hover:bg-green-200">Update</Link>
                    </li>
                    <li>
                      <Link onClick={()=>handleUpdate(p._id)} className="hover:bg-fuchsia-200">Make Add</Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteProduct && (
        <DeleteConfirmModal
          handleDeleteProduct={handleDeleteProduct}
          deleteProduct={deleteProduct}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default MyProducts;
