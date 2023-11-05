import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBlog from "../page/AddBlog/AddBlog"
import AllBlogs from "../page/AllBlogs/AllBlogs"
import Wishlist from "../page/Wishlist/Wishlist"
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
         index: true,
          element: <Home></Home>
        },
        {
          path: "addBlog",
          element: <AddBlog></AddBlog>
        },
        {
          path: "allBlogs",
          element: <AllBlogs></AllBlogs>
        },
        {
          path: "wishList",
          element: <Wishlist></Wishlist>
        },
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
  ]);

  export default routes;