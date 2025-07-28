import React, { useState, useMemo } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  useTheme, 
  useMediaQuery,
  IconButton,
  Dialog,
  DialogContent,
  Chip,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Sample gallery data - you can add more images here
const galleryData = [
  {
    id: 1,
    title: "Galaxy Cake",
    description: "6 inch vanilla cake with american buttercream frosting, edible glitter, and painted stars",
    image: "/images/IMG_2758.webp",
    category: "Cakes"
  },
  {
    id: 2,
    title: "Fondant Farm Cake",
    description: "Strawberry and vanilla cake with buttercream, fondant animals, and royal icingflowers",
    image: "/images/IMG_2766.webp",
    category: "Cakes"
  },
  {
    id: 3,
    title: "Sunset Wedding Cake",
    description: "Chocolate espresso cake with raspberry filling, buttercream frosting, and gold accents",
    image: "/images/IMG_1711.webp",
    category: "Cakes"
  },
  {
    id: 4,
    title: "Snoopy Birthday Cake",
    description: "Vanilla cake with buttercream frosting, fondant Snoopy and woodstock, and edible pearls",
    image: "/images/IMG_2845.webp",
    category: "Cakes"
  },
  {
    id: 5,
    title: "Strawberry Shortcake",
    description: "Vanilla cake with strawberry filling, buttercream frosting, and strawberry slices",
    image: "/images/IMG_2783.webp",
    category: "Cakes"
  },
  {
    id: 6,
    title: "Carrot Cake",
    description: "Carrot cake with cream cheese frosting, nuts, and carrots",
    image: "/images/IMG_1050.webp",
    category: "Cakes"
  },
  {
    id: 7,
    title: "Barbie Birthday Cake",
    description: "Vanilla cake with buttercream frosting, fondant Barbie, and edible pearls",
    image: "/images/IMG_1607.webp",
    category: "Cakes"
  },
  {
    id: 8,
    title: "Double Chocolate Cake",
    description: "Chocolate cake with chocolate buttercream, chocolate shavings, raspberry filling, and raspberry fruit",
    image: "/images/IMG_2865.webp",
    category: "Cakes"
  },
  {
    id: 9,
    title: "Fondant Crawfish Boil Cake",
    description: "Strawberry and vanilla cake with buttercream, fondant crawfish, corn, and potatoes",
    image: "/images/IMG_2266.webp",
    category: "Cakes"
  },
  {
    id: 10,
    title: "Custom Celebration Cake",
    description: "Personalized Celebration cake with custom decorations",
    image: "/images/IMG_2270.webp",
    category: "Cakes"
  },
  {
    id: 11,
    title: "Custom Spring Cake",
    description: "Personalized spring cake with custom decorations with royal icing flowers",
    image: "/images/IMG_2265.webp",
    category: "Cakes"
  },
  {
    id: 12,
    title: "Custom Birthday Cake",
    description: "Personalized birthday cake with custom decorations",
    image: "/images/IMG_1498.webp",
    category: "Cakes"
  },
  {
    id: 13,
    title: "Flower Basket Cake",
    description: "Chocolate cake with buttercream flowers",
    image: "/images/IMG_1596.webp",
    category: "Cakes"
  },
  {
    id: 14,
    title: "Peach Bundt Cake ",
    description: "Peach Bundt Cake with mango whipped cream",
    image: "/images/IMG_1598.webp",
    category: "Desserts"
  },
  {
    id: 15,
    title: "Mini Zucchini Loaves",
    description: "Mini zucchini loaves with icing glaze",
    image: "/images/IMG_1111.webp",
    category: "Baked Goods"
  },
  {
    id: 16,
    title: "Chocolate Ganache Glazed Cake",
    description: "Chocolate ganache glazed cake with white chocolate decorations",
    image: "/images/IMG_1582.webp",
    category: "Cakes"
  },
  {
    id: 17,
    title: "Baby Shower Cake",
    description: "Strawberry and vanilla cake, with buttercream snowflakes, and sanding sugar",
    image: "/images/IMG_1595.webp",
    category: "Cakes"
  },
  {
    id: 18,
    title: "German Chocolate Cake",
    description: "German chocolate cake with coconut and chocolate frosting",
    image: "/images/IMG_2222.webp",
    category: "Cakes"
  },
  {
    id: 19,
    title: "Strawberry Crumble",
    description: "Moist strawberry cupcakes with strawberry frosting, nilla wafers, and half strawberry",
    image: "/images/IMG_2861.webp",
    category: "Cupcakes"
  },
  {
    id: 20,
    title: "Fiesta Spiced Rum",
    description: "Fun fiesta buttercream colors on rum infused cupcakes, gold decorations, and chocolate strawberries ",
    image: "/images/IMG_2860.webp",
    category: "Cupcakes"
  },
  {
    id: 21,
    title: "Pride!",
    description: "Chocolate cupcakes with rainbow buttercream designs",
    image: "/images/IMG_2859.webp",
    category: "Cupcakes"
  },
  {
    id: 22,
    title: "Keto Choco-PB Delight",
    description: "Sugar free chocolate cupcakes with PB Fit frosting, topped with a zero sugar Reeses cup",
    image: "/images/IMG_2858.webp",
    category: "Cupcakes"
  },
  {
    id: 23,
    title: "Kolaches",
    description: "Soft Milk bread with cheddar cheese or jalapeno cheddar sausage",
    image: "/images/IMG_1436.webp",
    category: "Baked Goods"
  },
  {
    id: 24,
    title: "Guava Cheesecake Buns",
    description: "Crumble topping and icing glaze, sweet and tart, and flavors can vary from strawberry, blueberry, and raspberry",
    image: "/images/IMG_2952.webp",
    category: "Baked Goods"
  },
  {
    id: 25,
    title: "Guava Muffins",
    description: "'Muffins with crumble topping and icing glaze, sweet and tart, and flavors can vary from strawberry, blueberry, and raspberry",
    image: "/images/IMG_2954.webp",
    category: "Baked Goods"
  },
  {
    id: 26,
    title: "Jumbo Blueberry Muffins",
    description: "Jumbo blueberry muffins with blueberries and streusel topping",
    image: "/images/IMG_2980.webp",
    category: "Baked Goods"
  },
  {
    id: 27,
    title: "Coffee Cake",
    description: "Coffee cake with brown sugar, cinnamon streusel",
    image: "/images/IMG_3180.webp",
    category: "Baked Goods"
  },
  {
    id: 28,
    title: "Chocolate Strawberries",
    description: "Any occasion needs chocolate covered strawberries! From Mothers Day to Birthdays to Valentines Day!",
    image: "/images/IMG_1907.webp",
    category: "Desserts"
  },
];

const GalleryContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #FFB6C1 0%, #A8E063 100%)',
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
}));

const GalleryCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  cursor: 'pointer',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  },
}));

const GalleryCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 250,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    height: 200,
  },
  [theme.breakpoints.down('xs')]: {
    height: 180,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255, 182, 193, 0.1), rgba(168, 224, 99, 0.1))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

const CategoryBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 12,
  backgroundColor: 'rgba(181, 126, 220, 0.9)',
  color: 'white',
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontFamily: '"Quicksand", sans-serif',
  fontWeight: 600,
  backdropFilter: 'blur(10px)',
  [theme.breakpoints.down('sm')]: {
    top: 8,
    right: 8,
    padding: '3px 8px',
    fontSize: '0.7rem',
  },
}));

const DialogImage = styled('img')({
  width: '100%',
  height: 'auto',
  maxHeight: '70vh',
  objectFit: 'contain',
  borderRadius: '8px',
});

const FilterChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: '#b57edc',
  border: '2px solid rgba(181, 126, 220, 0.3)',
  fontFamily: '"Quicksand", sans-serif',
  fontWeight: 600,
  fontSize: '0.9rem',
  padding: '8px 16px',
  height: 'auto',
  '&:hover': {
    backgroundColor: 'rgba(181, 126, 220, 0.1)',
    borderColor: '#b57edc',
  },
  '&.MuiChip-clickable:hover': {
    backgroundColor: 'rgba(181, 126, 220, 0.1)',
  },
  '&.MuiChip-colorPrimary': {
    backgroundColor: '#b57edc',
    color: 'white',
    borderColor: '#b57edc',
    '&:hover': {
      backgroundColor: '#a06fc4',
    },
  },
}));

const Gallery: React.FC = () => {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(galleryData.map(item => item.category)));
    return ['All', ...uniqueCategories];
  }, []);

  // Filter gallery data based on selected category
  const filteredGalleryData = useMemo(() => {
    if (selectedCategory === 'All') {
      return galleryData;
    }
    return galleryData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleImageClick = (item: typeof galleryData[0]) => {
    setSelectedImage(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedImage(null);
  };

  return (
    <GalleryContainer>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Caveat", cursive',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              color: '#b57edc',
              marginBottom: { xs: 1.5, md: 2 },
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            Our Sweet Creations
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
              color: '#b57edc',
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 1.6,
              padding: { xs: '0 16px', sm: 0 },
            }}
          >
            Here's a look at everything I've made! 
            <br />
            <br />
            Explore our collection of handcrafted baked goods, each made with love and attention to detail. 
            From elegant wedding cakes to playful birthday treats, every creation tells a story.
          </Typography>
        </Box>

        {/* Filter Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Caveat", cursive',
              fontSize: { xs: '1.4rem', sm: '1.6rem' },
              color: '#b57edc',
              marginBottom: 2,
            }}
          >
            Filter by Category
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
            sx={{
              gap: { xs: 1, sm: 1.5 },
              padding: { xs: '0 16px', sm: 0 },
            }}
          >
            {categories.map((category) => (
              <FilterChip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? 'primary' : 'default'}
                clickable
                sx={{
                  marginBottom: { xs: 1, sm: 0 },
                }}
              />
            ))}
          </Stack>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {filteredGalleryData.map((item) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={item.id}>
              <GalleryCard onClick={() => handleImageClick(item)}>
                <Box sx={{ position: 'relative' }}>
                  <GalleryCardMedia
                    image={item.image}
                    title={item.title}
                  />
                  <CategoryBadge>
                    {item.category}
                  </CategoryBadge>
                </Box>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', padding: { xs: '12px', sm: '16px' } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Caveat", cursive',
                      fontSize: { xs: '1.2rem', sm: '1.4rem' },
                      color: '#000000',
                      marginBottom: { xs: 0.5, sm: 1 },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#b57edc',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      lineHeight: 1.4,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </GalleryCard>
            </Grid>
          ))}
        </Grid>

        {/* Image Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: { xs: '8px', sm: '16px' },
              margin: { xs: '16px', sm: '32px' },
            }
          }}
        >
          <DialogContent sx={{ padding: 0, position: 'relative' }}>
            <IconButton
              onClick={handleCloseDialog}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: '#b57edc',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }
              }}
            >
              ✕
            </IconButton>
            {selectedImage && (
              <Box sx={{ padding: 2 }}>
                <DialogImage
                  src={selectedImage.image}
                  alt={selectedImage.title}
                />
                <Box sx={{ padding: 2, textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Caveat", cursive',
                      color: '#b57edc',
                      marginBottom: 1,
                    }}
                  >
                    {selectedImage.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#b57edc',
                      marginBottom: 1,
                    }}
                  >
                    {selectedImage.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(181, 126, 220, 0.2)',
                      color: '#b57edc',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontFamily: '"Quicksand", sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {selectedImage.category}
                  </Box>
                </Box>
              </Box>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </GalleryContainer>
  );
};

export default Gallery; 