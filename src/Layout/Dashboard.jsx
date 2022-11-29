import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/UseAdmin";
import useCheckUserType from "../hooks/useCheckUserType";
import NavbarSide from "../Pages/Dashboard/NavbarSide";
import Navbar from "../Shared/Navbar/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { isAdmin, userType } = useAdmin(user?.email);

  //   const [userType] = useCheckUserType(user?.email);
  return (
    <>
      <Navbar></Navbar>
      <div className=" mx-auto  lg:mx-20">
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content flex flex-col bg-slate-50 pl-5 m-3 md:m-5 p-4">
          
            <Outlet></Outlet>
          </div>
          <div className="drawer-side mt-5 border-0">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <div className="bg-base-100 w-60 border-0">

              <NavbarSide/>

              <hr />

              <ul className="menu p-3 w-60 border-0 text-base-content">
                {userType === "seller" && (
                  <>
                    <li>
                      <Link to={"/dashboard/addProduct"}>Add Product</Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/myProduct"}>My Product</Link>
                    </li>
                  </>
                )}
                {userType === "buyer" && (
                  <li>
                    <Link to={"/dashboard/myOrders"}>My orders</Link>
                  </li>
                )}
                {isAdmin && (
                  <>
                    <li>
                      <Link to={"/dashboard/allSeller"}>All Seller</Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/allbuyers"}>All Buyer</Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/"}>Reported Items</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
