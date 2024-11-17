import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "../Layouts/Home";
import Error from "../Layouts/Error";
import CategoryNews from "../Components/CategoryNews/CategoryNews";
  
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
        path : '/login',
        element : <div>Login</div>
    }
  ]);
  
  export default router

