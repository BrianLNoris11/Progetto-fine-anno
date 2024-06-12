import {Button} from "@chakra-ui/react";
// @ts-ignore
import styles from "./navbar.module.css"
import {useLocation, useNavigate,} from "react-router-dom";


export const Navbar: React.FC = () => {

        const navigate = useNavigate();
        const location = useLocation();

        return <div className={styles.navbar}>
            <Button
                colorScheme={location.pathname === "/" && "orange"}
                textColor={location.pathname === "/" ? "black" : "white"}
                onClick={()=> {
                    navigate("/")
                }}
                className={styles.btn}
            >Home</Button>
            <Button
                colorScheme={location.pathname === "/about" && "orange"}
                textColor={location.pathname === "/about" ? "black" : "white"}
                onClick={()=> {
                    navigate("/about")
                }}
                className={styles.btn}
            >About</Button>
            <Button
                colorScheme={location.pathname === "/pippo" && "orange"}
                textColor={location.pathname === "/pippo" ? "black" : "white"}
                onClick={()=> {
                    navigate("/pippo")
                }}
                className={styles.btn}
            >Pippo</Button>
        </div>

}
