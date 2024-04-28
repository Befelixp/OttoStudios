import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import "./styles/fonts.css";
import mainimage from "./images/IMG_3881.png";

export default function Home() {
  var title = new String("O som e a imagem da sua narrativa");
  var description = new String(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Faucibus turpis in eu mi bibendum. Aliquam sem fringilla ut morbi tincidunt. Est lorem ipsum dolor sit. Tortor posuere ac ut consequat semper viverra. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Tincidunt arcu non sodales neque sodales ut etiam. Augue ut lectus arcu bibendum. Pellentesque diam volutpat commodo sed."
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <h1 className="bauhaus">{title}</h1>
        <p className="montserrat description">{description}</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Image
          src={mainimage}
          width={500}
          height={600}
          alt="ImagemHome"
          objectFit="contain"
        ></Image>
      </Box>
    </Box>
  );
}
