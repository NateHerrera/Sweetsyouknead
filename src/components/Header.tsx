import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 248, 220, 0.95)',
  boxShadow: 'none',
  borderBottom: '2px solid #DEB887',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Caveat", cursive',
  fontSize: '2.5rem',
  color: theme.palette.primary.main,
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

const NavButton = styled(Button)<{ component?: React.ElementType }>(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: '"Quicksand", sans-serif',
  fontSize: '1.1rem',
  margin: '0 10px',
  '&:hover': {
    backgroundColor: 'rgba(139, 69, 19, 0.1)',
  },
}));

const Header: React.FC = () => {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Logo variant="h1">
          Sweets You Knead
        </Logo>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <NavButton component="a" href="#home">Home</NavButton>
          <NavButton component="a" href="#menu">Menu</NavButton>
          <NavButton component="a" href="#our-story">Our Story</NavButton>
          <NavButton component="a" href="#contact">Contact</NavButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header; 