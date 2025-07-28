import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('/images/newbackgroundindex.jpeg')`,
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
  background: 'repeating-linear-gradient(135deg, #E8AEB7, #E8AEB7 10px, #A8E063 10px, #A8E063 20px)',
  borderRadius: '2px',
  boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
}));

const Logo = styled('img')(({ theme }) => ({
  width: '70vw',
  marginLeft: '12vw',
  height: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: '50vw',
    marginLeft: '16vw',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 400,
    marginLeft: 0,
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 500,
    marginLeft: 0,
  },
}));

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const handleViewGallery = () => {
    navigate('/gallery');
    window.scrollTo(0, 0);
  };
  return (
    <HeroContainer>
      <ContentContainer>
        <Logo src="/images/simplyprecioushomepagelogo.png" alt="Simply Precious Bakery Logo" />
        <Ribbon />
        <Typography
          variant="h1"
          sx={{ color: '#000', fontFamily: '"Caveat", cursive', mb: 2 }}
        >
          Artisan Bakery
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: '#000', fontFamily: '"Caveat", cursive', mb: 4 }}
        >
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
            backgroundColor: '#b57edc',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#a06fc4',
              color: '#fff',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            },
            transition: 'all 0.3s ease',
          }}
          onClick={handleViewGallery}
        >
          View Our Gallery
        </Button>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero; 