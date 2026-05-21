import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import MenuPreview from './MenuPreview';
import OurStory from './OurStory';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <Box sx={{ color: 'text.primary' }}>
      <div id="home"><Hero /></div>
      <div id="menu"><MenuPreview /></div>
      <div id="our-story"><OurStory /></div>
      <div id="contact"><Contact /></div>
    </Box>
  );
};

export default Home; 
