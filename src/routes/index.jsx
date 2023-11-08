import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBlog from "../page/AddBlog/AddBlog"
import AllBlogs from "../page/AllBlogs/AllBlogs"
import Wishlist from "../page/Wishlist/Wishlist"
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import ErrorPage from "../page/ErrorPage";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <AllBlogs></AllBlogs>,
          // loader: ({ params }) => fetch(`http://localhost:5000/alldata/${params.id}`)
        },
        {
          path: "wishList/:id",
          element: <Wishlist></Wishlist>,
          loader: ({ params }) => fetch(`http://localhost:5000/alldata/${params.id}`)
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