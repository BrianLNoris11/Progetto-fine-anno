import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
// @ts-ignore
import styles from "./navbar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLargerThen800] = useMediaQuery("(min-width: 800px)");

  return (
    <header className={styles.navbar}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          fontStyle="monospace"
          style={{ width: "60%" }}
        >
          F45 Training Brussels Central Station
        </Text>
        {isLargerThen800 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "2em",
            }}
          >
            <Button
              colorScheme={location.pathname === "/" && "orange"}
              textColor={location.pathname === "/" ? "black" : "white"}
              onClick={() => {
                setOpenDrawer(false);
                navigate("/");
              }}
              className={styles.MenuBtn}
            >
              Home
            </Button>
            <Button
              colorScheme={location.pathname === "/contacts" && "orange"}
              textColor={location.pathname === "/contacts" ? "black" : "white"}
              onClick={() => {
                setOpenDrawer(false);
                navigate("/contacts");
              }}
              className={styles.MenuBtn}
            >
              Contatti 
            </Button>
            <Button
              colorScheme={location.pathname === "/pippo" && "orange"}
              textColor={location.pathname === "/pippo" ? "black" : "white"}
              onClick={() => {
                setOpenDrawer(false);
                navigate("/pippo");
              }}
              className={styles.MenuBtn}
            >
              Pippo
            </Button>
          </div>
        ) : (
          <>
            <Button
              textColor="black"
              onClick={() => {
                setOpenDrawer(true);
              }}
              colorScheme="orange"
              style={{ width: "auto" }}
            >
              OPEN
            </Button>
            <Drawer
              isOpen={openDrawer}
              onClose={() => {
                setOpenDrawer(false);
              }}
            >
              <DrawerOverlay />
              <DrawerContent style={{background: "rgba(52,73,94,1)"}}>
                <DrawerCloseButton color="white" />
                <DrawerHeader color="white" style={{ marginBottom: "1em" }}>
                  Menu
                </DrawerHeader>
                <DrawerBody
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2em",
                  }}
                >
                  <Button
                    colorScheme={location.pathname === "/" && "orange"}
                    textColor={location.pathname === "/" ? "black" : "white"}
                    onClick={() => {
                      setOpenDrawer(false);
                      navigate("/");
                    }}
                    className={styles.MenuBtn}
                  >
                    Home
                  </Button>
                  <Button
                    colorScheme={location.pathname === "/about" && "orange"}
                    textColor={
                      location.pathname === "/about" ? "black" : "white"
                    }
                    onClick={() => {
                      setOpenDrawer(false);
                      navigate("/about");
                    }}
                    className={styles.MenuBtn}
                  >
                    About
                  </Button>
                  <Button
                    colorScheme={location.pathname === "/pippo" && "orange"}
                    textColor={
                      location.pathname === "/pippo" ? "black" : "white"
                    }
                    onClick={() => {
                      setOpenDrawer(false);
                      navigate("/pippo");
                    }}
                    className={styles.MenuBtn}
                  >
                    Pippo
                  </Button>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </div>
    </header>
  );
};
