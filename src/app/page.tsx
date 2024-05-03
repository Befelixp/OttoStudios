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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Faucibus turpis in eu mi bibendum. Aliquam sem fringilla ut morbi tincidunt. Est lorem ipsum dolor sit. Tortor posuere ac ut consequat semper viverra. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque."
  );

  return (
    <Box className="Main" sx={{ display: "column" }}>
      <Box
        sx={{
          display: "flex",
        }}
        className="Home"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            marginTop: "6rem",
          }}
        >
          <Box sx={{ width: "80%" }}>
            <Image src={logootto} alt="logo" width={200} height={100}></Image>
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
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            marginTop: "4rem",
            maxHeight: "630px",
          }}
        >
          <Image
            src={mainimage}
            style={{
              maxHeight: "100vh",
              height: "auto",
              objectFit: "cover",
              overflow: "hidden",
              opacity: "60%",
            }}
            alt="ImagemHome"
          ></Image>
        </Box>
      </Box>
      <Box sx={{ width: "30%" }}>
        <Example />
      </Box>
    </Box>
  );
}
