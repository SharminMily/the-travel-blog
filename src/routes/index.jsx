import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBlog from "../page/AddBlog/AddBlog"
import AllBlogs from "../page/AllBlogs/AllBlogs"
import Wishlist from "../page/Wishlist/Wishlist"
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import ErrorPage from "../page/ErrorPage";
import FeatureBlog from "../page/FeatureBlog/FeatureBlog";
import PrivateRouter from "../page/PrivateRouter/PrivateRouter";


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
        path: "/addBlog",
        element: <PrivateRouter><AddBlog></AddBlog></PrivateRouter>
      },
      {
        path: "/allBlogs",
        element: <PrivateRouter><AllBlogs></AllBlogs></PrivateRouter>,
        // loader: ({ params }) => fetch(`https://travel-blog-server-di4i29p2x-sharminmily.vercel.app/alldata/${params.id}`)
      },
      {
        path: "/wishList",
        element: <PrivateRouter><Wishlist></Wishlist></PrivateRouter>,
        // loader: ({ params }) => fetch(`https://travel-blog-server-di4i29p2x-sharminmily.vercel.app/alldata/${params.id}`)
      },
      {
        path: "/featureBlog",
        element: <FeatureBlog></FeatureBlog>
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