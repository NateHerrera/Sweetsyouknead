import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';

const MenuContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  position: 'relative',
}));

const MenuItemCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '24px',
  overflow: 'hidden',
  border: '1px solid rgba(200, 166, 95, 0.18)',
  boxShadow: '0 18px 40px rgba(107, 76, 67, 0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 24px 48px rgba(107, 76, 67, 0.12)',
  },
  '& .MuiCardMedia-root': {
    height: 220,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  '& .MuiCardContent-root': {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,248,244,0.96) 100%)',
  }
}));

const menuItems = [
  {
    title: 'Custom Cakes',
    description: 'Handcrafted cakes with unique flavors and decorations',
    image: 'images/IMG_2766.webp',
    price: 'From $35 and up'
  },
  {
    title: 'Custom Cupcakes',
    description: 'Handcrafted cupcakes with unique flavors and decorations',
    image: 'images/IMG_2861.webp',
    price: 'From $25 and up'
  },
  {
    title: 'Bread Products',
    description: 'Artisan breads and pastries',
    image: 'images/IMG_1436.webp',
    price: 'From $20 and up'
  },
  {
    title: 'Seasonal Items',
    description: 'Cookies, pies, and more',
    image: 'images/IMG_1907.webp',
    price: 'From $20 and up'
  }
];

const MenuPreview: React.FC = () => {
  const navigate = useNavigate();
  const handleViewFullMenu = () => {
    navigate('/menu');
    window.scrollTo(0, 0);
  };
  return (
    <MenuContainer>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '2.7rem', md: '3.5rem' },
          color: '#4f372f',
          marginBottom: 1.5,
        }}
      >
        What We Offer
      </Typography>
      <Typography
        align="center"
        sx={{
          maxWidth: 680,
          mx: 'auto',
          mb: 5,
          color: 'text.secondary',
        }}
      >
        A small collection of signature favorites, finished with soft detail and made for celebrations that deserve something a little more special.
      </Typography>
      <Grid container spacing={4}>
        {menuItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MenuItemCard>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '2rem',
                    color: '#4f372f',
                    marginBottom: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ marginBottom: 2 }}
                >
                  {item.description}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.4rem',
                    color: '#b28a58',
                  }}
                >
                  {item.price}
                </Typography>
              </CardContent>
            </MenuItemCard>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            padding: '12px 30px',
            borderRadius: '999px',
            textDecoration: 'none',
            backgroundColor: '#c78293',
            color: '#fff',
            borderColor: '#c78293',
            '&:hover': {
              backgroundColor: '#a96074',
              color: '#fff',
              borderColor: '#a96074',
            },
          }}
          onClick={handleViewFullMenu}
        >
          View Full Menu
        </Button>
      </Box>
    </MenuContainer>
  );
};

export default MenuPreview; 
