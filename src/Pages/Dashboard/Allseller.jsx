import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteConfirmModal from "../../Components/DeleteConfirmModal/DeleteConfirmModal";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Allseller = () => {
    const [deleteUser, setDeleteUser] = useState(null)
  const {
    data: sellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Allseller"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allSeller/seller`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
    
    

  const handleDeleteUser = () => {};
  const handleVerified = () => {};

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div>
        <h2 className="text2xl font-bold">All Sellers: {sellers.length} </h2>
        <div className=" w-full mt-7">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th> Avatar</th>
                <th>Name</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, i) => (
                <>
                  {/* <!-- row 1 --> */}
                  <tr key={seller._id}>
                    <th> {i + 1} </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-12 h-12">
                            <img src={seller.image} alt="" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">
                          <span className="block">Name: {seller.name}</span>{" "}
                          <span className="font-light block">ID: {seller._id}</span>
                        </div>
                      </div>
                    </td>
                    {seller.user_role ? (
                      <td>
                        <span className="bg-green-300 px-2 rounded-lg capitalize">
                          {seller.user_role}
                        </span>{" "}
                      </td>
                    ) : (
                      <td>
                        <span className="bg-red-300 px-2 rounded-lg capitalize">
                          Unverified
                        </span>
                      </td>
                    )}

                    <th>
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
                              // onClick={() => setDeleteProduct(p)}
                              htmlFor="confirm-delete"
                              className="hover:bg-red-200"
                            >
                              Delete
                            </label>
                          </li>
                          <li>
                            <Link
                              onClick={() => handleVerified(seller._id)}
                              className="hover:bg-green-300"
                            >
                              Make Verified
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </th>
                    {/* The button to open modal */}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        {deleteUser && (
          <DeleteConfirmModal
            title={"Are you sure you want to delete ?"}
            message={`If you delete ${deleteUser.name} it won't be recover`}
            successAction={handleDeleteUser}
            modalData={deleteUser}
          />
        )}
      </div>
    </>
  );
};

export default Allseller;
