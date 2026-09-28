'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SpaIcon from '@mui/icons-material/Spa';
import VerifiedIcon from '@mui/icons-material/Verified';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

interface Props {
  window?: () => Window;
}

const drawerWidth = 280;

const navItems = [
  { label: 'Inicio', href: '#inicio', icon: <HomeIcon sx={{ color: '#34d399' }} /> },
  { label: 'Catálogo', href: '#catalogo', icon: <LocalFloristIcon sx={{ color: '#34d399' }} /> },
  { label: 'Guía de Cuidados', href: '#cuidados', icon: <SpaIcon sx={{ color: '#34d399' }} /> },
  { label: 'Garantía Botánica', href: '#garantias', icon: <VerifiedIcon sx={{ color: '#34d399' }} /> },
  { label: 'Contacto', href: '#contacto', icon: <ContactPhoneIcon sx={{ color: '#34d399' }} /> },
];

export default function Navbar(props: Props) {
  const { window: windowProp } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);

    // Si hay algún modal o drawer abierto, cerrar
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (typeof window !== 'undefined') {
        window.history.pushState(null, '', href);
      }
    } else if (typeof window !== 'undefined') {
      window.location.hash = href;
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      '¡Hola Raíces del Oriente! 🌿 Quisiera consultar sobre la disponibilidad de bonsáis y envíos.'
    );
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/59178900000?text=${message}`, '_blank');
    }
  };

  const openCartDrawer = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cart-drawer'));
    }
  };

  const drawer = (
    <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
            }}
          >
            <SpaIcon sx={{ color: '#ffffff', fontSize: 20 }} />
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#f9fafb', lineHeight: 1.1 }}>
              Raíces del Oriente
            </Typography>
            <Typography variant="caption" sx={{ color: '#34d399', fontSize: '0.65rem', letterSpacing: '0.05em' }}>
              ARTE BOTÁNICO
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#9ca3af' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: 'rgba(52, 211, 153, 0.15)', mb: 2 }} />

      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component="a"
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              sx={{
                borderRadius: '12px',
                py: 1.2,
                px: 2,
                '&:hover': {
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: { fontSize: '0.95rem', fontWeight: 500, color: '#f3f4f6' },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemButton
            onClick={() => {
              setMobileOpen(false);
              openCartDrawer();
            }}
            sx={{
              borderRadius: '12px',
              py: 1.2,
              px: 2,
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              '&:hover': {
                backgroundColor: 'rgba(16, 185, 129, 0.25)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 38 }}>
              <ShoppingBagOutlinedIcon sx={{ color: '#34d399' }} />
            </ListItemIcon>
            <ListItemText
              primary="Mi Carrito de Pedido"
              primaryTypographyProps={{
                sx: { fontSize: '0.95rem', fontWeight: 600, color: '#34d399' },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>

      <Box sx={{ pt: 2, borderTop: '1px solid rgba(52, 211, 153, 0.15)' }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<WhatsAppIcon />}
          onClick={openWhatsApp}
          sx={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%) !important',
            color: '#ffffff !important',
            py: 1.2,
            mb: 2,
          }}
        >
          Asesoría WhatsApp
        </Button>
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: '#6b7280' }}>
          Santa Cruz de la Sierra, Bolivia 🇧🇴
        </Typography>
      </Box>
    </Box>
  );

  const container = windowProp !== undefined ? () => windowProp().document.body : undefined;

  return (
    <AppBar position="sticky" elevation={0} sx={{ zIndex: 1100 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, justifyContent: 'space-between' }}>
          {/* Logo y Nombre de Marca */}
          <Box
            component="a"
            href="#inicio"
            onClick={(e) => handleScroll(e, '#inicio')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.45)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(-5deg) scale(1.05)',
                },
              }}
            >
              <SpaIcon sx={{ color: '#ffffff', fontSize: 24 }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.05rem', md: '1.25rem' },
                  color: '#f9fafb',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                Raíces del Oriente
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  color: '#34d399',
                  fontWeight: 600,
                  fontSize: '0.68rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Boutique de Bonsáis &bull; Bolivia
              </Typography>
            </Box>
          </Box>

          {/* Menú de Navegación de Escritorio */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component="a"
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                sx={{
                  color: '#e5e7eb !important',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  px: 2,
                  py: 0.8,
                  borderRadius: '10px',
                  backgroundColor: 'transparent !important',
                  textDecoration: 'none !important',
                  '&:hover': {
                    color: '#34d399 !important',
                    backgroundColor: 'rgba(16, 185, 129, 0.08) !important',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Botones de Acción (Carrito y WhatsApp) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<ShoppingBagOutlinedIcon />}
              onClick={openCartDrawer}
              sx={{
                borderColor: 'rgba(52, 211, 153, 0.3) !important',
                color: '#34d399 !important',
                backgroundColor: 'rgba(16, 185, 129, 0.08) !important',
                px: 1.8,
                py: 0.8,
                fontWeight: 600,
                fontSize: '0.82rem',
                '&:hover': {
                  backgroundColor: 'rgba(16, 185, 129, 0.18) !important',
                  borderColor: '#10b981 !important',
                },
              }}
            >
              Carrito
            </Button>

            <Button
              variant="contained"
              size="medium"
              startIcon={<WhatsAppIcon sx={{ fontSize: '1.1rem !important' }} />}
              onClick={openWhatsApp}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                background: 'linear-gradient(135deg, #059669 0%, #047857 100%) !important',
                color: '#ffffff !important',
                px: 2.2,
                py: 0.9,
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              Consultas
            </Button>

            {/* Botón Hamburguesa Móvil */}
            <IconButton
              color="inherit"
              aria-label="abrir menú"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                color: '#f9fafb',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '10px',
                p: 1,
                border: '1px solid rgba(52, 211, 153, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer de Navegación Lateral para Móviles */}
      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
