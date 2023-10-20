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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
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
        loader: ()=> fetch('http://localhost:5000/get-product')
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
