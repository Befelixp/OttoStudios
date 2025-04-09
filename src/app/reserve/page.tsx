"use client";
import "../styles/fonts.css";
import "../styles/buttons.css";
import { Box } from "@mui/material";
import Image from "next/image";
import RecipeReviewCard from "../components/RecipeReviewCard";
import Footer from "../components/Footer";

export default function Reserve() {
  var title = "Os nossos pacotes!";

  const cardData = [
    {
      title: "Pacote Normal 1h",
      subheader:
        "Pacote normal contém o direito de uma reserva de 1h do espaço para gravações de podcast, videocast.",
      image: "/images/pacote1.png",
      materials: "Materiais incluídos: Câmeras, Microfones, Iluminação.",
    },
    {
      title: "Pacote Extendido 2h",
      subheader:
        "Pacote extendido que oferece 2h de uso do estúdio para gravações de vídeo e áudio com todos os equipamentos.",
      image: "/images/pacote1.png",
      materials:
        "Materiais incluídos: Câmeras, Microfones, Iluminação, Suporte técnico.",
    },
    {
      title: "Pacote Premium 3h",
      subheader:
        "Pacote premium com 3h de reserva do espaço, incluindo suporte técnico especializado e equipamentos de alta qualidade.",
      image: "/images/pacote1.png",
      materials:
        "Materiais incluídos: Câmeras, Microfones, Iluminação, Suporte técnico, Edição.",
    },
    {
      title: "Pacote Personalizado",
      subheader:
        "Pacote personalizado de acordo com suas necessidades. Entre em contato para criar seu pacote ideal.",
      image: "/images/pacote1.png",
      materials: "Materiais: A definir com o cliente.",
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
          <Image
            src="/images/logoprincipal.png"
            alt="logo"
            width={250}
            height={125}
          />
          <h1 className="bauhaus" style={{ marginBottom: "2.5rem" }}>
            {title}
          </h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "1.5rem",
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
      <Footer />
    </Box>
  );
}
