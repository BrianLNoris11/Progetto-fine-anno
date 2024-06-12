import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider} from "@chakra-ui/react";
import {Navbar} from "./components/navbar/navbar.tsx";
import {Router} from "./router.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChakraProvider>
        <Router/>
      </ChakraProvider>
  </React.StrictMode>
);
