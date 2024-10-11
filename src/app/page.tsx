import Catalog from "@/components/catalog";
import { Box, Container, Grid, Typography, Button, Card, CardMedia } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 10,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Sección izquierda con título, subtítulo y botón */}
          <Grid item xs={12} md={8}>
            <Typography variant="h2" component="h1" gutterBottom>
              Título de la página
            </Typography>
            <Typography variant="h6" component="p"gutterBottom>
              Este es el subtítulo de la página, con una breve descripción.
            </Typography>
            <Grid item xs={12} >
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Llamada a la acción
            </Button>
            <Button variant="outlined" color="primary" sx={{ mt: 2, ml: 2 }}>
              Llamada a la página
            </Button>
            </Grid>
          </Grid>
          {/* Sección derecha con la imagen dentro de una Card */}
          <Grid item xs={12} md={4} display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }}>
            <Card className="cardHome"  >
              <CardMedia>
                <Image className="imageCardHome"
                  src="/plant1.png" // Reemplaza con la ruta de tu imagen
                  alt="Descripción de la imagen"
                  width={700} // Ajusta según tus necesidades
                  height={700} // Ajusta según tus necesidades
                />
              </CardMedia>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Catalog></Catalog>
    </Container>
  );
}
