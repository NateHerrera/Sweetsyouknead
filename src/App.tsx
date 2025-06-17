import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuPreview from './components/MenuPreview';
import OurStory from './components/OurStory';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCupcake from './components/FloatingCupcake';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // Warm brown
    },
    secondary: {
      main: '#DEB887', // Burlywood
    },
    background: {
      default: '#FFF8DC', // Cornsilk
      paper: '#FAEBD7', // Antique white
    },
  },
  typography: {
    fontFamily: '"Quicksand", "Caveat", sans-serif',
    h1: {
      fontFamily: '"Caveat", cursive',
      fontSize: '3.5rem',
    },
    h2: {
      fontFamily: '"Caveat", cursive',
      fontSize: '2.8rem',
    },
    h3: {
      fontFamily: '"Caveat", cursive',
      fontSize: '2.2rem',
    },
    body1: {
      fontFamily: '"Quicksand", sans-serif',
      fontSize: '1.1rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <Header />
        <Container maxWidth="lg">
          <Hero />
          <MenuPreview />
          <OurStory />
          <Contact />
        </Container>
        <Footer />
        <FloatingCupcake />
      </Box>
    </ThemeProvider>
  );
}

export default App; 