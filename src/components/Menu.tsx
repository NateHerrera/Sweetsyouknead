import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Button, Chip, Dialog, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
// import CloseIcon from '@mui/icons-material/Close';

const MenuContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    maxWidth: '100vw',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
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
    height: 250,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  '& .MuiCardContent-root': {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: theme.palette.background.paper,
  }
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Caveat", cursive',
  fontSize: '2.5rem',
  color: theme.palette.primary.main,
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(6),
  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  '&:first-of-type': {
    marginTop: theme.spacing(2),
  }
}));

const menuCategories = {
  customCakes: {
    title: 'Custom Cakes',
    items: [
      {
        name: 'Galaxy Cake',
        description: '6 inch vanilla cake with american buttercream frosting, edible glitter, and painted stars',
        image: 'images/IMG_2758.webp',
        price: '$45',
        tags: ['Vanilla', 'Buttercream', 'Glitter']
      },
      {
        name: 'Fondant Farm Cake',
        description: 'Strawberry and vanilla cake with buttercream, fondant animals, and royal icingflowers',
        image: 'images/IMG_2766.webp',
        price: '$100',
        tags: ['Vanilla', 'Strawberry', 'Fondant']
      },
      {
        name: 'Sunset Wedding Cake',
        description: 'Chocolate espresso cake with raspberry filling, buttercream frosting, and gold accents',
        image: 'images/IMG_1711.webp',
        price: '$300',
        tags: ['Chocolate', 'Raspberry filling', 'Celebration']
      },
      {
        name: 'Snoopy birthday Cake',
        description: 'Vanilla cake with buttercream frosting, fondant Snoopy and woodstock, and edible pearls',
        image: 'images/IMG_2845.webp',
        price: '$60',
        tags: ['Vanilla ', 'Buttercream', 'Fondant']
      },
      {
        name: 'Strawberry Shortcake Cake',
        description: 'Strawberry cake with buttercream frosting, strawberry filling, royal icing flowers, and hand piped decorations',
        image: 'images/IMG_2783.webp',
        price: '$65',
        tags: ['Strawberry', 'Flowers', '8 inch cake']
      },
      {
        name: 'Carrot Cake',
        description: 'Carrot cake with cream cheese frosting, walnuts, carrot sprinkles, and gold sign',
        image: 'images/IMG_1050.webp',
        price: '$45',
        tags: ['Carrot', 'Nuts', 'Happy Birthday']
      },
      {
        name: 'Barbie Birthday Cake',
        description: 'Vanilla cake with buttercream frosting, barbie doll, and edible pearls',
        image: 'images/IMG_1607.webp',
        price: '$85',
        tags: ['Vanilla', 'Barbie', 'Pink']
      },
      {
        name: 'Double Chocolate Cake',
        description: 'Chocolate cake with chocolate buttercream, chocolate shavings, raspberry filling, and raspberry fruit',
        image: 'images/IMG_2865.webp',
        price: '$45-55',
        tags: ['Chocolate', 'Raspberry',]
      },
      
    ]
  },
  customCupcakes: {
    title: 'Custom Cupcakes',
    items: [
      {
        name: 'Strawberry Crumble',
        description: 'Moist strawberry cupcakes with strawberry frosting, nilla wafers, and half strawberry',
        image: 'images/IMG_2861.webp',
        price: '$25/Dozen',
        tags: ['Nilla wafers', 'Strawberry',]
      },
      {
        name: 'Fiesta Spiced Rum ',
        description: 'Fun fiesta buttercream colors on rum infused cupcakes, gold decorations, and chocolate strawberries',
        image: 'images/IMG_2860.webp',
        price: '$50',
        tags: ['Alcohol', 'Celebration', 'Number cupcakes']
      },
      {
        name: 'Pride!',
        description: 'Chocolate cupcakes with rainbow buttercream designs',
        image: 'images/IMG_2859.webp',
        price: '$30/dozen',
        tags: ['Chocolate', 'Pride', 'Celebration']
      },
      {
        name: 'Keto Choco-PB Delight',
        description: 'Sugar free chocolate cupcakes with PB Fit frosting, topped with a zero sugar Reeses cup',
        image: 'images/IMG_2858.webp',
        price: '$27/dozen',
        tags: ['Healthy', 'Reeses', 'Peanut Butter']
      }
    ]
  },
  breadProducts: {
    title: 'Bread & Pastry Products',
    items: [
      {
        name: 'Kolaches',
        description: 'Soft Milk bread with cheddar cheese or jalapeno cheddar sausage',
        image: 'images/IMG_1436.webp',
        price: '$25/dozen',
        tags: ['Bread', 'Sausage',]
      },
      {
        name: 'Jumbo Blueberry Muffins',
        description: 'Jumbo blueberry muffins with blueberries and streusel topping',
        image: 'images/IMG_2980.webp',
        price: '$30/dozen',
        tags: ['Blueberry', 'Muffins', 'Streusel']
      },
      {
        name: 'Guava Cheesecake Buns',
        description: 'Crumble topping and icing glaze, sweet and tart, and flavors can vary from strawberry, blueberry, and raspberry',
        image: 'images/IMG_2952.webp',
        price: '$25-35 per dozen',
        tags: ['Cheesecake', 'Guava', 'Sweet/Tart']
      },
      {
        name: 'Guava Muffins',
        description: 'Muffins with crumble topping and icing glaze, sweet and tart, and flavors can vary from strawberry, blueberry, and raspberry',
        image: 'images/IMG_2954.webp',
        price: '$25-35 per dozen',
        tags: ['Muffins', 'Guava', 'Sweet/Tart']
      },
      {
        name: "Coffee Cake",
        description: 'Coffee cake with brown sugar, cinnamon streusel',
        image: 'images/IMG_3180.webp',
        price: '$2.50/slice',
        tags: ['Coffee', 'Cake', 'Brown sugar']
      },
      {
        name: "Mini Zucchini Loaves",
        description: 'Mini zucchini bread with icing glaze',
        image: 'images/IMG_1111.webp',
        price: '$20/8 Mini Loaves or $24/Full loaf',
        tags: ['Zucchini', 'Bread', 'Icing']
      },
      /*{
        name: 'Cinnamon Rolls',
        description: 'Soft, fluffy cinnamon rolls topped with icing ',
        image: 'images/backgroundformainpage.png',
        price: '$30/dozen',
        tags: ['Dough', 'Rolls', 'Soft']
      }*/
    ]
  },
  seasonalItems: {
    title: 'Sweet Treats!',
    items: [
      {
        name: 'Chocolate Strawberries',
        description: 'Any occasion needs chocolate covered strawberries! From Mothers Day to Birthdays to Valentines Day! ',
        image: 'images/IMG_1907.webp',
        price: '$25/dozen',
        tags: ['Chocolate', 'Strawberry', 'Tajin strawberries']
      },
    ]
  }
};

const itemSliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string | null>(null);

  const handleImgClick = (img: string, alt: string) => {
    setModalImg(img);
    setModalAlt(alt);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <MenuContainer>
      {/* Custom slick arrow styles */}
      <style>{`
        .slick-arrow {
          z-index: 2;
          display: flex !important;
          align-items: center;
          justify-content: center;
        }
        .slick-prev, .slick-next {
          width: 48px;
          height: 48px;
          background: transparent;
          color: #ec6fa7 !important;
          transition: color 0.2s;
          border: none;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .slick-prev {
          left: -60px;
        }
        .slick-next {
          right: -60px;
        }
        .slick-prev:before, .slick-next:before {
          font-size: 2rem;
          color: #ec6fa7;
          opacity: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
        .slick-prev:hover, .slick-next:hover {
          color: #c94e87 !important;
        }
        .slick-prev:hover:before, .slick-next:before {
          color: #c94e87;
        }
        /* Mobile responsive arrows */
        @media (max-width: 768px) {
          .slick-prev {
            left: -40px;
          }
          .slick-next {
            right: -40px;
          }
          .slick-prev:before, .slick-next:before {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .slick-prev {
            left: -30px;
          }
          .slick-next {
            right: -30px;
          }
          .slick-prev:before, .slick-next:before {
            font-size: 1.2rem;
          }
        }
        /* Image zoom on hover */
        .MuiCardMedia-root {
          transition: transform 0.35s cubic-bezier(.4,2,.6,1);
          cursor: pointer;
        }
        .MuiCard-root:hover .MuiCardMedia-root {
          transform: scale(1.08);
        }
      `}</style>
      <Typography
        variant="h1"
        component="h1"
        align="center"
        sx={{
          fontFamily: '"Caveat", cursive',
          fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
          color: '#000',
          marginBottom: { xs: 4, md: 6 },
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        Our Menu
      </Typography>
      
      <Typography
        variant="body1"
        align="center"
        sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          color: '#000',
          marginBottom: { xs: 4, md: 6 },
          maxWidth: '800px',
          mx: 'auto',
          px: 2,
        }}
      >
        Discover our handcrafted treats made with love and the finest ingredients. 
        Each item is baked fresh daily to bring you the perfect taste of homemade goodness.
        <br></br>
        We also offer custom orders, so if you don't see exactly what you're looking for, contact us to discuss your special requirements and we'll make your vision come to life.
        <br></br>
        <br></br>
        (click on the images to see more details*)
      </Typography>

      {Object.entries(menuCategories).map(([categoryKey, category]) => (
        <Box key={categoryKey} sx={{ mb: { xs: 6, md: 8 }, position: 'relative', maxWidth: { xs: '100vw', md: 'none' }, width: { xs: '100vw', md: 'auto' }, overflowX: { xs: 'hidden', md: 'visible' } }}>
          <CategoryTitle variant="h2" sx={{ 
            color: '#000',
            fontSize: { xs: '1.3rem', sm: '2rem', md: '2.5rem' },
            mb: { xs: 2, md: 4 },
            mt: { xs: 2, md: 6 },
          }}>
            {category.title}
          </CategoryTitle>
          {/* Swipe indicator for mobile */}
          <Box sx={{
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1,
            position: 'relative',
            width: '100%',
            zIndex: 2,
          }}>
            <Box sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 32,
              background: 'linear-gradient(to right, #fff 60%, transparent)',
              pointerEvents: 'none',
            }} />
            <Typography sx={{
              fontSize: '0.95rem',
              color: '#8B4513',
              fontFamily: 'Quicksand, sans-serif',
              px: 2,
              opacity: 0.8,
            }}>
              Swipe to see more!
            </Typography>
            <Box sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: 32,
              background: 'linear-gradient(to left, #fff 60%, transparent)',
              pointerEvents: 'none',
            }} />
          </Box>
          <Slider {...itemSliderSettings}>
            {category.items.map((item, index) => (
              <Box key={index} sx={{ px: { xs: 0.5, sm: 2, md: 4, lg: 6 }, maxWidth: { xs: '100vw', md: 'none' }, width: { xs: '100vw', md: 'auto' }, overflowX: { xs: 'hidden', md: 'visible' } }}>
                <MenuItemCard sx={{
                  minWidth: { xs: 220, sm: 260, md: 320 },
                  maxWidth: { xs: 240, sm: 300, md: 340 },
                  boxSizing: 'border-box',
                  mx: 'auto',
                  mb: { xs: 2, md: 0 },
                  '& .MuiCardMedia-root': {
                    height: { xs: 140, sm: 180, md: 250 },
                    width: '100%',
                    maxWidth: '100%',
                  },
                  '& .MuiCardContent-root': {
                    padding: { xs: 2, sm: 3 },
                  },
                }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    onClick={() => handleImgClick(item.image, item.name)}
                    sx={{ width: '100%', maxWidth: '100%' }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontFamily: '"Caveat", cursive',
                        fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.6rem' },
                        color: '#000',
                        marginBottom: 1,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#000"
                      sx={{ 
                        marginBottom: 2, 
                        minHeight: { xs: '32px', md: '60px' },
                        fontSize: { xs: '0.8rem', md: '1rem' }
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, marginBottom: 2 }}>
                      {item.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: '#ec6fa7',
                            color: 'white',
                            fontSize: { xs: '0.6rem', md: '0.7rem' },
                          }}
                        />
                      ))}
                    </Box>
                    <Typography
                      variant="h6"
                      color="#000"
                      sx={{
                        fontFamily: '"Caveat", cursive',
                        fontSize: { xs: '1rem', md: '1.4rem' },
                        fontWeight: 'bold',
                      }}
                    >
                      {item.price}
                    </Typography>
                  </CardContent>
                </MenuItemCard>
              </Box>
            ))}
          </Slider>
        </Box>
      ))}

      <Box sx={{ textAlign: 'center', marginTop: { xs: 4, md: 6 } }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Caveat", cursive',
            color: '#5A3E22',
            marginBottom: 3,
            fontSize: { xs: '1.8rem', md: '2.125rem' },
          }}
        >
          Custom Orders Welcome!
        </Typography>
        <Typography
          variant="body1"
          sx={{ 
            color: '#5A3E22', 
            marginBottom: 4, 
            maxWidth: '600px', 
            mx: 'auto',
            px: 2,
            fontSize: { xs: '1rem', md: '1.1rem' }
          }}
        >
          Don't see exactly what you're looking for? We love creating custom orders! 
          Contact us to discuss your special requirements and we'll make your vision come to life.
        </Typography>
        <Button
          component={Link}
          to="/#contact"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            fontFamily: '"Caveat", cursive',
            fontSize: { xs: '1.3rem', md: '1.5rem' },
            padding: { xs: '10px 30px', md: '12px 40px' },
            borderRadius: '30px',
            backgroundColor: '#b57edc',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#a06fc4',
            },
          }}
        >
          Order Now
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{
          sx: {
            background: 'rgba(255,255,255,0.95)',
            boxShadow: 24,
            borderRadius: 3,
            p: 2,
            textAlign: 'center',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: '#8B4513', zIndex: 1 }}
        >
          ✕
        </IconButton>
        {modalImg && (
          <Box sx={{ maxWidth: '80vw', maxHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
            <img
              src={modalImg}
              alt={modalAlt || ''}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                background: '#fff',
              }}
            />
          </Box>
        )}
      </Dialog>
    </MenuContainer>
  );
};

export default Menu; 