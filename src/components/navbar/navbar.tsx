import {Button} from "@chakra-ui/react";
// @ts-ignore
import styles from "./navbar.module.css"
import {useNavigate} from "react-router-dom";


export const Navbar: React.FC = () => {

        const navigate = useNavigate();

        return <div className={styles.navbar}>
            <Button
                colorScheme="orange"
                textColor="black"
                onClick={()=> {
                    navigate("/")
                }}
            >Home</Button>
            <Button
                onClick={()=> {
                    navigate("/about")
                }}
            >About</Button>
        </div>

}
