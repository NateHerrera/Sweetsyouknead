import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import FloatingCupcake from './components/FloatingCupcake';
import './smooth-scroll.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A0521D', // More saturated, vibrant brown
    },
    secondary: {
      main: '#E1A95F', // More saturated, vibrant gold
    },
    background: {
      paper: '#FFE0B2', // More saturated, warm paper
    },
    text: {
      primary: '#5A3E22', // Darker teddy bear brown
      secondary: '#5A3E22', // Darker teddy bear brown
    },
  },
  typography: {
    fontFamily: '"Quicksand", "Caveat", sans-serif',
    h1: {
      fontFamily: '"Caveat", cursive',
      fontSize: '3.5rem',
      color: '#5A3E22',
    },
    h2: {
      fontFamily: '"Caveat", cursive',
      fontSize: '2.8rem',
      color: '#5A3E22',
    },
    h3: {
      fontFamily: '"Caveat", cursive',
      fontSize: '2.2rem',
      color: '#5A3E22',
    },
    body1: {
      fontFamily: '"Quicksand", sans-serif',
      fontSize: '1.1rem',
      color: '#5A3E22',
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
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            position: 'relative',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #FFB6C1 0%, #A8E063 100%)',
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
          <Footer />
          <FloatingCupcake />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App; 