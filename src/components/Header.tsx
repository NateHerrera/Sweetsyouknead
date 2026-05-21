import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItemButton, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 251, 247, 0.9)',
  boxShadow: '0 14px 40px rgba(107, 76, 67, 0.08)',
  borderBottom: '1px solid rgba(200, 166, 95, 0.22)',
  backdropFilter: 'blur(16px)',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", serif',
  fontSize: '2rem',
  fontWeight: 600,
  letterSpacing: '0.05em',
  color: '#4f372f',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.45rem',
  },
}));

const NavAnchor = styled('a')(({ theme }) => ({
  color: '#7a6258',
  fontFamily: '"Manrope", sans-serif',
  fontSize: '0.95rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  margin: '0 4px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '10px 14px',
  borderRadius: '999px',
  transition: 'all 0.25s ease',
  cursor: 'pointer',
  display: 'inline-block',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.88rem',
    padding: '8px 12px',
  },
  '&:hover': {
    backgroundColor: 'rgba(199, 130, 147, 0.12)',
    color: '#4f372f',
    textDecoration: 'none',
  },
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: '#7a6258',
  fontFamily: '"Manrope", sans-serif',
  fontSize: '0.95rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  margin: '0 4px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '10px 14px',
  borderRadius: '999px',
  transition: 'all 0.25s ease',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.88rem',
    padding: '8px 12px',
  },
  '&:hover': {
    backgroundColor: 'rgba(199, 130, 147, 0.12)',
    color: '#4f372f',
    textDecoration: 'none',
  },
}));

const Header: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  };

  const navItems = [
    { label: 'Home', href: location.pathname === '/' ? '#home' : '/', isAnchor: location.pathname === '/' },
    { label: 'Menu', href: '/menu', isAnchor: false },
    { label: 'Gallery', href: '/gallery', isAnchor: false },
    { label: 'My Story', href: location.pathname === '/' ? '#our-story' : '/', isAnchor: location.pathname === '/' },
    { label: 'Contact', href: location.pathname === '/' ? '#contact' : '/', isAnchor: location.pathname === '/' },
  ];

  const drawer = (
    <Box sx={{ width: 280, pt: 2, px: 1.5 }}>
      <Typography
        sx={{
          px: 2,
          pb: 2,
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.5rem',
          color: '#4f372f',
        }}
      >
        Simply Precious
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label} 
            component={item.isAnchor ? 'a' : Link}
            href={item.isAnchor ? item.href : undefined}
            to={!item.isAnchor ? item.href : undefined}
            sx={{ 
              borderRadius: '999px',
              mb: 0.5,
              color: '#5A3E22',
              '&:hover': { backgroundColor: 'rgba(199, 130, 147, 0.1)' }
            }}
            onClick={(e) => {
              handleDrawerToggle();
              if (item.label === 'Home' && location.pathname !== '/') {
                handleHomeClick();
              }
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                '& .MuiTypography-root': {
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: { xs: 72, md: 86 },
            px: { xs: 2, sm: 3, md: 5 },
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Logo variant="h1">
              Simply Precious
            </Logo>
            <Typography
              sx={{
                fontSize: '0.72rem',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: '#b28a58',
              }}
            >
              Bakery and Custom Cakes
            </Typography>
          </Box>
          
          {isMobile ? (
            <IconButton
              color="default"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{
                color: '#4f372f',
                border: '1px solid rgba(200, 166, 95, 0.35)',
                backgroundColor: 'rgba(255,255,255,0.65)',
                width: 42,
                height: 42,
              }}
            >
              ☰
            </IconButton>
          ) : (
            <Box
              sx={{
                display: 'flex',
                gap: 0.5,
                alignItems: 'center',
                p: 0.75,
                borderRadius: '999px',
                backgroundColor: 'rgba(255,255,255,0.55)',
                border: '1px solid rgba(200, 166, 95, 0.2)',
              }}
            >
              {location.pathname === '/' ? (
                <NavAnchor href="#home">
                  Home
                </NavAnchor>
              ) : (
                <NavLink to="/" onClick={handleHomeClick}>
                  Home
                </NavLink>
              )}
              
              <NavLink to="/menu">
                Menu
              </NavLink>
              
              <NavLink to="/gallery">
                Gallery
              </NavLink>
              
              {location.pathname === '/' ? (
                <NavAnchor href="#our-story">
                  My Story
                </NavAnchor>
              ) : (
                <NavLink to="/">
                  My Story
                </NavLink>
              )}
              
              {location.pathname === '/' ? (
                <NavAnchor href="#contact">
                  Contact
                </NavAnchor>
              ) : (
                <NavLink to="/">
                  Contact
                </NavLink>
              )}
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>
      <Box sx={{ height: { xs: 72, md: 86 } }} />
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            backgroundColor: 'rgba(255, 251, 247, 0.98)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header; 
