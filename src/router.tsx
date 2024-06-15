import {BrowserRouter, Route, Routes} from "react-router-dom";
// @ts-ignore
import {Navbar} from "./components/navbar/navbar.tsx";
// @ts-ignore
import {HomePage} from "./components/pages/homepage/home.tsx";

export const Router: React.FC = () =>{
    return <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/about" element={<div>ABOUTt</div>}/>
            <Route path="/pippo" element={<div>PIPPO</div>}/>
            <Route path="*" element={<div>404</div>}/>
        </Routes>
    </BrowserRouter>
}
