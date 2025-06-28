import React from 'react';
import { Container } from '@mui/material';
import Hero from './Hero';
import MenuPreview from './MenuPreview';
import OurStory from './OurStory';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ color: '#5A3E22' }}>
      <div id="home"><Hero /></div>
      <div id="menu"><MenuPreview /></div>
      <div id="our-story"><OurStory /></div>
      <div id="contact"><Contact /></div>
    </Container>
  );
};

export default Home; 