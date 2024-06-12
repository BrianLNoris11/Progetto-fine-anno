import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Button, ChakraProvider} from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: '*',
    element: <div>404</div>,
  },
  {
    path: "/",
    element: <div>HOME PAGE</div>,
  },
  {
    path: "/about",
    element: <div>ABOUT</div>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <div>
        <RouterProvider router={router}/>
      </div>
    </ChakraProvider>
  </React.StrictMode>
);
