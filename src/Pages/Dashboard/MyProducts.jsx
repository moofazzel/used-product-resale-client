import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DeleteConfirmModal from "../../Components/DeleteConfirmModal/DeleteConfirmModal";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../../context/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const [deleteProduct, setDeleteProduct] = useState(null);

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProduct"],
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
    fetch(`http://localhost:5000/product/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          // toast.success(`Product "${product.modal}" deleted Successfully`);
        }
      });
  };

  const handleUpdate = () => {};

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
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-36 h-36">
                            <img className="  rounded-md" src={p?.img} alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          Title: {p?.brand}
                        </div>
                        <div className="text-sm text-gray-500">
                          Model: {p?.modal}
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
                        <div className="dropdown dropdown-top dropdown-end">
                          <label tabIndex={0} className="btn btn-sm m-1">
                            Edit
                          </label>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow-2xl bg-base-200 rounded-md w-52"
                          >
                            <li>
                              <Link onClick={handleUpdate}>Update</Link>
                            </li>
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
                          </ul>
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
      {deleteProduct && (
        <DeleteConfirmModal
          handleDeleteProduct={handleDeleteProduct}
          deleteProduct={deleteProduct}
        />
      )}
    </>
  );
};

export default MyProducts;
