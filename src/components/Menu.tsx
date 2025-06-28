import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Button, Chip, Dialog, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

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
        price: '$85',
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
        description: 'Fun fiesta buttercream colors on rum infused cupcakes, gold decorations, and chocolate strawberries ',
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
        description: 'Soft Milk bread with cheddar cheese or jalapeno cheddar sausage ',
        image: 'images/IMG_1436.webp',
        price: '$25/dozen',
        tags: ['Bread', 'Sausage',]
      },
      {
        name: 'Zucchini Bread',
        description: 'Moist zucchini full loaf or 8 mini loaves, icing is optional as a topping ',
        image: 'images/backgroundformainpage.png',
        price: '$20 full or mini',
        tags: ['Cinnamon', 'Zucchini', 'Bread']
      },
      {
        name: 'Banana Bread',
        description: 'Sweet and soft banana bread loaf or 8 mini loaves',
        image: 'images/backgroundformainpage.png',
        price: '$20 full or mini',
        tags: ['Bread', 'Banana', 'Sweet']
      },
      {
        name: 'Cinnamon Rolls',
        description: 'Soft, fluffy cinnamon rolls topped with icing ',
        image: 'images/backgroundformainpage.png',
        price: '$30/dozen',
        tags: ['Dough', 'Rolls', 'Soft']
      }
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
        tags: ['Chocolate', 'Strawberry', 'tajin strawberries']
      },
      {
        name: 'Brownies',
        description: 'Rich chocolate brownies, flavors include- Mexican chocolate, Sweet potato, and Brookie',
        image: 'images/backgroundformainpage.png',
        price: '$25/dozen',
        tags: ['Sweet potato', 'Chocolate', 'Brookie']
      },
      {
        name: "Grandma Rene's Blueberry Banana Cheesecake ",
        description: 'Delicious no-bake cheese cake with blueberry filling, banana slices, and whipped cream topping',
        image: 'images/backgroundformainpage.png',
        price: '$25/pie',
        tags: ['Blueberry', 'Cheesecake', 'Banana']
      },
      {
        name: 'Pecan Pie',
        description: 'Tradional pecan pie, perfect all year round ',
        image: 'images/backgroundformainpage.png',
        price: '$20/dozen',
        tags: ['Pie', 'Pecan', 'Holidays']
      }
    ]
  }
};

const itemSliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
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
          color: #8B4513 !important;
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
          color: #8B4513;
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
          color: #5a2d0c !important;
        }
        .slick-prev:hover:before, .slick-next:hover:before {
          color: #5a2d0c;
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
          fontSize: '4rem',
          color: '#5A3E22',
          marginBottom: 6,
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        Our Menu
      </Typography>
      
      <Typography
        variant="body1"
        align="center"
        sx={{
          fontSize: '1.2rem',
          color: '#5A3E22',
          marginBottom: 6,
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        Discover our handcrafted treats made with love and the finest ingredients. 
        Each item is baked fresh daily to bring you the perfect taste of homemade goodness.
      </Typography>

      {Object.entries(menuCategories).map(([categoryKey, category]) => (
        <Box key={categoryKey} sx={{ mb: 8 }}>
          <CategoryTitle variant="h2" sx={{ color: '#5A3E22' }}>
            {category.title}
          </CategoryTitle>
          <Slider {...itemSliderSettings}>
            {category.items.map((item, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <MenuItemCard>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    onClick={() => handleImgClick(item.image, item.name)}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontFamily: '"Caveat", cursive',
                        fontSize: '1.6rem',
                        color: '#5A3E22',
                        marginBottom: 1,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#5A3E22"
                      sx={{ marginBottom: 2, minHeight: '60px' }}
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
                            backgroundColor: 'secondary.main',
                            color: 'white',
                            fontSize: '0.7rem',
                          }}
                        />
                      ))}
                    </Box>
                    <Typography
                      variant="h6"
                      color="#5A3E22"
                      sx={{
                        fontFamily: '"Caveat", cursive',
                        fontSize: '1.4rem',
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

      <Box sx={{ textAlign: 'center', marginTop: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Caveat", cursive',
            color: '#5A3E22',
            marginBottom: 3,
          }}
        >
          Custom Orders Welcome!
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#5A3E22', marginBottom: 4, maxWidth: '600px', mx: 'auto' }}
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
            fontSize: '1.5rem',
            padding: '12px 40px',
            borderRadius: '30px',
            backgroundColor: 'primary.main',
            textDecoration: 'none',
            color: '#5A3E22',
            '&:hover': {
              backgroundColor: 'primary.dark',
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
          <CloseIcon fontSize="large" />
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