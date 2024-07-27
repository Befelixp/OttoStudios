"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import logobutton from "../images/ottominilogo.png";
import Image from "next/image";
import { AppBar, Box, Link, Toolbar } from "@mui/material";
import AnchorTemporaryDrawer from "./Drawer";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "sobrenos", "contatenos"];
      const offsets = sections.map((section) => {
        const element = document.getElementById(section);
        return element ? element.getBoundingClientRect().top : Infinity;
      });

      const activeIndex = offsets.findIndex(
        (offset) => offset >= 0 && offset < window.innerHeight / 2
      );
      if (activeIndex !== -1) {
        setActiveSection(sections[activeIndex]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to set initial section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                const element = document.getElementById("home");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              value="home"
              sx={{
                border: "none",
                transform:
                  activeSection === "home" ? "scale(1.1)" : "scale(1.0)",
                transition: "all 0.15s ease-in-out",
                fontSize:
                  activeSection === "home"
                    ? "max(0.75em,1.0vw)"
                    : "max(0.7em,0.9vw)",
                color: activeSection === "home" ? "#61BB46" : "white",
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
                transition: "all 0.15s ease-in-out",
                fontSize:
                  activeSection === "sobrenos"
                    ? "max(0.75em,1.0vw)"
                    : "max(0.7em,0.9vw)",
                color: activeSection === "sobrenos" ? "#61BB46" : "white",
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
                transform:
                  activeSection === "contatenos" ? "scale(1.1)" : "scale(1.0)",
                transition: "all 0.15s ease-in-out",
                fontSize:
                  activeSection === "contatenos"
                    ? "max(0.75em,1.0vw)"
                    : "max(0.7em,0.9vw)",
                color: activeSection === "contatenos" ? "#61BB46" : "white",
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
