import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StoryContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `url('/notebook-bg.png') repeat`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 248, 220, 0.9)',
  },
}));

const StoryContent = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(6),
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  maxWidth: '800px',
  margin: '0 auto',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
    background: `url('/wheat-border.png') repeat`,
    zIndex: -1,
    opacity: 0.1,
  },
}));

const StoryTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Caveat", cursive',
  fontSize: '2.5rem',
  color: theme.palette.primary.main,
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  '&::before, &::after': {
    content: '""',
    display: 'inline-block',
    width: '40px',
    height: '40px',
    backgroundImage: 'url("/wheat-icon.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    margin: '0 15px',
    verticalAlign: 'middle',
  },
}));

const StoryText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Quicksand", sans-serif',
  fontSize: '1.1rem',
  lineHeight: 1.8,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  textAlign: 'justify',
}));

const OurStory: React.FC = () => {
  return (
    <StoryContainer>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <StoryContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{ color: '#5A3E22', fontFamily: '"Caveat", cursive', mb: 2 }}
            >
              My Story
            </Typography>
            <StoryText>
            It all started in high school, selling brownies and cookies just to make a little extra cash. I never imagined it would turn into something bigger—until I read 
            Finding Your Element by Sir Ken Robinson. That book lit a spark. I realized I wanted to take my creativity and shape it into something real, something people could taste.
        
        
            </StoryText>
            <StoryText>
            I went on to earn a degree in Baking and Pastry Arts from St. Philip's College, and now I'm building this business from scratch—literally. 
            From custom cakes to cookies, pies, and bread, every treat is made with care and a whole lot of heart.
            </StoryText>
            <StoryText>
            This bakery wouldn't exist without the love and support of my friends and family. They believed in me, and now I'm pouring that belief into every order. 
            This website is just the beginning.


            </StoryText>
          </motion.div>
        </StoryContent>
      </Box>
    </StoryContainer>
  );
};

export default OurStory; 