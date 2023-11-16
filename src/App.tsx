import React from 'react'
import Home from './ui/Home'
import { Menu,Cart, CreateOrder, Order } from './features';
import {loader as menuLoader} from './features/menu/Menu';
import {loader as orderLoader} from './features/order/Order';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Applayout from './ui/Applayout';
import Error from './ui/Error'
// import { Card } from '@material-tailwind/react';
// import { SimpleCard } from './ui/Card';
const router = createBrowserRouter([
  {
    element:<Applayout/>,
    errorElement:<Error/>,
    children:[

      {
        path: "/",
        element: <Home />, 
       },
       {
        path: "/Menu",
        element: <Menu />, 
        loader:menuLoader,
        errorElement:<Error/>,
       },
       {
         path: "/cart",
         element: <Cart />,
       },
       {
         path:"/order/new", 
         element:<CreateOrder/>,
       },
       {
         path:"/order/:orderId", 
         element:<Order/>,
         loader:orderLoader,
         errorElement:<Error/>,
       },
      
    ]
  }

]);


const App = () => {
  return (
    <div>
  <RouterProvider router={router} />
    </div>
  )
}

export default App