import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  '& .logo-text': {
    fontFamily: '"Caveat", cursive',
    fontSize: '2.5rem',
    color: theme.palette.primary.main,
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    transform: 'rotate(-2deg)',
  },
  '& .tagline': {
    fontFamily: '"Caveat", cursive',
    fontSize: '1.2rem',
    color: theme.palette.secondary.main,
    textAlign: 'center',
    transform: 'rotate(1deg)',
  },
  '& .decoration': {
    width: '100%',
    height: '4px',
    background: `repeating-linear-gradient(
      45deg,
      ${theme.palette.primary.main},
      ${theme.palette.primary.main} 10px,
      ${theme.palette.secondary.main} 10px,
      ${theme.palette.secondary.main} 20px
    )`,
    margin: theme.spacing(1, 0),
  }
}));

interface LogoProps {
  variant?: 'default' | 'compact';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  return (
    <LogoContainer>
      <Typography variant="h1" className="logo-text">
        Sweets You Knead
      </Typography>
      {variant === 'default' && (
        <>
          <Box className="decoration" />
          <Typography className="tagline">
            Handcrafted with love
          </Typography>
        </>
      )}
    </LogoContainer>
  );
};

export default Logo; 