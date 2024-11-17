import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "../Layouts/Home";
import Error from "../Layouts/Error";
import CategoryNews from "../Components/CategoryNews/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import UserLogin from "../Components/UserLogin/UserLogin";
import Register from "../Components/Register/Register"

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement : <Error></Error>,
      element: <Home></Home>,
      children : [
        {
          path : "" ,
          element: <Navigate to="/category/01"></Navigate>
        },
        {
          path : "/category/:id",
          element : <CategoryNews></CategoryNews>,
          loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
      ]
    },
    {
        path: '/news',
        element : <div>NewsLayout</div> 
    },

    {
        path : '/auth',
        element : <AuthLayout></AuthLayout>,
        children : [
          {
            path : '/auth/login',
            element: <UserLogin></UserLogin>
          },
          {
            path : '/auth/register',
            element: <Register></Register>
          },
        ]
    }
  ]);
  
  export default router

