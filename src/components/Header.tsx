import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 248, 220, 0.95)',
  boxShadow: 'none',
  borderBottom: '2px solid #DEB887',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Caveat", cursive',
  fontSize: '2.5rem',
  color: '#b57edc',
  textAlign: 'center',
  flexGrow: 1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.8rem',
  },
  '&::before, &::after': {
    content: '""',
    display: 'inline-block',
    width: '30px',
    height: '30px',
    backgroundImage: 'url("/wheat-icon.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    margin: '0 15px',
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      width: '20px',
      height: '20px',
      margin: '0 8px',
    },
  },
}));



const NavAnchor = styled('a')(({ theme }) => ({
  color: '#b57edc',
  fontFamily: '"Quicksand", sans-serif',
  fontSize: '1.1rem',
  margin: '0 10px',
  textDecoration: 'none',
  padding: '6px 16px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
  display: 'inline-block',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    margin: '0 5px',
    padding: '4px 12px',
  },
  '&:hover': {
    backgroundColor: '#d1a6e7',
    textDecoration: 'none',
  },
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: '#b57edc',
  fontFamily: '"Quicksand", sans-serif',
  fontSize: '1.1rem',
  margin: '0 10px',
  textDecoration: 'none',
  padding: '6px 16px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    margin: '0 5px',
    padding: '4px 12px',
  },
  '&:hover': {
    backgroundColor: '#d1a6e7',
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
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.label} 
            component={item.isAnchor ? 'a' : Link}
            href={item.isAnchor ? item.href : undefined}
            to={!item.isAnchor ? item.href : undefined}
            sx={{ 
              color: '#5A3E22',
              '&:hover': { backgroundColor: 'rgba(139, 69, 19, 0.1)' }
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
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '1.1rem',
              }}
            />
          </ListItem>
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
            justifyContent: { xs: 'center', md: 'flex-start' },
            position: 'relative',
            minHeight: { xs: 56, sm: 64 },
            px: { xs: 0, sm: 2 },
          }}
        >
          <Logo variant="h1">
            Simply Precious Bakery
          </Logo>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#b57edc' }}
            >
              ☰
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
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
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <Box sx={{ height: { xs: 56, sm: 64 } }} />
      
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
            width: 250,
            backgroundColor: 'rgba(255, 248, 220, 0.98)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header; 