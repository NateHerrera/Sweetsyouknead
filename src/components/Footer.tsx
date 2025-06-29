import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#E8AEB7',
  color: '#5A3E22',
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
      #D291BC 10px,
      #D291BC 20px
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
  '& img': {
    width: '24px',
    height: '24px',
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

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  '& img': {
    width: '20px',
    height: '20px',
    marginRight: theme.spacing(1),
  },
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
              Simply Precious Bakery
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              Handcrafted with love, baked with passion. We create delicious treats
              that bring joy to your special moments.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <SocialIcon
                href="https://www.facebook.com/people/Sweets-You-Knead/100091789056293/?mibextid=wwXIfr&rdid=oz5IaBjuEKCbcqPC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16yAzujpv8%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src="/images/facebook-color-svgrepo-com.svg"
                  alt="Facebook"
                />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/simplypreciousbakery/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="/images/instagram-1-svgrepo-com.svg"
                  alt="Instagram"
                />
              </SocialIcon>
              <SocialIcon
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <img
                  src="/images/twitter-svgrepo-com.svg"
                  alt="Twitter"
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
            <FooterLink href="#about">About Us</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
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
            <ContactInfo>
              <img
                src="/images/location-arrow-svgrepo-com.svg"
                alt="Location"
              />
              <Typography variant="body2">TBA</Typography>
            </ContactInfo>
            <ContactInfo>
              <img
                src="/images/clock-0900-svgrepo-com.svg"
                alt="Time"
              />
              <Typography variant="body2">Mon-Sat: 7am-7pm</Typography>
            </ContactInfo>
            <ContactInfo>
              <img
                src="/images/email-part-2-svgrepo-com.svg"
                alt="email"
              />
              <Typography variant="body2">sweetsyouknead@gmail.com</Typography>
            </ContactInfo>
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
            © {new Date().getFullYear()} Simply Precious Bakery. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 