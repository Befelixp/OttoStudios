import "../styles/fonts.css";
import "../styles/buttons.css";
import { Box } from "@mui/material";
import logootto from "../images/logoprincipal.png";
import Image from "next/image";

export default function Reserve() {
  var title = new String("Os nossos pacotes!");
  return (
    <Box className="Main" sx={{ display: "column" }}>
      <Box
        sx={{
          display: "flex",
          maxHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="Home"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", md: "80%" },
            zIndex: 2,
            height: "100vh",
          }}
        >
          <Image src={logootto} alt="logo" width={250} height={125}></Image>
          <h1 className="bauhaus">{title}</h1>
        </Box>
      </Box>
    </Box>
  );
}
