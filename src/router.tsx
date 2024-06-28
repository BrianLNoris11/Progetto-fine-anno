import {BrowserRouter, Route, Routes} from "react-router-dom";
// @ts-ignore
import {Navbar} from "./components/navbar/navbar.tsx";
// @ts-ignore
import {HomePage} from "./components/pages/homepage/home.tsx";
// @ts-ignore
import Contact from "./components/pages/contacts/contacts.tsx";
// @ts-ignore
import {Products} from "./components/pages/products/products.tsx";

export const Router: React.FC = () => {
  return <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/about" element={<div>ABOUT</div>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contacts" element={<Contact/>}/>
      <Route path="*" element={<div>404</div>}/>
    </Routes>
  </BrowserRouter>
}
