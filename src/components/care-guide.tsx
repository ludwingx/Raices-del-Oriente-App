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
import GrassIcon from "@mui/icons-material/Grass";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { speciesProfiles } from "./plants";

export default function CareGuide() {
  // Especie activa seleccionada: 'portulacaria' (0) o 'crassula' (1)
  const [activeSpeciesId, setActiveSpeciesId] = useState<string>("portulacaria");

  const selectedSpecies =
    speciesProfiles.find((s) => s.id === activeSpeciesId) || speciesProfiles[0];

  const openWhatsAppQuestion = (speciesName: string) => {
    const message = encodeURIComponent(
      `¡Hola Raíces del Oriente! 🌿 Tengo una consulta sobre los cuidados de mi bonsái de la especie *${speciesName}*. ¿Podrían orientarme?`
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
        {/* ENCABEZADO DE LA SECCIÓN */}
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
            Guía de Cuidados: Jade Enano vs. Jade Clásico
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#9ca3af",
              maxWidth: 750,
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.6,
            }}
          >
            Nuestra colección se especializa en las dos especies reinas del bonsái suculento:{" "}
            <strong style={{ color: "#34d399" }}>Portulacaria afra</strong> (hoja pequeña y ramas rojizas) y{" "}
            <strong style={{ color: "#34d399" }}>Crassula ovata</strong> (hoja ovalada ancha y tronco leñoso).
            Selecciona la especie para conocer su protocolo de cultivo exacto en Bolivia.
          </Typography>
        </Box>

        {/* ========================================================================= */}
        {/* SELECTOR DE LAS 2 ESPECIES BOTÁNICAS REALES                               */}
        {/* ========================================================================= */}
        <Grid container spacing={2.5} sx={{ mb: 4 }}>
          {/* OPCIÓN 1: PORTULACARIA AFRA */}
          <Grid item xs={12} md={6}>
            <Box
              onClick={() => setActiveSpeciesId("portulacaria")}
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: "20px",
                cursor: "pointer",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor:
                  activeSpeciesId === "portulacaria"
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(16, 28, 18, 0.6)",
                border:
                  activeSpeciesId === "portulacaria"
                    ? "2px solid #10b981"
                    : "1px solid rgba(52, 211, 153, 0.18)",
                boxShadow:
                  activeSpeciesId === "portulacaria"
                    ? "0 0 30px rgba(16, 185, 129, 0.35)"
                    : "none",
                transform: activeSpeciesId === "portulacaria" ? "translateY(-3px)" : "none",
                transition: "all 0.25s ease-in-out",
                "&:hover": {
                  borderColor: "#34d399",
                  backgroundColor: "rgba(16, 185, 129, 0.14)",
                },
              }}
            >
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1.5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "14px",
                        backgroundColor: "rgba(16, 185, 129, 0.25)",
                        border: "1px solid #10b981",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#34d399",
                      }}
                    >
                      <SpaIcon sx={{ fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: "#f9fafb", lineHeight: 1.2 }}>
                        Portulacaria afra
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#34d399", fontStyle: "italic" }}>
                        Jade Enano &bull; Spekboom &bull; Árbol de la Abundancia
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    label={activeSpeciesId === "portulacaria" ? "Seleccionada ✓" : "Ver Cuidados"}
                    size="small"
                    sx={{
                      backgroundColor:
                        activeSpeciesId === "portulacaria" ? "#10b981" : "rgba(255, 255, 255, 0.08)",
                      color: activeSpeciesId === "portulacaria" ? "#0a110b" : "#d1d5db",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                    }}
                  />
                </Box>

                <Typography variant="body2" sx={{ color: "#d1d5db", lineHeight: 1.6, mb: 2 }}>
                  Bonsái de ramas rojizas flexibles y diminutas hojas carnosas redondas (1-1.5 cm).
                  Alta tasa de ramificación para modelado fino en estilos Sokan, Moyogi y Neagari.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", pt: 1, borderTop: "1px solid rgba(52, 211, 153, 0.12)" }}>
                <span className="badge-tag badge-green">Hojas: 1 a 1.5 cm</span>
                <span className="badge-tag badge-gold">Tallos Rojizos</span>
                <span className="badge-tag badge-blue">5 Ejemplares en Tienda</span>
              </Box>
            </Box>
          </Grid>

          {/* OPCIÓN 2: CRASSULA OVATA */}
          <Grid item xs={12} md={6}>
            <Box
              onClick={() => setActiveSpeciesId("crassula")}
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: "20px",
                cursor: "pointer",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor:
                  activeSpeciesId === "crassula"
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(16, 28, 18, 0.6)",
                border:
                  activeSpeciesId === "crassula"
                    ? "2px solid #10b981"
                    : "1px solid rgba(52, 211, 153, 0.18)",
                boxShadow:
                  activeSpeciesId === "crassula"
                    ? "0 0 30px rgba(16, 185, 129, 0.35)"
                    : "none",
                transform: activeSpeciesId === "crassula" ? "translateY(-3px)" : "none",
                transition: "all 0.25s ease-in-out",
                "&:hover": {
                  borderColor: "#34d399",
                  backgroundColor: "rgba(16, 185, 129, 0.14)",
                },
              }}
            >
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1.5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "14px",
                        backgroundColor: "rgba(16, 185, 129, 0.25)",
                        border: "1px solid #10b981",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#34d399",
                      }}
                    >
                      <GrassIcon sx={{ fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: "#f9fafb", lineHeight: 1.2 }}>
                        Crassula ovata
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#34d399", fontStyle: "italic" }}>
                        Árbol de Jade Clásico &bull; Planta de la Fortuna
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    label={activeSpeciesId === "crassula" ? "Seleccionada ✓" : "Ver Cuidados"}
                    size="small"
                    sx={{
                      backgroundColor:
                        activeSpeciesId === "crassula" ? "#10b981" : "rgba(255, 255, 255, 0.08)",
                      color: activeSpeciesId === "crassula" ? "#0a110b" : "#d1d5db",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                    }}
                  />
                </Box>

                <Typography variant="body2" sx={{ color: "#d1d5db", lineHeight: 1.6, mb: 2 }}>
                  Tronco leñoso robusto y corteza grisácea con grandes hojas ovales carnosas (3-5 cm).
                  Resistente a la sequía extrema; almacena abundante agua en sus tejidos arborescentes.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", pt: 1, borderTop: "1px solid rgba(52, 211, 153, 0.12)" }}>
                <span className="badge-tag badge-green">Hojas: 3 a 5 cm</span>
                <span className="badge-tag badge-gold">Tronco Leñoso Grueso</span>
                <span className="badge-tag badge-blue">Jade Clásico en Tienda</span>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* ========================================================================= */}
        {/* CAJA COMPARATIVA RÁPIDA: ¿CÓMO DIFERENCIARLAS?                           */}
        {/* ========================================================================= */}
        <Box
          sx={{
            mb: 4.5,
            p: 2.5,
            borderRadius: "18px",
            backgroundColor: "rgba(10, 20, 12, 0.65)",
            border: "1px dashed rgba(52, 211, 153, 0.3)",
            display: "flex",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              p: 1.2,
              borderRadius: "12px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              color: "#34d399",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CompareArrowsIcon sx={{ fontSize: 26 }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#f3f4f6", mb: 0.3 }}>
              Diferencia Botánica Clave:
            </Typography>
            <Typography variant="body2" sx={{ color: "#9ca3af", fontSize: "0.88rem", lineHeight: 1.5 }}>
              La <strong style={{ color: "#34d399" }}>Portulacaria afra</strong> ramifica con gran facilidad gracias a sus tallos rojizos tiernos y hojas pequeñas (ideal para copa de bonsái tupida). La <strong style={{ color: "#34d399" }}>Crassula ovata</strong> desarrolla un tronco mucho más macizo y hojas tres veces más grandes, requiriendo riegos mucho más espaciados.
            </Typography>
          </Box>
        </Box>

        {/* ========================================================================= */}
        {/* FICHA TÉCNICA BOTÁNICA DE LA ESPECIE ACTIVA                              */}
        {/* ========================================================================= */}
        <Card
          sx={{
            background:
              "linear-gradient(155deg, rgba(20, 34, 22, 0.92) 0%, rgba(11, 18, 12, 0.98) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(52, 211, 153, 0.28)",
            borderRadius: "24px",
            p: { xs: 2.5, md: 4.5 },
            boxShadow:
              "0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.12)",
          }}
        >
          {/* Cabecera Técnica de la Especie */}
          <Box sx={{ mb: 3.5 }}>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1.5 }}>
              <span className="badge-tag badge-green">Familia: {selectedSpecies.family}</span>
              <span className="badge-tag badge-gold">Origen: {selectedSpecies.origin}</span>
              <span className="badge-tag badge-blue">Riego: {selectedSpecies.care.wateringFrequency}</span>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#f9fafb",
                fontSize: { xs: "1.7rem", md: "2.4rem" },
                letterSpacing: "-0.01em",
                mb: 0.5,
              }}
            >
              Manual de Cuidados: {selectedSpecies.commonName}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ fontStyle: "italic", color: "#34d399", mb: 1.5, fontWeight: 500 }}
            >
              {selectedSpecies.scientificName} &bull; Adaptabilidad: Óptima en Bolivia
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#d1d5db", maxWidth: 880, lineHeight: 1.7, fontSize: "0.95rem" }}
            >
              {selectedSpecies.summary}
            </Typography>
          </Box>

          <Divider sx={{ borderColor: "rgba(52, 211, 153, 0.15)", mb: 4 }} />

          {/* Rejilla de Cuidados Específicos (6 Paneles Clave) */}
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
                    label={selectedSpecies.care.wateringFrequency}
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
                  {selectedSpecies.care.watering}
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
                    label={selectedSpecies.care.sunlightType}
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
                  {selectedSpecies.care.sunlight}
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
                  {selectedSpecies.care.pruning}
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
                  {selectedSpecies.care.substrate}
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
                  {selectedSpecies.care.boliviaTips}
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
                  {selectedSpecies.care.commonMistakes}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Pie de Asistencia Botánica */}
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
                Asesoría botánica vitalicia incluida con tu bonsái de Raíces del Oriente.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              <Button
                variant="outlined"
                startIcon={<WhatsAppIcon />}
                onClick={() => openWhatsAppQuestion(selectedSpecies.commonName)}
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
                Consultar cuidados por WhatsApp
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
                Ver ejemplares en Catálogo
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
