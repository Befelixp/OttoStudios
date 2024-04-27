"use client";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logobutton from "../images/ottominilogo.png";
import Image from "next/image";
import { AppBar, Box, ThemeProvider, Toolbar } from "@mui/material";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
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
      <AppBar position="fixed">
        <Toolbar sx={{ bgcolor: "rgba(0,0,0,0.8)" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Image src={logobutton} alt="logo" width={45} height={45} />
          </Box>

          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="Platform"
            sx={{ flexGrow: 1 }}
            color="secondary"
          >
            <ToggleButton
              value="home"
              sx={{
                border: "none",
                transform: "scale(1.0)",
                transition: "transform 0.3s ease-in-out",
                fontSize: "0.9em",
                "&.Mui-selected": {
                  bgcolor: "transparent",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease-in-out",
                  fontSize: "1em",
                },
              }}
            >
              Home
            </ToggleButton>
            <ToggleButton
              value="aboutus"
              sx={{
                border: "none",
                transform: "scale(1.0)",
                transition: "transform 0.3s ease-in-out",
                fontSize: "0.9em",
                "&.Mui-selected": {
                  bgcolor: "transparent",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease-in-out",
                  fontSize: "1em",
                },
              }}
            >
              About Us
            </ToggleButton>
            <ToggleButton
              value="contacts"
              sx={{
                border: "none",
                transform: "scale(1.0)",
                transition: "transform 0.3s ease-in-out",
                fontSize: "0.9em",
                "&.Mui-selected": {
                  bgcolor: "transparent",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease-in-out",
                  fontSize: "1em",
                },
              }}
            >
              Contacts
            </ToggleButton>
          </ToggleButtonGroup>
          <AnchorTemporaryDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
