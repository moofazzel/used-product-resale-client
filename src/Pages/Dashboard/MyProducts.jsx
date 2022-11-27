import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
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

;

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
          toast.success(`Product "${product.modal}" deleted Successfully`);
        }
      });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <h3 class="mt-6 text-xl  font-semibold">Product List</h3>
      <div class="flex flex-col mt-6">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 px-5 ">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
              <table class="w-full overflow-x-scroll divide-y divide-gray-200 ">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Title/Model/ID
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {myProducts.map((p, i) => (
                    <tr
                      key={i}
                      class="transition-all hover:bg-gray-100 hover:shadow-lg"
                    >
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-36 h-36">
                            <img class="  rounded-md" src={p?.img} alt="" />
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          Title: {p?.brand}
                        </div>
                        <div class="text-sm text-gray-500">
                          Model: {p?.modal}
                        </div>
                        <div class="text-sm text-gray-500">
                          Product ID: {p?._id}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          Unsold
                        </span>
                      </td>
                      <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <div className="dropdown dropdown-top dropdown-end">
                          <label tabIndex={0} className="btn btn-sm m-1">
                            Edit
                          </label>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow-2xl bg-base-200 rounded-md w-52"
                          >
                            <li>
                              <Link>Update</Link>
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
