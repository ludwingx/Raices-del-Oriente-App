import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

// Array de ejemplo con información de bonsais
const bonsais = [
  { id: 1, name: 'Bonsai 1', description: 'Este es un bonsai muy bonito.', imageUrl: '/plant1.png' },
  { id: 2, name: 'Bonsai 2', description: 'Este es un bonsai muy bonito.', imageUrl: '/plant2.png' },
  { id: 3, name: 'Bonsai 3', description: 'Este es un otrosai muy bonito.', imageUrl: '/plant3.png' },
  { id: 4, name: 'Bonsai 4', description: 'Este es un bonsai muy bonito.', imageUrl: '/plant4.png' },
  { id: 5, name: 'Bonsai 5', description: 'Este es un otrosai muy bonito.', imageUrl: '/plant5.png' },
];

const Catalog = () => {
  return (
    <Box sx={{ mt: 20 }}>
      {/* Contenedor para el título y el botón */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">
          Bonsais recomendados para ti
        </Typography>
        <Button variant="contained">
          Ver todos
        </Button>
      </Box>

      <Grid container spacing={2}>
        {bonsais.map((bonsai) => (
          <Grid item xs={12} sm={6} md={4} key={bonsai.id}>
            {/* Fijar tamaño de la Card */}
            <Card sx={{ height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                image={bonsai.imageUrl}
                alt={bonsai.name}
                sx={{ height: 140, objectFit: 'contain' }} // Fijar tamaño de la imagen
              />
              <CardContent>
                <Typography variant="h6">{bonsai.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {bonsai.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Catalog;
