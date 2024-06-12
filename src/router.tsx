import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar/navbar.tsx";

export const Router: React.FC = () =>{
    return <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<div>HOMEPAGE</div>}/>
            <Route path="/about" element={<div>ABOUTt</div>}/>
            <Route path="*" element={<div>404</div>}/>
        </Routes>
    </BrowserRouter>
}
