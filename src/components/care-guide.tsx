"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
  Grid,
  Card,
  Divider,
} from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import GrainIcon from "@mui/icons-material/Grain";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PublicIcon from "@mui/icons-material/Public";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SpaIcon from "@mui/icons-material/Spa";
import YardIcon from "@mui/icons-material/Yard";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import ParkIcon from "@mui/icons-material/Park";
import GrassIcon from "@mui/icons-material/Grass";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import { bonsais, Bonsai } from "./plants";

// Iconografía botánica exclusiva por especie (sin fotos de producto)
const speciesIcons: Record<number, React.ReactNode> = {
  1: <SpaIcon sx={{ fontSize: 24, color: "#34d399" }} />, // Ficus Retusa
  2: <ParkIcon sx={{ fontSize: 24, color: "#10b981" }} />, // Enebro Shimpaku
  3: <YardIcon sx={{ fontSize: 24, color: "#6ee7b7" }} />, // Olmo Chino
  4: <LocalFloristIcon sx={{ fontSize: 24, color: "#f472b6" }} />, // Carmona (Flores)
  5: <GrassIcon sx={{ fontSize: 24, color: "#a7f3d0" }} />, // Jade Enano
  6: <FilterVintageIcon sx={{ fontSize: 24, color: "#fbbf24" }} />, // Pino Negro
};

export default function CareGuide() {
  // Filtro por entorno o tipo (interior, exterior, colección, todos)
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Especie seleccionada actualmente para la guía (por defecto la primera)
  const [selectedBonsai, setSelectedBonsai] = useState<Bonsai>(bonsais[0]);

  const filteredSpecies =
    activeCategory === "all"
      ? bonsais
      : bonsais.filter((b) => b.category === activeCategory);

  const openWhatsAppQuestion = (bonsaiName: string) => {
    const message = encodeURIComponent(
      `¡Hola Raíces del Oriente! 🌿 Tengo una consulta sobre los cuidados de la especie *${bonsaiName}*. ¿Podrían orientarme?`
    );
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/59178900000?text=${message}`, "_blank");
    }
  };

  const scrollToCatalog = () => {
    const el = document.querySelector("#catalogo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="cuidados"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg, rgba(10,17,11,0.95) 0%, rgba(16,185,129,0.04) 50%, rgba(10,17,11,0.98) 100%)",
        borderTop: "1px solid rgba(52, 211, 153, 0.15)",
        borderBottom: "1px solid rgba(52, 211, 153, 0.15)",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* ENCABEZADO DE LA GUÍA */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Chip
            label="ENCICLOPEDIA BOTÁNICA VIRTUAL"
            className="badge-tag badge-gold"
            sx={{ mb: 1.5, fontSize: "0.75rem", letterSpacing: "0.06em" }}
          />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              color: "#f9fafb",
              fontSize: { xs: "1.85rem", md: "2.7rem" },
              letterSpacing: "-0.02em",
              mb: 1.5,
            }}
          >
            Guía de Cuidados por Especie
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#9ca3af",
              maxWidth: 720,
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.6,
            }}
          >
            Cada especie de árbol responde a patrones fisiológicos únicos. Selecciona a continuación
            el tipo o especie botánica que posees para consultar su manual técnico de riego, luz,
            sustrato y adaptación al clima en Bolivia.
          </Typography>
        </Box>

        {/* ========================================================================= */}
        {/* SELECTOR BOTÁNICO EXCLUSIVO POR ESPECIE (SIN CARDS REUTILIZADAS NI FOTOS) */}
        {/* ========================================================================= */}
        <Box
          sx={{
            mb: 4,
            p: { xs: 2, md: 3 },
            borderRadius: "20px",
            backgroundColor: "rgba(16, 28, 18, 0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(52, 211, 153, 0.18)",
          }}
        >
          {/* Pestañas de Filtro por Categoría / Hábitat */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", sm: "center" },
              gap: 1,
              flexWrap: "wrap",
              mb: 2.5,
              pb: 1.5,
              borderBottom: "1px solid rgba(52, 211, 153, 0.12)",
            }}
          >
            {[
              { id: "all", label: "🌿 Todas las Especies" },
              { id: "interior", label: "🏡 Especies de Interior" },
              { id: "exterior", label: "☀️ Especies de Exterior" },
              { id: "coleccion", label: "💎 Especies de Colección" },
            ].map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <Chip
                  key={cat.id}
                  label={cat.label}
                  clickable
                  onClick={() => setActiveCategory(cat.id)}
                  sx={{
                    borderRadius: "10px",
                    fontWeight: active ? 700 : 500,
                    fontSize: "0.82rem",
                    backgroundColor: active
                      ? "rgba(16, 185, 129, 0.25)"
                      : "rgba(255, 255, 255, 0.04)",
                    color: active ? "#34d399" : "#9ca3af",
                    border: active
                      ? "1px solid #10b981"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "rgba(16, 185, 129, 0.15)",
                      borderColor: "#34d399",
                      color: "#f3f4f6",
                    },
                  }}
                />
              );
            })}
          </Box>

          {/* Selector de Especies: Botones Botánicos estilizados tipo Selector */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 1.5,
            }}
          >
            {filteredSpecies.map((bonsai) => {
              const isSelected = selectedBonsai.id === bonsai.id;

              return (
                <Box
                  key={bonsai.id}
                  onClick={() => setSelectedBonsai(bonsai)}
                  sx={{
                    p: 1.8,
                    borderRadius: "14px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.8,
                    backgroundColor: isSelected
                      ? "rgba(16, 185, 129, 0.18)"
                      : "rgba(10, 18, 12, 0.7)",
                    border: isSelected
                      ? "2px solid #10b981"
                      : "1px solid rgba(52, 211, 153, 0.15)",
                    boxShadow: isSelected
                      ? "0 0 20px rgba(16, 185, 129, 0.35)"
                      : "none",
                    transform: isSelected ? "scale(1.01)" : "none",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      borderColor: "#34d399",
                      backgroundColor: isSelected
                        ? "rgba(16, 185, 129, 0.22)"
                        : "rgba(16, 185, 129, 0.08)",
                    },
                  }}
                >
                  {/* Icono Botánico estilizado */}
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      backgroundColor: isSelected
                        ? "rgba(16, 185, 129, 0.25)"
                        : "rgba(255, 255, 255, 0.05)",
                      border: isSelected
                        ? "1px solid #10b981"
                        : "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {speciesIcons[bonsai.id] || <SpaIcon sx={{ color: "#34d399" }} />}
                  </Box>

                  {/* Textos de la Especie */}
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: isSelected ? "#34d399" : "#f3f4f6",
                        fontSize: "0.92rem",
                        lineHeight: 1.25,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {bonsai.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        fontStyle: "italic",
                        color: "#9ca3af",
                        fontSize: "0.75rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {bonsai.scientificName}
                    </Typography>
                  </Box>

                  {/* Indicador de estado */}
                  <Box sx={{ flexShrink: 0 }}>
                    <Chip
                      label={isSelected ? "Activo ✓" : bonsai.category === "interior" ? "Interior" : "Exterior"}
                      size="small"
                      sx={{
                        fontSize: "0.68rem",
                        height: 22,
                        backgroundColor: isSelected
                          ? "#10b981"
                          : "rgba(255, 255, 255, 0.06)",
                        color: isSelected ? "#0a110b" : "#9ca3af",
                        fontWeight: 700,
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* ========================================================================= */}
        {/* FICHA TÉCNICA BOTÁNICA DE LA ESPECIE SELECCIONADA                        */}
        {/* ========================================================================= */}
        <Card
          sx={{
            background:
              "linear-gradient(155deg, rgba(20, 34, 22, 0.9) 0%, rgba(11, 18, 12, 0.96) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(52, 211, 153, 0.28)",
            borderRadius: "24px",
            p: { xs: 2.5, md: 4.5 },
            boxShadow:
              "0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.12)",
          }}
        >
          {/* Cabecera Técnica de la Especie (Sin foto de producto) */}
          <Box sx={{ mb: 3.5 }}>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1.5 }}>
              <span className="badge-tag badge-green">
                {selectedBonsai.category === "interior"
                  ? "🌿 Especie de Interior"
                  : selectedBonsai.category === "exterior"
                  ? "☀️ Especie de Exterior"
                  : "💎 Conífera de Colección"}
              </span>
              <span className="badge-tag badge-blue">
                Dificultad: {selectedBonsai.difficulty}
              </span>
              <span className="badge-tag badge-gold">
                Frecuencia: {selectedBonsai.care.wateringFrequency}
              </span>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#f9fafb",
                fontSize: { xs: "1.65rem", md: "2.3rem" },
                letterSpacing: "-0.01em",
                mb: 0.5,
              }}
            >
              Ficha Técnica: {selectedBonsai.name}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ fontStyle: "italic", color: "#34d399", mb: 1.5, fontWeight: 500 }}
            >
              Nombre científico: {selectedBonsai.scientificName} &bull; Adaptabilidad: Óptima en Bolivia
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#d1d5db", maxWidth: 880, lineHeight: 1.7, fontSize: "0.95rem" }}
            >
              {selectedBonsai.description}
            </Typography>
          </Box>

          <Divider sx={{ borderColor: "rgba(52, 211, 153, 0.15)", mb: 4 }} />

          {/* Rejilla de Cuidados Específicos (6 Paneles Botánicos Clave) */}
          <Grid container spacing={2.5}>
            {/* 1. RIEGO */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "16px",
                  background: "rgba(59, 130, 246, 0.07)",
                  border: "1px solid rgba(59, 130, 246, 0.25)",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <WaterDropIcon sx={{ color: "#60a5fa", fontSize: 24 }} />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#93c5fd", fontSize: "1.05rem" }}
                    >
                      Pauta de Riego
                    </Typography>
                  </Box>
                  <Chip
                    label={selectedBonsai.care.wateringFrequency}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      color: "#bfdbfe",
                      fontWeight: 600,
                      fontSize: "0.72rem",
                    }}
                  />
                </Box>
                <Typography variant="body2" sx={{ color: "#e2e8f0", lineHeight: 1.65 }}>
                  {selectedBonsai.care.watering}
                </Typography>
              </Box>
            </Grid>

            {/* 2. LUZ Y UBICACIÓN */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "16px",
                  background: "rgba(245, 158, 11, 0.07)",
                  border: "1px solid rgba(245, 158, 11, 0.25)",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <WbSunnyIcon sx={{ color: "#fbbf24", fontSize: 24 }} />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#fcd34d", fontSize: "1.05rem" }}
                    >
                      Luz Solar y Exposición
                    </Typography>
                  </Box>
                  <Chip
                    label={selectedBonsai.care.sunlightType}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(245, 158, 11, 0.2)",
                      color: "#fef3c7",
                      fontWeight: 600,
                      fontSize: "0.72rem",
                    }}
                  />
                </Box>
                <Typography variant="body2" sx={{ color: "#e2e8f0", lineHeight: 1.65 }}>
                  {selectedBonsai.care.sunlight}
                </Typography>
              </Box>
            </Grid>

            {/* 3. PODA Y PINZADO */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "16px",
                  background: "rgba(168, 85, 247, 0.07)",
                  border: "1px solid rgba(168, 85, 247, 0.25)",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <ContentCutIcon sx={{ color: "#c084fc", fontSize: 24 }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#d8b4fe", fontSize: "1.05rem" }}
                  >
                    Poda, Pinzado y Modelado
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#e2e8f0", lineHeight: 1.65 }}>
                  {selectedBonsai.care.pruning}
                </Typography>
              </Box>
            </Grid>

            {/* 4. SUSTRATO Y TRASPLANTE */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "16px",
                  background: "rgba(16, 185, 129, 0.07)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <GrainIcon sx={{ color: "#34d399", fontSize: 24 }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#6ee7b7", fontSize: "1.05rem" }}
                  >
                    Sustrato y Trasplante
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#e2e8f0", lineHeight: 1.65 }}>
                  {selectedBonsai.care.substrate}
                </Typography>
              </Box>
            </Grid>

            {/* 5. CONSEJO ESPECÍFICO PARA BOLIVIA */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "16px",
                  background: "rgba(16, 185, 129, 0.09)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <PublicIcon sx={{ color: "#34d399", fontSize: 24 }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#a7f3d0", fontSize: "1.05rem" }}
                  >
                    Adaptación al Clima en Bolivia 🇧🇴
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#f3f4f6", lineHeight: 1.65 }}>
                  {selectedBonsai.care.boliviaTips}
                </Typography>
              </Box>
            </Grid>

            {/* 6. ERRORES FRECUENTES A EVITAR */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "16px",
                  background: "rgba(239, 68, 68, 0.07)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <WarningAmberIcon sx={{ color: "#f87171", fontSize: 24 }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#fca5a5", fontSize: "1.05rem" }}
                  >
                    Error Frecuente a Evitar
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#fee2e2", lineHeight: 1.65 }}>
                  {selectedBonsai.care.commonMistakes}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Pie de Asesoría Botánica */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              mt: 4,
              pt: 3,
              borderTop: "1px solid rgba(52, 211, 153, 0.15)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineIcon sx={{ color: "#34d399" }} />
              <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                Guía botánica avalada por cultivadores locales de Raíces del Oriente.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              <Button
                variant="outlined"
                startIcon={<WhatsAppIcon />}
                onClick={() => openWhatsAppQuestion(selectedBonsai.name)}
                sx={{
                  borderColor: "rgba(52, 211, 153, 0.3) !important",
                  color: "#34d399 !important",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "#10b981 !important",
                    backgroundColor: "rgba(16, 185, 129, 0.15) !important",
                  },
                }}
              >
                Consultar dudas de esta especie por WhatsApp
              </Button>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={scrollToCatalog}
                sx={{
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%) !important",
                  color: "#ffffff !important",
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                Ver disponibilidad en Catálogo
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
