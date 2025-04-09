"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Box, Link } from "@mui/material";
import "./styles/fonts.css";
import "./styles/buttons.css";
import "./styles/transitions.css";
import Example from "./components/MyCarousel";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "./components/Footer";

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

    return () => observer.disconnect();
  }, []);

  return (
    <Box className="Main" sx={{ display: "column" }}>
      <Box
        sx={{
          display: "flex",
          maxHeight: "100dvh",
          marginBottom: "1.5rem",
          position: "relative",
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
            width: "100%",
            zIndex: 2,
            height: "100dvh",
            position: "relative",
          }}
        >
          <Box
            className="TextHome"
            sx={{
              width: { xs: "90%", sm: "80%", md: "80%" },
              position: "relative",
              zIndex: 2,
              backgroundColor: { xs: "rgba(0,0,0,0.7)", md: "transparent" },
              padding: { xs: "2rem", md: "0" },
              borderRadius: { xs: "12px", md: "0" },
            }}
          >
            <Image
              src="/images/logoprincipal.png"
              alt="logo"
              width={250}
              height={125}
            />
            <h1 className="bauhaus">{title}</h1>
            <p className="montserrat description">{description}</p>
            <Link href="/reserve" underline="none">
              <Box
                className="calltoaction montserrat"
                sx={{
                  marginTop: "2rem", // Aumentado o espaçamento superior
                  marginBottom: "1rem", // Adicionado espaçamento inferior
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "80%", sm: "60%", md: "50%" }, // Responsivo
                  padding: "0.8rem 1.5rem", // Aumentado o padding interno
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
            width: "100%", // Sempre 100% para cobrir todo o background em mobile
            height: "100dvh",
            overflow: "hidden",
            zIndex: { xs: 1, md: 1 }, // Ajustado z-index
            top: 0,
            left: 0,
          }}
        >
          <Image
            src="/images/IMG_3881.png"
            alt="ImagemHome"
            fill
            style={{
              objectFit: "cover",
              opacity: { xs: "0.3", md: "0.3" }, // Ajustada opacidade
            }}
            priority
          />
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
            maxHeight: "100dvh",
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
          flexDirection: "column", // Mudado para column para empilhar os elementos
          alignItems: "center", // Centraliza os elementos
        }}
        className="contatenos hidden"
        id="contatenos"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "90%", md: "80%" }, // Ajustada a largura
            marginTop: "6rem",
            alignItems: { xs: "center", md: "start" },
            marginBottom: "2rem", // Espaço entre o texto e o mapa
          }}
        >
          <Box sx={{ width: "100%", marginBottom: { xs: "2rem", md: "2rem" } }}>
            <h1 className="bauhaus">{contatenos}</h1>
            <p className="montserrat description">{contatdesc}</p>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem", // Espaço entre os ícones
              marginBottom: "2rem", // Espaço antes do mapa
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem", // Espaço entre ícone e texto
              }}
            >
              <InstagramIcon sx={{ fontSize: 40 }} />
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
                gap: "1rem", // Espaço entre ícone e texto
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 40 }} />
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

        {/* Container do Mapa */}
        <Box
          sx={{
            height: { xs: "50dvh", md: "60dvh" }, // Altura reduzida
            width: { xs: "90%", md: "80%" }, // Largura ajustada
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            marginBottom: "4rem", // Espaço no final da página
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1111.587854892722!2d-8.629471313983938!3d41.15913354807587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465a7be2c9ddb%3A0x587e7d547ac4a3d6!2sConsulado%20Geral%20do%20Brasil!5e0!3m2!1spt-PT!2spt!4v1720564417166!5m2!1spt-PT!2spt"
            style={{
              border: 0,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
