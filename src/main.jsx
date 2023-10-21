import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Component/Root/Root.jsx';
import Home from './Component/Pages/Home/Home.jsx';
import AddProduct from './Component/Pages/AddProduct/AddProduct.jsx';
import Login from './Component/Pages/Login/Login.jsx';
import Signup from './Component/Pages/Signup/Signup.jsx';
import Auhtprovider from './Provider/Auhtprovider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import BrandDetails from './Component/Pages/BrandDetails/BrandDetails.jsx';
import UpdateProduct from './Component/Pages/UpdateProduct/UpdateProduct.jsx';
import ProdutDetails from './Component/ProductDetails/ProdutDetails.jsx';
import Getcart from './Component/Pages/GetCart/Getcart.jsx';
import Error from './Component/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
       
        path: "/add-product",
        element: <PrivateRoute><AddProduct/></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/brand/:brandName",
        element: <BrandDetails/>,
        loader: ()=> fetch('https://back-ay75mw78l-tanvir-haans-projects.vercel.app/get-product')
      },
      {
        path: "/brand/update/:id",
        element: <PrivateRoute><UpdateProduct/></PrivateRoute>,
        loader: ({params})=> fetch(`https://back-ay75mw78l-tanvir-haans-projects.vercel.app/get-product/${params.id}`)
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoute><ProdutDetails/></PrivateRoute>,
        loader: ({params})=> fetch(`https://back-ay75mw78l-tanvir-haans-projects.vercel.app/productDetails/${params.id}`)
      },
      {
        path: "/getcart",
        element: <PrivateRoute><Getcart/></PrivateRoute>,
        loader: ()=>fetch('https://back-ay75mw78l-tanvir-haans-projects.vercel.app/cart-product')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auhtprovider>
    <RouterProvider router={router} />
    </Auhtprovider>
  </React.StrictMode>,
)
