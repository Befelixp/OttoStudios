import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import "./styles/fonts.css";
import "./styles/buttons.css";
import mainimage from "./images/IMG_3881.png";
import logootto from "./images/logoprincipal.png";
import Example from "./components/MyCarousel";

export default function Home() {
  var title = new String("O som e a imagem da sua narrativa");
  var description = new String(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Faucibus turpis in eu mi bibendum. Aliquam sem fringilla ut morbi tincidunt. Est lorem ipsum dolor sit. Tortor posuere ac ut consequat semper viverra."
  );
  var sobrenos = new String("Sobre nós");
  var sobredesc = new String(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Faucibus turpis in eu mi bibendum. Aliquam sem fringilla ut morbi tincidunt. Est lorem ipsum dolor sit. Tortor posuere ac ut consequat semper viverra. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque."
  );

  return (
    <Box className="Main" sx={{ display: "column" }}>
      <Box
        sx={{
          display: "flex",
          maxHeight: "100vh",
        }}
        className="Home"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
            zIndex: 2,
            height: "100vh",
          }}
        >
          <Box className="TextHome" sx={{ width: "80%" }}>
            <Image src={logootto} alt="logo" width={250} height={125}></Image>
            <h1 className="bauhaus">{title}</h1>
            <p className="montserrat description">{description}</p>
            <Box
              className="calltoaction montserrat"
              sx={{
                marginTop: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              }}
            >
              RESERVE
            </Box>
          </Box>
        </Box>
        <Box
          className="ImageHome"
          sx={{
            position: { xs: "absolute", md: "relative" },
            display: "flex",
            width: { xs: "100%", md: "50%" },
            marginTop: "4rem",
            maxHeight: "100vh",
            overflow: "hidden",
            zIndex: -1,
          }}
        >
          <Image
            src={mainimage}
            style={{
              height: "100vh",
              objectFit: "cover",
              opacity: "30%",
            }}
            alt="ImagemHome"
          ></Image>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
        className="sobrenos"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: "50%" },
            marginTop: "6rem",
            alignItems: { xs: "center", md: "start" },
          }}
        >
          <Box sx={{ width: "80%", marginBottom: { xs: "3rem", md: "0" } }}>
            <h1 className="bauhaus">{sobrenos}</h1>
            <p className="montserrat description">{sobredesc}</p>
          </Box>
        </Box>
        <Box
          sx={{
            maxHeight: "100vh",
            width: { xs: "100%", md: "35%" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Example />
        </Box>
      </Box>
    </Box>
  );
}
