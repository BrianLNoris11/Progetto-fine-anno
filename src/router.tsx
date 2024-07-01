import {BrowserRouter, Route, Routes} from "react-router-dom";
// @ts-ignore
import {Navbar} from "./components/navbar/navbar.tsx";
// @ts-ignore
import {HomePage} from "./pages/homepage/home.tsx";
// @ts-ignore
import Contact from "./pages/contacts/contacts.tsx";
// @ts-ignore
import {Products} from "./pages/products/products.tsx";
// @ts-ignore
import {ProductDetail} from "./pages/products/productDetail/index.tsx";

export const Router: React.FC = () => {
  return <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/about" element={<div>ABOUT</div>}/>
      <Route path="/contacts" element={<Contact/>}/>
      <Route path="/products">
        <Route index element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
      </Route>
      <Route path="*" element={<div>404</div>}/>
    </Routes>
  </BrowserRouter>
}
