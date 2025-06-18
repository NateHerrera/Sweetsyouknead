import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),
    url('/images/backgroundformainpage.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(4),
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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
  },
}));

const Ribbon = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '6px',
  margin: '0 0 20px 0',
  background: 'repeating-linear-gradient(135deg, #8B4513, #8B4513 10px, #DEB887 10px, #DEB887 20px)',
  borderRadius: '2px',
  boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
}));

const Logo = styled('img')(({ theme }) => ({
  width: '300px',
  height: 'auto',
}));

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <ContentContainer>
        <Logo src="/images/Sweetsyoukneadlogotrans.png" alt="Sweets You Knead Logo" />
        <Ribbon />
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