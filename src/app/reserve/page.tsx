"use client";
import "../styles/fonts.css";
import "../styles/buttons.css";
import { Box } from "@mui/material";
import logootto from "../images/logoprincipal.png";
import Image from "next/image";
import RecipeReviewCard from "../components/Card";

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
          <h1 className="bauhaus" style={{ marginBottom: "2.5rem" }}>
            {title}
          </h1>
          <RecipeReviewCard
            title="Pacote Normal 1h"
            subheader="Pacote normal contém o direito de uma reserva de 1h do espaço para gravações de podcast, videocast, "
            image="/src/app/images/pacote1.png"
            materials="Materiais:"
          />
        </Box>
      </Box>
    </Box>
  );
}
