"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Box, Link } from "@mui/material";
import "./styles/fonts.css";
import "./styles/buttons.css";
import "./styles/transitions.css";
import mainimage from "./images/IMG_3881.png";
import logootto from "./images/logoprincipal.png";
import Example from "./components/MyCarousel";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Home() {
  var title = new String("O som e a imagem da sua narrativa");
  var description = new String(
    "No coração da cidade do Porto, OTTO STUDIO é o seu destino definitivo para todas as necessidades audiovisuais. Especializados em oferecer soluções inovadoras e de alta qualidade, transformamos suas ideias em realidade. Seja você um criador de conteúdo, educador, empresário ou organizador de eventos, nosso estúdio está equipado para atender a todas as suas necessidades de produção."
  );
  var sobrenos = new String("Sobre nós");
  var sobredesc = new String(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Faucibus turpis in eu mi bibendum. Aliquam sem fringilla ut morbi tincidunt. Est lorem ipsum dolor sit. Tortor posuere ac ut consequat semper viverra. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque."
  );

  var contatenos = new String("Contate-nos");
  var contatdesc = new String(
    "Estamos localizados dentro do edifício do consulado Brasileiro, perto da casa da música no Porto! Contate-nos para mais informações. Siga nossas redes sociais para mais novidades!"
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <Box className="Main" sx={{ display: "column" }}>
      <Box
        sx={{
          display: "flex",
          maxHeight: "100vh",
          marginBottom: "1.5rem",
        }}
        className="home hidden"
        id="home"
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
            <Link href="/reserve" underline="none">
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
            </Link>
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
          marginBottom: "1.5rem",
        }}
        className="sobrenos hidden"
        id="sobrenos"
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
            overflow: "hidden",
          }}
        >
          <Example />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
        className="contatenos hidden"
        id="contatenos"
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
            <h1 className="bauhaus">{contatenos}</h1>
            <p className="montserrat description">{contatdesc}</p>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <InstagramIcon sx={{ fontSize: 40 }}></InstagramIcon>
              <a
                href="https://www.instagram.com/ottosaudiovisual?igsh=MXVjcjQ1NDlsbzZ0MQ=="
                target="_blank"
                className="montserrat description"
              >
                @ottosaudiovisual
              </a>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 40 }}></WhatsAppIcon>
              <a
                href="https://wa.me/+351912857953?text="
                target="_blank"
                className="montserrat description"
              >
                +351 912857953
              </a>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: "100vh",
            width: { xs: "100%", md: "35%" },
            display: "flex", // Adicionado para ativar o flexbox
            alignItems: "center", // Alinhamento vertical
            justifyContent: "center", // Alinhamento horizontal
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1111.587854892722!2d-8.629471313983938!3d41.15913354807587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465a7be2c9ddb%3A0x587e7d547ac4a3d6!2sConsulado%20Geral%20do%20Brasil!5e0!3m2!1spt-PT!2spt!4v1720564417166!5m2!1spt-PT!2spt"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}
