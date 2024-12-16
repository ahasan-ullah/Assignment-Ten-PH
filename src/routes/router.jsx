import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import All from "../pages/All";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoutes from "./PrivateRoute";
import Add from "../pages/Add";
import MyProduct from "../pages/MyProduct";
import ProductDetails from "../pages/ProductDetails";
import UpdatePage from "../pages/UpdatePage";
import ErrorPage from "../pages/ErrorPage";

const router=createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/all',
        element: <All></All>,
        loader: ()=>fetch('https://sports-hub-server-beta.vercel.app/all-products')
      },
      {
        path: '/product/:id',
        element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
        loader: ({params})=>fetch(`https://sports-hub-server-beta.vercel.app/all-products/${params.id}`)
      },
      {
        path: '/add',
        element: <PrivateRoutes><Add></Add></PrivateRoutes>
      },
      {
        path: '/my-product/:email',
        element: <PrivateRoutes><MyProduct></MyProduct></PrivateRoutes>,
        loader: ({params})=>fetch(`https://sports-hub-server-beta.vercel.app/all-products-by-email/${params.email}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoutes><UpdatePage></UpdatePage></PrivateRoutes>,
        loader: ({params})=>fetch(`https://sports-hub-server-beta.vercel.app/all-products/${params.id}`)
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/auth/register',
        element: <RegisterPage></RegisterPage>
      }
    ]
  }
])

export default router;