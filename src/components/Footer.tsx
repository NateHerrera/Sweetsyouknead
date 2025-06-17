import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `repeating-linear-gradient(
      45deg,
      ${theme.palette.secondary.main},
      ${theme.palette.secondary.main} 10px,
      ${theme.palette.primary.light} 10px,
      ${theme.palette.primary.light} 20px
    )`,
  }
}));

const SocialIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  margin: theme.spacing(1),
  borderRadius: '50%',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    textDecoration: 'none',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  display: 'block',
  marginBottom: theme.spacing(1),
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Caveat", cursive',
                fontSize: '2rem',
                marginBottom: 2,
              }}
            >
              Sweets You Knead
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              Handcrafted with love, baked with passion. We create delicious treats
              that bring joy to your special moments.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <SocialIcon
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src="https://placehold.co/32x32/1877F2/FFFFFF?text=f"
                  alt="Facebook"
                  style={{ width: '100%', height: '100%' }}
                />
              </SocialIcon>
              <SocialIcon
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="https://placehold.co/32x32/E4405F/FFFFFF?text=ig"
                  alt="Instagram"
                  style={{ width: '100%', height: '100%' }}
                />
              </SocialIcon>
              <SocialIcon
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <img
                  src="https://placehold.co/32x32/1DA1F2/FFFFFF?text=t"
                  alt="Twitter"
                  style={{ width: '100%', height: '100%' }}
                />
              </SocialIcon>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Caveat", cursive',
                fontSize: '1.8rem',
                marginBottom: 2,
              }}
            >
              Quick Links
            </Typography>
            <FooterLink href="/menu">Our Menu</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/order">Order Online</FooterLink>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Caveat", cursive',
                fontSize: '1.8rem',
                marginBottom: 2,
              }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              123 Bakery Street
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              Sweetville, SV 12345
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              Phone: (555) 123-4567
            </Typography>
            <Typography variant="body2">
              Email: hello@sweetsyouknead.com
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: 4,
            paddingTop: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Sweets You Knead. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 