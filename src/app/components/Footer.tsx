"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        textAlign: "center",
        padding: "1.5rem 1rem",
        marginTop: "2rem",
        fontSize: "0.9rem",
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
        Este site é um projeto de portfólio pessoal e não está finalizado.
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
        As informações aqui apresentadas são incompletas e não representam um
        serviço real.
      </Typography>
      <Typography variant="body2">
        Nenhuma cobrança ou marcação será realizada de verdade neste site.
      </Typography>
    </Box>
  );
}
