"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Drawer
} from "@mui/material";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete"; // Importar el ícono de eliminación
import { bonsais, Bonsai } from "./plants";
import Grid from '@mui/material/Grid2';
const Catalog: React.FC = () => {
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartItems, setCartItems] = useState<Bonsai[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (product: Bonsai) => {
    setCartItems((prev) => {
      const isAdded = prev.some((item) => item.id === product.id);

      if (!isAdded) {
        return [...prev, product];
      } else {
        return prev.filter((item) => item.id !== product.id);
      }
    });

    setCartTotal(
      (prevTotal) =>
        prevTotal +
        (cartItems.some((item) => item.id === product.id)
          ? -product.price
          : product.price)
    );
  };

  const toggleCartView = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Nueva función para eliminar un artículo del carrito desde el Drawer
  const removeFromCart = (product: Bonsai) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
    setCartTotal((prevTotal) => prevTotal - product.price);
  };

  return (
    <Box sx={{ mt: 20 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Bonsais recomendados para ti</Typography>
        <Button variant="contained">Ver todos</Button>
      </Box>

      <Grid container spacing={2}>
        {bonsais.map((bonsai: Bonsai) => (
          <Grid size={{ xs: 6, md: 4, sm: 6 }}key={bonsai.id}>
            <Card
              className="cardProduct"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "75%",
                  overflow: "hidden",
                }}
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
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <CardContent>
                <Typography variant="h6">{bonsai.name}</Typography>
                <Typography variant="body2">{bonsai.description}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                <Typography variant="h5">Bs.{bonsai.price}</Typography>
                <IconButton
                  size="large"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.087)",
                  }}
                  onClick={() => toggleCart(bonsai)}
                >
                  {cartItems.some((item) => item.id === bonsai.id) ? (
                    <ShoppingBasketIcon />
                  ) : (
                    <AddShoppingCartIcon />
                  )}
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {cartItems.length > 0 && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
            boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.2)",
            padding: 2
          }}
        >
          <Grid container >
            <Grid  size={8} sx={{ paddingLeft: "3%"}}>
              <Typography sx={{ color: "black" }}>
                {cartItems.length}{" "}
                {cartItems.length === 1 ? "Producto" : "Productos"}
              </Typography>
              <Typography
                sx={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                Bs. {cartTotal.toFixed(2)}
              </Typography>
            </Grid>
            <Grid
              size={4}
            >
              <Button className="buttonCart" onClick={toggleCartView}>
                Ver Carrito
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}

      <Drawer anchor="bottom" open={isCartOpen} onClose={toggleCartView} >
        <Box sx={{  p: 2 }}>
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={toggleCartView}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center" sx={{ mb: 4 }}
          >
            <Typography variant="h6" >Mi carrito </Typography>
          </Box>

          {cartItems.map((item) => (
           <Box  key={item.id} >
             <Grid container spacing={2}>
              <Grid
                size={8}

                  sx={{ display: "flex", alignItems: "center" }}>
                <Card
                  className="cardProduct"
                  sx={{ width: 80, height: 80, mr: 2, mb: 2 }}
                >
                  <CardMedia
                    component="img"
                    image={item.imageUrl}
                    alt={item.name}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Card>
                <Typography>{item.name}</Typography>
              </Grid>
              <Grid
                size={4}
                sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
              >
                <Typography  >
                  Bs. {item.price.toFixed(2)}
                </Typography>
                <IconButton onClick={() => removeFromCart(item)} size="small">
                  <DeleteIcon sx={{ color: "white" }} />{" "}
                  {/* Ícono de eliminación */}
                </IconButton>
              </Grid>
            </Grid>
           </Box>
          ))}
          <hr />
          <Box mt={2} sx={{ display: "flex", justifyContent: "flex-end"}}>
            <Typography variant="h6">
              Total: Bs. {cartTotal.toFixed(2)}
            </Typography>

          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4}}>
            <Button variant="contained" color="primary"  >Solicitar compra</Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Catalog;
