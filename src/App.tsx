import React, { useEffect } from 'react';
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
import './smooth-scroll.css';

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
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          const target = document.getElementById(href.slice(1));
          if (target) {
            e.preventDefault();
            const startY = window.scrollY;
            const endY = target.getBoundingClientRect().top + window.scrollY;
            const duration = 900; // ms, increase for slower scroll
            let start: number | null = null;
            const step = (timestamp: number) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              window.scrollTo(0, startY + (endY - startY) * progress);
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          }
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <Header />
        <Container maxWidth="lg">
          <div id="home"><Hero /></div>
          <div id="menu"><MenuPreview /></div>
          <div id="our-story"><OurStory /></div>
          <div id="contact"><Contact /></div>
        </Container>
        <Footer />
        <FloatingCupcake />
      </Box>
    </ThemeProvider>
  );
}

export default App; 