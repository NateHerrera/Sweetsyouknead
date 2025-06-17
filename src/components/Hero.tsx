import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from './Logo';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
    url('https://placehold.co/1920x1080/FFF5E6/8B4513?text=Artisan+Bakery')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("https://placehold.co/100x100/FFF5E6/8B4513?text=*")',
    opacity: 0.1,
    pointerEvents: 'none',
  }
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(4),
  maxWidth: '800px',
  '& .hero-title': {
    fontFamily: '"Caveat", cursive',
    fontSize: '3.5rem',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  },
  '& .hero-subtitle': {
    fontFamily: '"Caveat", cursive',
    fontSize: '1.8rem',
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(4),
  }
}));

const DecorativeBorder = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    width: '100px',
    height: '100px',
    border: `4px solid ${theme.palette.primary.main}`,
    opacity: 0.2,
  },
  '&::before': {
    top: 20,
    left: 20,
    borderRight: 'none',
    borderBottom: 'none',
  },
  '&::after': {
    bottom: 20,
    right: 20,
    borderLeft: 'none',
    borderTop: 'none',
  }
}));

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <DecorativeBorder />
      <ContentContainer>
        <Logo />
        <Typography variant="h1" className="hero-title">
          Artisan Bakery
        </Typography>
        <Typography variant="h2" className="hero-subtitle">
          Handcrafted with love, baked with passion
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            fontFamily: '"Caveat", cursive',
            fontSize: '1.5rem',
            padding: '12px 32px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          View Our Menu
        </Button>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero; 