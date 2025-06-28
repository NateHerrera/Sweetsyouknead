import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 248, 220, 0.95)',
  boxShadow: 'none',
  borderBottom: '2px solid #DEB887',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Caveat", cursive',
  fontSize: '2.5rem',
  color: '#5A3E22',
  textAlign: 'center',
  flexGrow: 1,
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
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#5A3E22',
  fontFamily: '"Quicksand", sans-serif',
  fontSize: '1.1rem',
  margin: '0 10px',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: 'rgba(139, 69, 19, 0.1)',
  },
}));

const NavAnchor = styled('a')(({ theme }) => ({
  color: '#5A3E22',
  fontFamily: '"Quicksand", sans-serif',
  fontSize: '1.1rem',
  margin: '0 10px',
  textDecoration: 'none',
  padding: '6px 16px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
  display: 'inline-block',
  '&:hover': {
    backgroundColor: 'rgba(139, 69, 19, 0.1)',
    textDecoration: 'none',
  },
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: '#5A3E22',
  fontFamily: '"Quicksand", sans-serif',
  fontSize: '1.1rem',
  margin: '0 10px',
  textDecoration: 'none',
  padding: '6px 16px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(139, 69, 19, 0.1)',
    textDecoration: 'none',
  },
}));

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Logo variant="h1">
          Sweet Kneads Bakery
        </Logo>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {location.pathname === '/' ? (
            <NavAnchor href="#home">
              Home
            </NavAnchor>
          ) : (
            <NavLink to="/">
              Home
            </NavLink>
          )}
          
          <NavLink to="/menu">
            Menu
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
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header; 