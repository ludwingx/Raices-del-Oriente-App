"use client";

import React, { useState, useMemo } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Chip,
  Divider,
  InputAdornment,
  Grid,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PlaceIcon from "@mui/icons-material/Place";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { bonsais, Bonsai, categories } from "./plants";

export type CartItem = {
  bonsai: Bonsai;
  quantity: number;
};

const Catalog: React.FC = () => {
  // Estados de Carrito
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [deliveryCity, setDeliveryCity] = useState("Santa Cruz de la Sierra");
  const [customerNotes, setCustomerNotes] = useState("");
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Estados de Filtro y Búsqueda
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  // Estado de Ficha Botánica (Modal de Detalle)
  const [selectedBonsai, setSelectedBonsai] = useState<Bonsai | null>(null);

  // Totales calculados
  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.bonsai.price * item.quantity, 0);
  }, [cartItems]);

  const totalItemsCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  // Manejo de Carrito
  const toggleCart = (product: Bonsai) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.bonsai.id === product.id);
      if (exists) {
        return prev.filter((item) => item.bonsai.id !== product.id);
      } else {
        return [...prev, { bonsai: product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.bonsai.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.bonsai.id !== id));
  };

  const toggleCartView = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Filtrado y Ordenamiento
  const filteredBonsais = useMemo(() => {
    return bonsais
      .filter((bonsai) => {
        const matchesCategory =
          selectedCategory === "all" || bonsai.category === selectedCategory;
        const matchesSearch =
          bonsai.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          bonsai.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          bonsai.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        return 0; // featured
      });
  }, [selectedCategory, searchQuery, sortBy]);

  // Generador de Checkout hacia WhatsApp
  const handleWhatsAppCheckout = () => {
    const storePhone = "59178900000"; // Número oficial de ventas en Bolivia
    const itemsList = cartItems
      .map(
        (item, index) =>
          `${index + 1}. *${item.quantity}x ${item.bonsai.name}* (Ref: Bs. ${item.bonsai.price * item.quantity})`
      )
      .join("\n");

    const message = encodeURIComponent(
      `🌿 *¡Hola Raíces del Oriente! Quisiera confirmar un pedido:*\n\n` +
      `📦 *Especímenes seleccionados:*\n${itemsList}\n\n` +
      `💰 *Total a cancelar:* Bs. ${cartTotal.toFixed(2)}\n` +
      `📍 *Ciudad de entrega:* ${deliveryCity}\n` +
      (customerNotes.trim() ? `📝 *Instrucciones / Dedicatoria:* ${customerNotes}\n\n` : `\n`) +
      `¿Podrían confirmarme la disponibilidad y opciones de entrega en mi domicilio? ¡Muchas gracias!`
    );

    window.open(`https://wa.me/${storePhone}?text=${message}`, "_blank");
  };

  return (
    <Box id="catalogo" sx={{ pt: 4, pb: 12 }}>
      {/* Encabezado de Sección */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Chip
          label="COLECCIÓN VIVA EXCLUSIVA"
          className="badge-tag badge-green"
          sx={{ mb: 1.5, fontSize: "0.75rem" }}
        />
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "1.8rem", md: "2.6rem" },
            color: "#f9fafb",
            letterSpacing: "-0.02em",
            mb: 1.5,
          }}
        >
          Catálogo de Bonsáis Auténticos
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#9ca3af",
            maxWidth: 620,
            mx: "auto",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
          }}
        >
          Cada ejemplar es una obra de arte viva, cultivada pacientemente durante años.
          Precios expresados en Bolivianos (Bs.) con asesoría botánica incluida.
        </Typography>
      </Box>

      {/* Barra de Filtros, Búsqueda y Ordenamiento */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          justifyContent: "space-between",
          alignItems: { xs: "stretch", md: "center" },
          mb: 4,
          p: 2,
          borderRadius: "16px",
          background: "rgba(18, 30, 20, 0.6)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(52, 211, 153, 0.15)",
        }}
      >
        {/* Categorías (Chips) */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            overflowX: "auto",
            pb: { xs: 1, md: 0 },
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {categories.map((cat) => (
            <Chip
              key={cat.id}
              label={`${cat.icon} ${cat.label}`}
              clickable
              onClick={() => setSelectedCategory(cat.id)}
              sx={{
                fontWeight: 600,
                fontSize: "0.85rem",
                px: 1,
                py: 2,
                borderRadius: "10px",
                backgroundColor:
                  selectedCategory === cat.id
                    ? "rgba(16, 185, 129, 0.25) !important"
                    : "rgba(255, 255, 255, 0.05) !important",
                color: selectedCategory === cat.id ? "#34d399" : "#d1d5db",
                border:
                  selectedCategory === cat.id
                    ? "1px solid #10b981"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                "&:hover": {
                  backgroundColor: "rgba(16, 185, 129, 0.15) !important",
                },
              }}
            />
          ))}
        </Box>

        {/* Buscador y Ordenamiento */}
        <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
          <TextField
            size="small"
            placeholder="Buscar por especie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#34d399", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              minWidth: { xs: "100%", sm: 220 },
              "& .MuiOutlinedInput-root": {
                color: "#f3f4f6",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                borderRadius: "10px",
                fontSize: "0.85rem",
                "& fieldset": { borderColor: "rgba(52, 211, 153, 0.2)" },
                "&:hover fieldset": { borderColor: "#10b981" },
                "&.Mui-focused fieldset": { borderColor: "#10b981" },
              },
            }}
          />

          <TextField
            select
            size="small"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "featured" | "price-asc" | "price-desc")}
            sx={{
              minWidth: 150,
              display: { xs: "none", sm: "block" },
              "& .MuiOutlinedInput-root": {
                color: "#f3f4f6",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                borderRadius: "10px",
                fontSize: "0.85rem",
                "& fieldset": { borderColor: "rgba(52, 211, 153, 0.2)" },
              },
            }}
          >
            <MenuItem value="featured">Destacados</MenuItem>
            <MenuItem value="price-asc">Precio: Menor a Mayor</MenuItem>
            <MenuItem value="price-desc">Precio: Mayor a Menor</MenuItem>
          </TextField>
        </Box>
      </Box>

      {/* Grid de Bonsáis */}
      {filteredBonsais.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            px: 2,
            borderRadius: "16px",
            background: "rgba(20, 32, 22, 0.5)",
            border: "1px dashed rgba(52, 211, 153, 0.2)",
          }}
        >
          <Typography variant="h6" sx={{ color: "#9ca3af", mb: 1 }}>
            No se encontraron bonsáis con esos criterios
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
          >
            Restablecer Filtros
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredBonsais.map((bonsai) => {
            const isAdded = cartItems.some((item) => item.bonsai.id === bonsai.id);

            return (
              <Grid item xs={12} sm={6} md={4} key={bonsai.id}>
                <Card className="cardProduct">
                  {/* Badge Superior */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      zIndex: 2,
                      display: "flex",
                      gap: 0.8,
                    }}
                  >
                    {bonsai.badge && (
                      <span className="badge-tag badge-gold">
                        ★ {bonsai.badge}
                      </span>
                    )}
                    <span className="badge-tag badge-green">
                      {bonsai.estimatedAge}
                    </span>
                  </Box>

                  {/* Contenedor de Imagen con Efecto Hover */}
                  <Box
                    sx={{
                      position: "relative",
                      paddingTop: "80%",
                      overflow: "hidden",
                      background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedBonsai(bonsai)}
                  >
                    <CardMedia
                      component="img"
                      image={bonsai.imageUrl}
                      alt={bonsai.name}
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        maxWidth: "90%",
                        maxHeight: "90%",
                        objectFit: "contain",
                        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
                        transition: "transform 0.4s ease",
                        "&:hover": {
                          transform: "translate(-50%, -50%) scale(1.06)",
                        },
                      }}
                    />
                  </Box>

                  {/* Contenido Textual */}
                  <CardContent sx={{ pb: 1, pt: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 0.5 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontSize: "1.15rem",
                          color: "#f9fafb",
                          lineHeight: 1.2,
                        }}
                      >
                        {bonsai.name}
                      </Typography>
                    </Box>

                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        fontStyle: "italic",
                        color: "#34d399",
                        mb: 1.5,
                      }}
                    >
                      {bonsai.scientificName}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#9ca3af",
                        fontSize: "0.85rem",
                        lineHeight: 1.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        mb: 2,
                      }}
                    >
                      {bonsai.description}
                    </Typography>

                    {/* Ficha Resumida (Píldoras de Cuidado) */}
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
                      <Chip
                        icon={<WaterDropIcon sx={{ fontSize: "14px !important", color: "#60a5fa" }} />}
                        label={bonsai.difficulty}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          color: "#d1d5db",
                          fontSize: "0.72rem",
                        }}
                      />
                      <Chip
                        icon={<PlaceIcon sx={{ fontSize: "14px !important", color: "#34d399" }} />}
                        label={`Alto: ${bonsai.height}`}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          color: "#d1d5db",
                          fontSize: "0.72rem",
                        }}
                      />
                    </Box>
                  </CardContent>

                  {/* Acciones y Precio */}
                  <CardActions
                    sx={{
                      justifyContent: "space-between",
                      px: 2,
                      pb: 2,
                      pt: 1,
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <Box>
                      <Typography variant="caption" sx={{ color: "#6b7280", display: "block" }}>
                        Precio en Bolivia
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          color: "#10b981",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Bs. {bonsai.price}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => setSelectedBonsai(bonsai)}
                        sx={{
                          px: 1.5,
                          fontSize: "0.78rem",
                          borderColor: "rgba(52, 211, 153, 0.25) !important",
                        }}
                      >
                        Ficha
                      </Button>

                      <IconButton
                        size="medium"
                        onClick={() => toggleCart(bonsai)}
                        sx={{
                          color: isAdded ? "#ffffff" : "#34d399",
                          backgroundColor: isAdded
                            ? "#059669 !important"
                            : "rgba(16, 185, 129, 0.12) !important",
                          border: isAdded
                            ? "1px solid #10b981"
                            : "1px solid rgba(52, 211, 153, 0.3)",
                          "&:hover": {
                            backgroundColor: isAdded
                              ? "#047857 !important"
                              : "rgba(16, 185, 129, 0.25) !important",
                          },
                        }}
                      >
                        {isAdded ? <ShoppingBasketIcon /> : <AddShoppingCartIcon />}
                      </IconButton>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      {/* ========================================================
          BARRA FLOTANTE INFERIOR DE RESUMEN (STICKY CART PILL)
          ======================================================== */}
      {cartItems.length > 0 && (
        <Box
          className="stickyCartBar"
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            py: 1.5,
            px: { xs: 2, md: 4 },
            zIndex: 1200,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 900,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Información de Ítems */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  gap: -1,
                }}
              >
                {cartItems.slice(0, 3).map((item) => (
                  <Box
                    key={item.bonsai.id}
                    component="img"
                    src={item.bonsai.imageUrl}
                    alt={item.bonsai.name}
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      border: "2px solid #10b981",
                      backgroundColor: "#0d160e",
                      objectFit: "contain",
                      p: 0.3,
                      ml: -1,
                      "&:first-of-type": { ml: 0 },
                    }}
                  />
                ))}
                {cartItems.length > 3 && (
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      backgroundColor: "#065f46",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      ml: -1,
                    }}
                  >
                    +{cartItems.length - 3}
                  </Box>
                )}
              </Box>

              <Box>
                <Typography variant="body2" sx={{ color: "#34d399", fontWeight: 600 }}>
                  {totalItemsCount} {totalItemsCount === 1 ? "Bonsái seleccionado" : "Bonsáis seleccionados"}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#ffffff", fontWeight: 800, fontSize: { xs: "1.1rem", md: "1.3rem" } }}
                >
                  Bs. {cartTotal.toFixed(2)}
                </Typography>
              </Box>
            </Box>

            {/* Botón Ver Carrito */}
            <Button
              className="pulse-emerald"
              variant="contained"
              onClick={toggleCartView}
              sx={{
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%) !important",
                color: "#ffffff !important",
                px: { xs: 2.5, md: 4 },
                py: 1.2,
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: { xs: "0.9rem", md: "1rem" },
                display: "flex",
                gap: 1,
              }}
            >
              <ShoppingBasketIcon />
              Ver Carrito
            </Button>
          </Box>
        </Box>
      )}

      {/* ========================================================
          BOTTOM DRAWER DEL CARRITO DE COMPRAS
          ======================================================== */}
      <Drawer
        anchor="bottom"
        open={isCartOpen}
        onClose={toggleCartView}
        PaperProps={{
          sx: {
            maxHeight: "88vh",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            backgroundColor: "#0c150e !important",
            border: "1px solid rgba(52, 211, 153, 0.25)",
            p: { xs: 2.5, md: 4 },
          },
        }}
      >
        <Box sx={{ maxWidth: 840, mx: "auto", width: "100%", position: "relative" }}>
          {/* Cabecera del Drawer */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#f9fafb" }}>
                🌿 Tu Pedido de Bonsáis
              </Typography>
              <Typography variant="body2" sx={{ color: "#34d399" }}>
                {totalItemsCount} {totalItemsCount === 1 ? "árbol listo para entrega" : "árboles listos para entrega"}
              </Typography>
            </Box>
            <IconButton onClick={toggleCartView} sx={{ color: "#9ca3af" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: "rgba(52, 211, 153, 0.15)", mb: 3 }} />

          {/* Listado de Ítems */}
          <Box sx={{ maxHeight: "36vh", overflowY: "auto", pr: 1, mb: 3 }}>
            {cartItems.map(({ bonsai, quantity }) => (
              <Box
                key={bonsai.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 1.5,
                  mb: 1.5,
                  borderRadius: "14px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(52, 211, 153, 0.1)",
                }}
              >
                {/* Imagen y Título */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    component="img"
                    src={bonsai.imageUrl}
                    alt={bonsai.name}
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: "10px",
                      objectFit: "contain",
                      backgroundColor: "rgba(16, 185, 129, 0.08)",
                      p: 0.5,
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#f3f4f6", lineHeight: 1.2 }}>
                      {bonsai.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                      Bs. {bonsai.price} c/u &bull; {bonsai.potType}
                    </Typography>
                  </Box>
                </Box>

                {/* Controles de Cantidad y Precio */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(bonsai.id, -1)}
                      sx={{ color: "#d1d5db" }}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography sx={{ px: 1.2, fontWeight: 700, fontSize: "0.9rem", color: "#ffffff" }}>
                      {quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(bonsai.id, 1)}
                      sx={{ color: "#d1d5db" }}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography sx={{ fontWeight: 800, color: "#10b981", minWidth: 70, textAlign: "right" }}>
                    Bs. {(bonsai.price * quantity).toFixed(2)}
                  </Typography>

                  <IconButton
                    size="small"
                    onClick={() => removeFromCart(bonsai.id)}
                    sx={{ color: "#ef4444", "&:hover": { backgroundColor: "rgba(239, 68, 68, 0.15)" } }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Opciones de Entrega y Notas */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                size="small"
                label="Ciudad de Entrega en Bolivia"
                value={deliveryCity}
                onChange={(e) => setDeliveryCity(e.target.value)}
                sx={{
                  "& .MuiInputLabel-root": { color: "#9ca3af" },
                  "& .MuiOutlinedInput-root": {
                    color: "#f3f4f6",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    "& fieldset": { borderColor: "rgba(52, 211, 153, 0.2)" },
                  },
                }}
              >
                <MenuItem value="Santa Cruz de la Sierra">Santa Cruz de la Sierra (Envío local express)</MenuItem>
                <MenuItem value="La Paz / El Alto">La Paz / El Alto (Envío aéreo con empaque térmico)</MenuItem>
                <MenuItem value="Cochabamba">Cochabamba (Envío terrestre especializado)</MenuItem>
                <MenuItem value="Tarija / Sucre">Tarija / Sucre (Flota / encomienda segura)</MenuItem>
                <MenuItem value="Otra ciudad">Otra ciudad de Bolivia</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Dedicatoria o Notas de Entrega (Opcional)"
                placeholder="Ej: Para regalo de cumpleaños / horario de entrega"
                value={customerNotes}
                onChange={(e) => setCustomerNotes(e.target.value)}
                sx={{
                  "& .MuiInputLabel-root": { color: "#9ca3af" },
                  "& .MuiOutlinedInput-root": {
                    color: "#f3f4f6",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    "& fieldset": { borderColor: "rgba(52, 211, 153, 0.2)" },
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* Resumen de Importe */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
              borderTop: "1px solid rgba(52, 211, 153, 0.15)",
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ color: "#9ca3af" }}>
                Total a cancelar:
              </Typography>
              <Typography variant="caption" sx={{ color: "#34d399" }}>
                ✓ Incluye certificado de edad y guía de riego vitalicia
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 900, color: "#10b981" }}>
              Bs. {cartTotal.toFixed(2)}
            </Typography>
          </Box>

          {/* Botones de Finalización */}
          <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<QrCode2Icon />}
              onClick={() => setIsQrModalOpen(true)}
              sx={{
                py: 1.5,
                borderColor: "rgba(245, 158, 11, 0.4) !important",
                color: "#fbbf24 !important",
                "&:hover": {
                  borderColor: "#f59e0b !important",
                  backgroundColor: "rgba(245, 158, 11, 0.1) !important",
                },
              }}
            >
              Ver Datos de Pago QR Simple
            </Button>

            <Button
              fullWidth
              variant="contained"
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsAppCheckout}
              sx={{
                py: 1.5,
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%) !important",
                color: "#ffffff !important",
                fontSize: "1rem",
                fontWeight: 700,
              }}
            >
              Solicitar por WhatsApp (Confirmar Pedido)
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* ========================================================
          MODAL DE FICHA TÉCNICA BOTÁNICA (QUICK VIEW)
          ======================================================== */}
      {selectedBonsai && (
        <Dialog
          open={Boolean(selectedBonsai)}
          onClose={() => setSelectedBonsai(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: "#0d170f",
              color: "#f9fafb",
              borderRadius: "20px",
              border: "1px solid rgba(52, 211, 153, 0.25)",
              p: { xs: 2, md: 3 },
            },
          }}
        >
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 0, mb: 2 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#f9fafb" }}>
                {selectedBonsai.name}
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: "italic", color: "#34d399", fontSize: "0.85rem" }}>
                {selectedBonsai.scientificName}
              </Typography>
            </Box>
            <IconButton onClick={() => setSelectedBonsai(null)} sx={{ color: "#9ca3af" }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ p: 0 }}>
            <Grid container spacing={3}>
              {/* Imagen Grande */}
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    width: "100%",
                    height: 280,
                    borderRadius: "16px",
                    backgroundColor: "rgba(16, 185, 129, 0.06)",
                    border: "1px solid rgba(52, 211, 153, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={selectedBonsai.imageUrl}
                    alt={selectedBonsai.name}
                    sx={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.6))",
                    }}
                  />
                </Box>
                <Box sx={{ mt: 2, p: 2, borderRadius: "12px", background: "rgba(255,255,255,0.03)" }}>
                  <Typography variant="body2" sx={{ color: "#9ca3af", fontSize: "0.85rem" }}>
                    <strong>Maceta:</strong> {selectedBonsai.potType}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9ca3af", fontSize: "0.85rem" }}>
                    <strong>Edad estimada:</strong> {selectedBonsai.estimatedAge}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9ca3af", fontSize: "0.85rem" }}>
                    <strong>Altura:</strong> {selectedBonsai.height}
                  </Typography>
                </Box>
              </Grid>

              {/* Guía de Cuidados */}
              <Grid item xs={12} md={7}>
                <Typography variant="body1" sx={{ color: "#d1d5db", mb: 2.5, lineHeight: 1.6 }}>
                  {selectedBonsai.description}
                </Typography>

                <Typography variant="subtitle2" sx={{ color: "#34d399", fontWeight: 700, mb: 1.5, letterSpacing: "0.05em" }}>
                  GUÍA DE CUIDADOS ESPECÍFICA
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Box sx={{ display: "flex", gap: 1.5, p: 1.2, borderRadius: "10px", background: "rgba(16, 185, 129, 0.08)" }}>
                    <WaterDropIcon sx={{ color: "#60a5fa" }} />
                    <Box>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: "#f3f4f6", display: "block" }}>
                        Riego
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                        {selectedBonsai.care.watering}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: 1.5, p: 1.2, borderRadius: "10px", background: "rgba(245, 158, 11, 0.08)" }}>
                    <WbSunnyIcon sx={{ color: "#fbbf24" }} />
                    <Box>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: "#f3f4f6", display: "block" }}>
                        Iluminación Solar
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                        {selectedBonsai.care.sunlight}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: 1.5, p: 1.2, borderRadius: "10px", background: "rgba(59, 130, 246, 0.08)" }}>
                    <PlaceIcon sx={{ color: "#34d399" }} />
                    <Box>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: "#f3f4f6", display: "block" }}>
                        Ubicación Sugerida
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                        {selectedBonsai.care.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: 1.5, p: 1.2, borderRadius: "10px", background: "rgba(168, 85, 247, 0.08)" }}>
                    <ContentCutIcon sx={{ color: "#c084fc" }} />
                    <Box>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: "#f3f4f6", display: "block" }}>
                        Poda y Modelado
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                        {selectedBonsai.care.pruning}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions sx={{ p: 0, pt: 3, justifyContent: "space-between" }}>
            <Box>
              <Typography variant="caption" sx={{ color: "#6b7280", display: "block" }}>
                Precio en Bolivia
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 900, color: "#10b981" }}>
                Bs. {selectedBonsai.price}
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={<ShoppingBasketIcon />}
              onClick={() => {
                toggleCart(selectedBonsai);
                setSelectedBonsai(null);
              }}
              sx={{
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%) !important",
                color: "#ffffff !important",
                px: 3,
                fontWeight: 700,
              }}
            >
              {cartItems.some((item) => item.bonsai.id === selectedBonsai.id)
                ? "Quitar del Carrito"
                : "Añadir al Carrito"}
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {/* ========================================================
          MODAL DE INFORMACIÓN DE PAGO QR SIMPLE (BOLIVIA)
          ======================================================== */}
      <Dialog
        open={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#0e1810",
            color: "#f9fafb",
            borderRadius: "20px",
            border: "1px solid rgba(245, 158, 11, 0.3)",
            p: 3,
            textAlign: "center",
          },
        }}
      >
        <DialogTitle sx={{ p: 0, mb: 1, fontWeight: 800 }}>
          Pago con QR Simple &bull; Bolivia 🇧🇴
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <Typography variant="body2" sx={{ color: "#9ca3af", mb: 2 }}>
            Aceptamos transferencias interbancarias inmediatas sin comisión desde cualquier banco boliviano (BCP, BNB, Banco Unión, Mercantil Santa Cruz, etc.).
          </Typography>

          <Box
            sx={{
              p: 2,
              borderRadius: "16px",
              backgroundColor: "#ffffff",
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            }}
          >
            <QrCode2Icon sx={{ fontSize: 180, color: "#0c150e" }} />
            <Typography variant="caption" sx={{ color: "#1f2937", fontWeight: 700 }}>
              QR INTEROPERABLE BOLIVIA
            </Typography>
          </Box>

          <Box sx={{ textAlign: "left", background: "rgba(255,255,255,0.04)", p: 2, borderRadius: "12px", mb: 2 }}>
            <Typography variant="caption" sx={{ display: "block", color: "#fbbf24", fontWeight: 700 }}>
              DATOS DE TRANSFERENCIA DIRECTA:
            </Typography>
            <Typography variant="body2" sx={{ color: "#e5e7eb" }}>
              <strong>Titular:</strong> Raíces del Oriente Vivero
            </Typography>
            <Typography variant="body2" sx={{ color: "#e5e7eb" }}>
              <strong>NIT / CI:</strong> 8392019012
            </Typography>
            <Typography variant="body2" sx={{ color: "#e5e7eb" }}>
              <strong>Total a transferir:</strong> Bs. {cartTotal.toFixed(2)}
            </Typography>
          </Box>

          <Typography variant="caption" sx={{ color: "#34d399" }}>
            Al transferir, envíanos el comprobante por WhatsApp para preparar el empaque especial de tu bonsái.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 0, pt: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={() => {
              setIsQrModalOpen(false);
              handleWhatsAppCheckout();
            }}
            startIcon={<WhatsAppIcon />}
            sx={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%) !important",
              color: "#ffffff !important",
              fontWeight: 700,
            }}
          >
            Enviar Comprobante por WhatsApp
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Catalog;
