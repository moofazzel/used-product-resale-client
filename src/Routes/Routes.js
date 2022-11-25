import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
        path: "/products/:id",
        loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`),
        element: <Products />,
      },
    ],   
  },
]);

export default router;
