import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Addproduct from "../Pages/Dashboard/Addproduct";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Home/Product";
import Login from "../Pages/Login";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products/:name",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.name}`),
        element: <Products />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/myOrders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/addProduct",
        element: <Addproduct />,
      },
      {
        path: "/dashboard/myProduct",
        element: <MyProducts />,
      },
    ],
  },
]);

export default router;
