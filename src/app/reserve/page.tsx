"use client";
import "../styles/fonts.css";
import "../styles/buttons.css";
import { Box } from "@mui/material";
import logootto from "../images/logoprincipal.png";
import Image from "next/image";
import RecipeReviewCard from "../components/Card";
import pacote1 from "../images/pacote1.png";

export default function Reserve() {
  var title = new String("Os nossos pacotes!");

  const cardData = [
    {
      title: "Pacote Normal 1h",
      subheader:
        "Pacote normal contém o direito de uma reserva de 1h do espaço para gravações de podcast, videocast, ",
      image: "/src/app/images/pacote1.png",
      materials: "Materiais:",
    },
    {
      title: "Pacote Normal 1h",
      subheader:
        "Pacote normal contém o direito de uma reserva de 1h do espaço para gravações de podcast, videocast, ",
      image: "/src/app/images/pacote1.png",
      materials: "Materiais:",
    },
    {
      title: "Pacote Normal 1h",
      subheader:
        "Pacote normal contém o direito de uma reserva de 1h do espaço para gravações de podcast, videocast, ",
      image: "/src/app/images/pacote1.png",
      materials: "Materiais:",
    },
    {
      title: "Pacote Normal 1h",
      subheader:
        "Pacote normal contém o direito de uma reserva de 1h do espaço para gravações de podcast, videocast, ",
      image: "/src/app/images/pacote1.png",
      materials: "Materiais:",
    },
  ];

  return (
    <Box className="Main" sx={{ display: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="Home"
      >
        <Box
          sx={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", md: "80%", lg: "60%" },
            zIndex: 2,
          }}
        >
          <Image src={logootto} alt="logo" width={250} height={125}></Image>
          <h1 className="bauhaus" style={{ marginBottom: "2.5rem" }}>
            {title}
          </h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {cardData.map((card, index) => (
              <RecipeReviewCard
                key={index}
                title={card.title}
                subheader={card.subheader}
                image={card.image}
                materials={card.materials}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
