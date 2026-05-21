import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StoryContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0, 10),
  position: 'relative',
}));

const StoryContent = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(6),
  background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,249,245,0.98) 100%)',
  borderRadius: '28px',
  border: '1px solid rgba(200, 166, 95, 0.18)',
  boxShadow: '0 22px 48px rgba(107, 76, 67, 0.09)',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
  },
}));

const StoryText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Manrope", sans-serif',
  fontSize: '1.1rem',
  lineHeight: 1.8,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  textAlign: 'justify',
}));

const OurStory: React.FC = () => {
  return (
    <StoryContainer>
      <Box sx={{ position: 'relative', zIndex: 1, px: 2 }}>
        <StoryContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#4f372f',
                fontFamily: '"Cormorant Garamond", serif',
                mb: 1.5,
                textAlign: 'center',
              }}
            >
              My Story
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                color: '#b28a58',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontSize: '0.78rem',
                fontWeight: 700,
                mb: 4,
              }}
            >
              Built with heart and intention
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
