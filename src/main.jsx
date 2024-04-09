import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Head from './Head';
import Banner from './Banner';
import Login from './Login';

import EstateSection from './EstateSection';
import Register from './Register';
import EstateDetails from './EstateDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element:  <Home></Home> ,
      },
      {
        path: "/head",
        element: <Head></Head> ,
      },
      {
        path: "/banner",
        element: <Banner></Banner> ,
      },
      
      {
        path: "/login",
        element: <Login></Login> ,
      },
      {
        path: "/Estate",
        element: <EstateSection></EstateSection> ,
      },
      {
        path: "/register",
        element: <Register></Register> ,
      },
      {
        path: "/Details",
        element: <EstateDetails></EstateDetails> ,
      },
    
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
