import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';

const MenuContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: 'relative',
}));

const MenuItemCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
  },
  '& .MuiCardMedia-root': {
    height: 200,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  '& .MuiCardContent-root': {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: theme.palette.background.paper,
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
          fontFamily: '"Caveat", cursive',
          fontSize: '3rem',
          color: '#5A3E22',
          marginBottom: 4,
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        What We Offer
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
                    fontFamily: '"Caveat", cursive',
                    fontSize: '1.8rem',
                    color: '#5A3E22',
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
                    fontFamily: '"Caveat", cursive',
                    fontSize: '1.4rem',
                    color: '#5A3E22',
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
            fontFamily: '"Caveat", cursive',
            fontSize: '1.5rem',
            padding: '10px 30px',
            borderRadius: '30px',
            borderWidth: '2px',
            textDecoration: 'none',
            '&:hover': {
              borderWidth: '2px',
            },
            color: '#5A3E22',
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