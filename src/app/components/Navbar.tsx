"use client";
import Button from "@mui/material/Button";
import logobutton from "../images/ottominilogo.png";
import Image from "next/image";
import { AppBar, Box, Link, ThemeProvider, Toolbar } from "@mui/material";
import * as React from "react";
import AnchorTemporaryDrawer from "./Drawer";

export default function Navbar() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "rgba(0,0,0,0.5)" }}>
        <Toolbar sx={{ bgcolor: "rgba(0,0,0,0.8)" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Image src={logobutton} alt="logo" width={45} height={45} />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              value="home"
              sx={{
                border: "none",
                transform: "scale(1.0)",
                transition: "transform 0.3s ease-in-out",
                fontSize: "max(0.7em,0.9vw)",
                "&.MuiButton-root": {
                  color: "white",
                },
              }}
            >
              Principal
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("sobrenos");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              value="aboutus"
              sx={{
                border: "none",
                transform: "scale(1.0)",
                transition: "transform 0.3s ease-in-out",
                fontSize: "max(0.7em,0.9vw)",
                "&.MuiButton-root": {
                  color: "white",
                },
              }}
            >
              Sobre Nós
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("contatenos");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              value="contacts"
              sx={{
                border: "none",
                transform: "scale(1.0)",
                transition: "transform 0.3s ease-in-out",
                fontSize: "max(0.7em,0.9vw)",
                "&.MuiButton-root": {
                  color: "white",
                },
              }}
            >
              Contatos
            </Button>
          </Box>
          <AnchorTemporaryDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
