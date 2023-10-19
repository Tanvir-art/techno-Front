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
        element: <AddProduct/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
