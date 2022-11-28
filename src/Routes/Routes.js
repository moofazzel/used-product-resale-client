import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Addproduct from "../Pages/Dashboard/Addproduct";
import Allbuyers from "../Pages/Dashboard/Allbuyers";
import Allseller from "../Pages/Dashboard/Allseller";
import Board from "../Pages/Dashboard/Board";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Home/Product";
import Login from "../Pages/Login";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/",
        element: <Board />,
      },
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
      {
        path: "/dashboard/allbuyers",
        element: <Allbuyers />,
      },
      {
        path: "/dashboard/allSeller",
        element: <Allseller />,
      },
    ],
  },
]);

export default router;
