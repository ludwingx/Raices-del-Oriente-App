import Catalog from "@/components/catalog";
import CareGuide from "@/components/care-guide";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Chip,
  Rating,
  Divider,
} from "@mui/material";
import Image from "next/image";
import SpaIcon from "@mui/icons-material/Spa";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import YardIcon from "@mui/icons-material/Yard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* ========================================================
          1. HERO SECTION (BANNER PRINCIPAL)
          ======================================================== */}
      <Box
        id="inicio"
        sx={{
          position: "relative",
          pt: { xs: 6, md: 10 },
          pb: { xs: 8, md: 12 },
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            {/* Columna Izquierda: Mensaje y Llamadas a la Acción */}
            <Grid item xs={12} md={7}>
              {/* Badge Superior */}
              <Box sx={{ display: "inline-flex", mb: 2 }}>
                <Chip
                  icon={<SpaIcon sx={{ fontSize: "16px !important", color: "#34d399" }} />}
                  label="ARTE BOTÁNICO & BONSAIS EN BOLIVIA"
                  className="badge-tag badge-green"
                  sx={{ py: 1.8, px: 0.5, fontSize: "0.78rem" }}
                />
              </Box>

              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.3rem", sm: "3.2rem", md: "3.8rem" },
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: "#f9fafb",
                  mb: 2.5,
                }}
              >
                La armonía de la naturaleza en tu{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  espacio vivo
                </span>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#9ca3af",
                  fontSize: { xs: "1.02rem", md: "1.15rem" },
                  lineHeight: 1.65,
                  mb: 4,
                  maxWidth: 580,
                }}
              >
                Cultivamos árboles miniatura exclusivos con paciencia y maestría.
                Cada bonsái incluye maceta de autor, guía de riego especializada
                y asesoría botánica vitalicia para tu hogar u oficina en Bolivia.
              </Typography>

              {/* Botones de Acción */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 5 }}>
                <Button
                  variant="contained"
                  size="large"
                  href="#catalogo"
                  endIcon={<ArrowDownwardIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #10b981 0%, #047857 100%) !important",
                    color: "#ffffff !important",
                    px: 3.5,
                    py: 1.4,
                    fontSize: "1rem",
                    fontWeight: 700,
                    borderRadius: "14px !important",
                    boxShadow: "0 6px 20px rgba(16, 185, 129, 0.4) !important",
                  }}
                >
                  Explorar Catálogo
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="#cuidados"
                  sx={{
                    borderColor: "rgba(52, 211, 153, 0.35) !important",
                    color: "#6ee7b7 !important",
                    px: 3,
                    py: 1.4,
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: "14px !important",
                    backgroundColor: "rgba(16, 185, 129, 0.06) !important",
                  }}
                >
                  Guía de Cuidados
                </Button>
              </Box>

              {/* Métricas y Prueba Social */}
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 3, sm: 5 },
                  pt: 3,
                  borderTop: "1px solid rgba(52, 211, 153, 0.15)",
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#f9fafb" }}>
                    +1,200
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                    Bonsáis Entregados
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#34d399" }}>
                    30 Días
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                    Garantía de Adaptación
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#fbbf24" }}>
                    100%
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                    Asesoría Vitalicia
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Columna Derecha: Tarjeta 3D del Bonsái Destacado */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Card
                className="cardHome"
                sx={{
                  maxWidth: 380,
                  width: "100%",
                  p: 3,
                }}
              >
                {/* Badge Superior */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <span className="badge-tag badge-gold">
                    ★ BONSAI DESTACADO
                  </span>
                  <span className="badge-tag badge-green">
                    7 AÑOS
                  </span>
                </Box>

                {/* Imagen del Bonsái */}
                <CardMedia sx={{ display: "flex", justifyContent: "center", my: 1 }}>
                  <Image
                    className="imageCardHome"
                    src="/plant1.png"
                    alt="Bonsái Ficus Retusa Ginseng - Raíces del Oriente"
                    width={480}
                    height={480}
                    priority
                    style={{
                      maxHeight: 280,
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </CardMedia>

                {/* Info del Bonsái en Tarjeta */}
                <Box sx={{ mt: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#f9fafb", lineHeight: 1.2 }}>
                    Ficus Retusa Ginseng
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#34d399", fontStyle: "italic", display: "block", mb: 1 }}>
                    Ficus microcarpa var. nitida
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <Rating value={5} readOnly size="small" sx={{ color: "#fbbf24" }} />
                    <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                      (4.9 de 38 clientes)
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      pt: 1.5,
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <Box>
                      <Typography variant="caption" sx={{ color: "#6b7280", display: "block" }}>
                        Inversión en Bolivia
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 900, color: "#10b981" }}>
                        Bs. 180
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      href="#catalogo"
                      sx={{
                        background: "linear-gradient(135deg, #10b981 0%, #059669 100%) !important",
                        color: "#ffffff !important",
                        fontWeight: 700,
                        px: 2.5,
                      }}
                    >
                      Ver en Tienda
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ========================================================
          2. SECCIÓN DEL CATÁLOGO INTERACTIVO & CARRITO
          ======================================================== */}
      <Container maxWidth="lg">
        <Catalog />
      </Container>

      {/* ========================================================
          3. GUÍA ESENCIAL DE CUIDADOS BOTÁNICOS (#cuidados)
          ======================================================== */}
      <CareGuide />

      {/* ========================================================
          4. POR QUÉ ELEGIR RAÍCES DEL ORIENTE (#garantias)
          ======================================================== */}
      <Box id="garantias" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="COMPROMISO & CONFIANZA"
              className="badge-tag badge-green"
              sx={{ mb: 1.5 }}
            />
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 800, color: "#f9fafb", fontSize: { xs: "1.8rem", md: "2.6rem" }, mb: 1.5 }}
            >
              ¿Por qué confiar en Raíces del Oriente?
            </Typography>
            <Typography variant="body1" sx={{ color: "#9ca3af", maxWidth: 600, mx: "auto" }}>
              Nuestra pasión es que disfrutes de tu árbol durante décadas. Respaldamos cada venta con garantías reales.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2.5,
                  p: 3,
                  borderRadius: "16px",
                  background: "rgba(18, 30, 20, 0.5)",
                  border: "1px solid rgba(52, 211, 153, 0.15)",
                }}
              >
                <LocalShippingIcon sx={{ color: "#34d399", fontSize: 36, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#f9fafb", mb: 0.5 }}>
                    Envío Especializado y Seguro
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9ca3af", lineHeight: 1.6 }}>
                    Empacamos cada árbol en cajas de protección reforzadas con anclaje de maceta para que viaje intacto a Santa Cruz, La Paz, Cochabamba y toda Bolivia.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2.5,
                  p: 3,
                  borderRadius: "16px",
                  background: "rgba(18, 30, 20, 0.5)",
                  border: "1px solid rgba(52, 211, 153, 0.15)",
                }}
              >
                <VerifiedUserIcon sx={{ color: "#fbbf24", fontSize: 36, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#f9fafb", mb: 0.5 }}>
                    Garantía de Adaptación de 30 Días
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9ca3af", lineHeight: 1.6 }}>
                    Si tu bonsái muestra signos de estrés durante sus primeras 4 semanas, nuestros expertos te brindan diagnóstico botánico gratuito y plan de recuperación.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2.5,
                  p: 3,
                  borderRadius: "16px",
                  background: "rgba(18, 30, 20, 0.5)",
                  border: "1px solid rgba(52, 211, 153, 0.15)",
                }}
              >
                <YardIcon sx={{ color: "#34d399", fontSize: 36, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#f9fafb", mb: 0.5 }}>
                    Macetas de Gres y Cerámica de Autor
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9ca3af", lineHeight: 1.6 }}>
                    No usamos macetas de plástico comercial. Cada árbol se entrega listo para lucirse en cerámica cocida a alta temperatura con excelente drenaje.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2.5,
                  p: 3,
                  borderRadius: "16px",
                  background: "rgba(18, 30, 20, 0.5)",
                  border: "1px solid rgba(52, 211, 153, 0.15)",
                }}
              >
                <SupportAgentIcon sx={{ color: "#60a5fa", fontSize: 36, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#f9fafb", mb: 0.5 }}>
                    Asesoría Botánica Vitalicia
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9ca3af", lineHeight: 1.6 }}>
                    Formarás parte de la comunidad Raíces del Oriente. Envíanos fotos por WhatsApp cuando quieras podar o trasplantar y te guiaremos paso a paso.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ========================================================
          5. FOOTER & CONTACTO (#contacto)
          ======================================================== */}
      <Box
        id="contacto"
        sx={{
          pt: 8,
          pb: 12,
          borderTop: "1px solid rgba(52, 211, 153, 0.15)",
          background: "rgba(8, 14, 9, 0.95)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Columna Marca */}
            <Grid item xs={12} md={5}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SpaIcon sx={{ color: "#ffffff", fontSize: 22 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: "#f9fafb" }}>
                  Raíces del Oriente
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#9ca3af", maxWidth: 380, lineHeight: 1.6, mb: 2.5 }}>
                Boutique botánica dedicada a la propagación, cultivo y difusión del arte del bonsái en Bolivia. Árboles vivos, sustratos premium y accesorios de cultivo.
              </Typography>
              <Typography variant="caption" sx={{ color: "#34d399", fontWeight: 600 }}>
                📍 Santa Cruz de la Sierra &bull; Envíos a toda Bolivia 🇧🇴
              </Typography>
            </Grid>

            {/* Columna Horarios */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#f9fafb", mb: 2 }}>
                Atención y Visitas
              </Typography>
              <Typography variant="body2" sx={{ color: "#9ca3af", mb: 1 }}>
                <strong>Lunes a Sábado:</strong> 09:00 - 18:30
              </Typography>
              <Typography variant="body2" sx={{ color: "#9ca3af", mb: 2 }}>
                <strong>Domingos:</strong> Previa cita por WhatsApp
              </Typography>
              <Typography variant="caption" sx={{ color: "#fbbf24" }}>
                Visitas al vivero con cita coordinada para asesoría personalizada.
              </Typography>
            </Grid>

            {/* Columna Enlaces de Contacto */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#f9fafb", mb: 2 }}>
                Canal Directo de Ventas
              </Typography>
              <Typography variant="body2" sx={{ color: "#9ca3af", mb: 2 }}>
                ¿Tienes dudas sobre qué bonsái elegir para tu espacio? Escríbenos directamente y te enviamos fotos actuales de los ejemplares disponibles.
              </Typography>
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/59178900000?text=Hola%20Raices%20del%20Oriente,%20quisiera%20asesoria%20para%20elegir%20un%20bonsai"
                target="_blank"
                sx={{
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%) !important",
                  color: "#ffffff !important",
                  fontWeight: 700,
                  py: 1.2,
                  px: 3,
                }}
              >
                Chatear con un Botánico
              </Button>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: "rgba(52, 211, 153, 0.12)", mb: 3 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography variant="caption" sx={{ color: "#6b7280" }}>
              &copy; {new Date().getFullYear()} Raíces del Oriente. Todos los derechos reservados.
            </Typography>
            <Typography variant="caption" sx={{ color: "#6b7280" }}>
              Pagos seguros mediante QR Simple interbancario &bull; Bolivia
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
