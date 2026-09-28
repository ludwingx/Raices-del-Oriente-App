"use client";

import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
  Grid,
  Card,
  Divider,
  FormControl,
  Select,
  MenuItem,
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
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SpaIcon from "@mui/icons-material/Spa";
import CheckIcon from "@mui/icons-material/Check";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { bonsais, Bonsai } from "./plants";

export default function CareGuide() {
  // Filtro por tipo o entorno (todos, interior, exterior, coleccion)
  const [selectedType, setSelectedType] = useState<string>("all");

  // Estado para la especie elegida. Inicialmente null para exigir la selección previa solicitada por el usuario
  const [selectedBonsai, setSelectedBonsai] = useState<Bonsai | null>(null);

  // Referencia para scroll suave a la ficha de cuidados
  const careSheetRef = useRef<HTMLDivElement>(null);

  // Filtramos la lista de bonsáis disponibles según la categoría seleccionada
  const filteredBonsais =
    selectedType === "all"
      ? bonsais
      : bonsais.filter((b) => b.category === selectedType);

  const handleSelectBonsai = (bonsai: Bonsai) => {
    setSelectedBonsai(bonsai);
    setTimeout(() => {
      if (careSheetRef.current) {
        careSheetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleResetSelection = () => {
    setSelectedBonsai(null);
    const step1El = document.querySelector("#paso-seleccion");
    if (step1El) {
      step1El.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsAppQuestion = (bonsaiName: string) => {
    const message = encodeURIComponent(
      `¡Hola Raíces del Oriente! 🌿 Tengo una consulta sobre los cuidados de mi bonsái *${bonsaiName}*. ¿Podrían orientarme?`
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
          "linear-gradient(180deg, rgba(10,17,11,0.92) 0%, rgba(16,185,129,0.05) 50%, rgba(10,17,11,0.96) 100%)",
        borderTop: "1px solid rgba(52, 211, 153, 0.15)",
        borderBottom: "1px solid rgba(52, 211, 153, 0.15)",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* ENCABEZADO PRINCIPAL */}
        <Box sx={{ textAlign: "center", mb: 5 }} id="paso-seleccion">
          <Chip
            label="GUÍA BOTÁNICA PERSONALIZADA"
            className="badge-tag badge-gold"
            sx={{ mb: 1.5, fontSize: "0.75rem" }}
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
            Guía de Cuidados Específica por Planta
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
            Los bonsáis no tienen una receta única: un Ficus de interior requiere un tratamiento totalmente distinto a un Pino o Enebro de exterior.
            <strong style={{ color: "#34d399", display: "block", marginTop: "6px" }}>
              👉 Primero selecciona qué tipo o especie de bonsái tienes para desplegar su ficha de cuidados técnicos.
            </strong>
          </Typography>
        </Box>

        {/* ========================================================================= */}
        {/* PASO 1: FILTROS DE TIPO Y SELECTOR DE ESPECIE                             */}
        {/* ========================================================================= */}
        <Box
          sx={{
            mb: 4,
            p: { xs: 2.5, md: 3.5 },
            borderRadius: "24px",
            backgroundColor: "rgba(18, 30, 20, 0.65)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(52, 211, 153, 0.2)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          {/* Subtítulo del Paso 1 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  color: "#0a110b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                }}
              >
                1
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: "#f3f4f6",
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                }}
              >
                Selecciona la especie o tipo de tu bonsái
              </Typography>
            </Box>

            {/* Selector rápido dropdown para móviles o selección directa */}
            <Box sx={{ minWidth: { xs: "100%", sm: 260 } }}>
              <FormControl size="small" fullWidth>
                <Select
                  value={selectedBonsai?.id || ""}
                  displayEmpty
                  onChange={(e) => {
                    const found = bonsais.find((b) => b.id === Number(e.target.value));
                    if (found) handleSelectBonsai(found);
                  }}
                  sx={{
                    backgroundColor: "rgba(10, 17, 11, 0.8)",
                    color: "#f9fafb",
                    borderRadius: "12px",
                    border: "1px solid rgba(52, 211, 153, 0.3)",
                    fontSize: "0.85rem",
                    "& .MuiSvgIcon-root": { color: "#34d399" },
                  }}
                >
                  <MenuItem value="" disabled sx={{ color: "#9ca3af" }}>
                    🌿 O busca directamente en la lista...
                  </MenuItem>
                  {bonsais.map((b) => (
                    <MenuItem key={b.id} value={b.id}>
                      {b.name} ({b.category === "interior" ? "Interior" : "Exterior"})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Filtros de Tipo/Entorno */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
            <Typography
              variant="caption"
              sx={{
                width: "100%",
                color: "#9ca3af",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                mb: 0.5,
              }}
            >
              Filtrar por entorno / categoría:
            </Typography>
            {[
              { id: "all", label: "🌱 Todas las Especies", count: bonsais.length },
              {
                id: "interior",
                label: "🏡 Bonsáis de Interior",
                count: bonsais.filter((b) => b.category === "interior").length,
              },
              {
                id: "exterior",
                label: "☀️ Bonsáis de Exterior",
                count: bonsais.filter((b) => b.category === "exterior").length,
              },
              {
                id: "coleccion",
                label: "💎 Piezas de Colección",
                count: bonsais.filter((b) => b.category === "coleccion").length,
              },
            ].map((tab) => {
              const active = selectedType === tab.id;
              return (
                <Chip
                  key={tab.id}
                  label={`${tab.label} (${tab.count})`}
                  clickable
                  onClick={() => setSelectedType(tab.id)}
                  sx={{
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    px: 0.5,
                    backgroundColor: active
                      ? "rgba(16, 185, 129, 0.25)"
                      : "rgba(255, 255, 255, 0.05)",
                    color: active ? "#34d399" : "#d1d5db",
                    border: active
                      ? "1px solid #10b981"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "rgba(16, 185, 129, 0.15)",
                      borderColor: "#34d399",
                    },
                  }}
                />
              );
            })}
          </Box>

          {/* Grid de Especies para Selección Visual */}
          <Grid container spacing={2}>
            {filteredBonsais.map((bonsai) => {
              const isSelected = selectedBonsai?.id === bonsai.id;

              return (
                <Grid item xs={6} sm={4} md={2} key={bonsai.id}>
                  <Box
                    onClick={() => handleSelectBonsai(bonsai)}
                    sx={{
                      p: 1.5,
                      borderRadius: "16px",
                      cursor: "pointer",
                      textAlign: "center",
                      backgroundColor: isSelected
                        ? "rgba(16, 185, 129, 0.22)"
                        : "rgba(15, 25, 17, 0.75)",
                      border: isSelected
                        ? "2px solid #10b981"
                        : "1px solid rgba(52, 211, 153, 0.15)",
                      boxShadow: isSelected
                        ? "0 0 25px rgba(16, 185, 129, 0.45)"
                        : "none",
                      transform: isSelected ? "translateY(-4px)" : "none",
                      transition: "all 0.25s ease-in-out",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      position: "relative",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "#34d399",
                        backgroundColor: "rgba(16, 185, 129, 0.14)",
                      },
                    }}
                  >
                    {/* Badge de seleccionado */}
                    {isSelected && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          backgroundColor: "#10b981",
                          color: "#0a110b",
                          borderRadius: "50%",
                          width: 20,
                          height: 20,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
                        }}
                      >
                        <CheckIcon sx={{ fontSize: 14, fontWeight: 900 }} />
                      </Box>
                    )}

                    {/* Imagen de la especie */}
                    <Box
                      sx={{
                        width: "100%",
                        height: 90,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1,
                      }}
                    >
                      <Box
                        component="img"
                        src={bonsai.imageUrl}
                        alt={bonsai.name}
                        sx={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                          filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.6))",
                        }}
                      />
                    </Box>

                    {/* Nombre y datos */}
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          color: isSelected ? "#34d399" : "#f3f4f6",
                          fontSize: "0.82rem",
                          lineHeight: 1.25,
                          mb: 0.5,
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
                          fontSize: "0.68rem",
                          mb: 1,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {bonsai.scientificName}
                      </Typography>
                    </Box>

                    {/* Botón de acción */}
                    <Button
                      size="small"
                      variant={isSelected ? "contained" : "outlined"}
                      sx={{
                        fontSize: "0.7rem",
                        py: 0.3,
                        px: 1,
                        textTransform: "none",
                        borderRadius: "8px",
                        fontWeight: 700,
                        backgroundColor: isSelected
                          ? "#10b981 !important"
                          : "transparent !important",
                        borderColor: isSelected
                          ? "#10b981 !important"
                          : "rgba(52, 211, 153, 0.3) !important",
                        color: isSelected ? "#0a110b !important" : "#34d399 !important",
                      }}
                    >
                      {isSelected ? "Seleccionada ✓" : "Ver Cuidados"}
                    </Button>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* ========================================================================= */}
        {/* ESTADO VACÍO (CUANDO AÚN NO SE HA ELEGIDO NINGUNA PLANTA)                  */}
        {/* ========================================================================= */}
        {!selectedBonsai && (
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: "24px",
              textAlign: "center",
              background:
                "linear-gradient(135deg, rgba(20, 32, 22, 0.6) 0%, rgba(12, 20, 13, 0.8) 100%)",
              border: "1px dashed rgba(52, 211, 153, 0.3)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 70,
                mx: "auto",
                mb: 2,
                borderRadius: "50%",
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(52, 211, 153, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#34d399",
              }}
            >
              <TouchAppIcon sx={{ fontSize: 36 }} />
            </Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: 800, color: "#f9fafb", mb: 1.5 }}
            >
              Elige una planta arriba para ver sus cuidados específicos
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#9ca3af", maxWidth: 560, mx: "auto", mb: 3 }}
            >
              Cada especie tiene un comportamiento biológico único. Haz clic en cualquiera de las
              6 tarjetas de arriba para desbloquear su ficha técnica con pauta de riego, iluminación,
              sustrato y consejos para Santa Cruz, Cochabamba y La Paz.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="outlined"
                size="small"
                startIcon={<SpaIcon />}
                onClick={() => handleSelectBonsai(bonsais[0])}
                sx={{
                  borderColor: "rgba(52, 211, 153, 0.4) !important",
                  color: "#34d399 !important",
                }}
              >
                Ejemplo: Ficus Ginseng (Interior)
              </Button>
              <Button
                variant="outlined"
                size="small"
                startIcon={<WbSunnyIcon />}
                onClick={() => handleSelectBonsai(bonsais[1])}
                sx={{
                  borderColor: "rgba(245, 158, 11, 0.4) !important",
                  color: "#fbbf24 !important",
                }}
              >
                Ejemplo: Enebro Shimpaku (Exterior)
              </Button>
            </Box>
          </Box>
        )}

        {/* ========================================================================= */}
        {/* PASO 2: FICHA DETALLADA DE CUIDADOS ESPECÍFICOS                           */}
        {/* ========================================================================= */}
        {selectedBonsai && (
          <Box ref={careSheetRef} sx={{ scrollMarginTop: "100px" }}>
            <Card
              sx={{
                background:
                  "linear-gradient(155deg, rgba(22, 36, 24, 0.9) 0%, rgba(12, 20, 13, 0.96) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(52, 211, 153, 0.3)",
                borderRadius: "24px",
                p: { xs: 2.5, md: 4.5 },
                boxShadow:
                  "0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.15)",
                animation: "fadeIn 0.4s ease-in-out",
              }}
            >
              {/* Barra superior de estado de la Ficha */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1.5,
                  mb: 3,
                  pb: 2,
                  borderBottom: "1px solid rgba(52, 211, 153, 0.15)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      backgroundColor: "#34d399",
                      color: "#0a110b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "0.85rem",
                    }}
                  >
                    2
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 800,
                      color: "#34d399",
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                    }}
                  >
                    Ficha Técnica de Cuidados Específicos
                  </Typography>
                </Box>

                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<RestartAltIcon />}
                  onClick={handleResetSelection}
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.2) !important",
                    color: "#d1d5db !important",
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    "&:hover": {
                      borderColor: "#34d399 !important",
                      color: "#34d399 !important",
                    },
                  }}
                >
                  Cambiar o elegir otra planta
                </Button>
              </Box>

              {/* Cabecera del Árbol Seleccionado */}
              <Grid container spacing={3} alignItems="center" sx={{ mb: 4 }}>
                <Grid item xs={12} sm={3.5} md={3} sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      width: { xs: 140, sm: 160 },
                      height: { xs: 140, sm: 160 },
                      mx: "auto",
                      borderRadius: "20px",
                      background:
                        "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
                      border: "1px solid rgba(52, 211, 153, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 1.5,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                    }}
                  >
                    <Box
                      component="img"
                      src={selectedBonsai.imageUrl}
                      alt={selectedBonsai.name}
                      sx={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.6))",
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={8.5} md={9}>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
                    <span className="badge-tag badge-gold">
                      {selectedBonsai.badge || "Especie Destacada"}
                    </span>
                    <span className="badge-tag badge-green">
                      {selectedBonsai.category === "interior"
                        ? "Bonsái de Interior"
                        : selectedBonsai.category === "exterior"
                        ? "Bonsái de Exterior"
                        : "Colección Exclusiva"}
                    </span>
                    <span className="badge-tag badge-blue">
                      Dificultad: {selectedBonsai.difficulty}
                    </span>
                    <Chip
                      label={`Precio: Bs. ${selectedBonsai.price}`}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        color: "#34d399",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: "#f9fafb",
                      fontSize: { xs: "1.6rem", md: "2.1rem" },
                      lineHeight: 1.2,
                      mb: 0.5,
                    }}
                  >
                    {selectedBonsai.name}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{ fontStyle: "italic", color: "#34d399", mb: 1.5 }}
                  >
                    {selectedBonsai.scientificName} &bull; Edad estimada:{" "}
                    {selectedBonsai.estimatedAge} &bull; Maceta: {selectedBonsai.potType}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "#d1d5db", maxWidth: 750, lineHeight: 1.65 }}
                  >
                    {selectedBonsai.description}
                  </Typography>
                </Grid>
              </Grid>

              <Divider sx={{ borderColor: "rgba(52, 211, 153, 0.15)", mb: 4 }} />

              {/* Rejilla de Cuidados Específicos (6 Áreas Clave) */}
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

              {/* Botones de Acción al pie de la Ficha de Cuidados */}
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
                    Asesoría botánica vitalicia incluida con la compra de tu {selectedBonsai.name}.
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
                      "&:hover": {
                        borderColor: "#10b981 !important",
                        backgroundColor: "rgba(16, 185, 129, 0.15) !important",
                      },
                    }}
                  >
                    Consultar Cuidados por WhatsApp
                  </Button>

                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={scrollToCatalog}
                    sx={{
                      background: "linear-gradient(135deg, #10b981 0%, #059669 100%) !important",
                      color: "#ffffff !important",
                      fontWeight: 700,
                    }}
                  >
                    Ver en Catálogo (Bs. {selectedBonsai.price})
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
        )}
      </Container>
    </Box>
  );
}
