import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FloatingCupcake from './components/FloatingCupcake';
import './smooth-scroll.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c78293',
      dark: '#a96074',
      light: '#f1d4dc',
      contrastText: '#fffdf9',
    },
    secondary: {
      main: '#c8a65f',
      dark: '#a98643',
      light: '#ebdcc0',
    },
    background: {
      default: '#fff8f3',
      paper: '#fffdf9',
    },
    text: {
      primary: '#5c463f',
      secondary: '#8b6f66',
    },
    divider: 'rgba(201, 166, 95, 0.32)',
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '4.25rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: '#4f372f',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '3rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: '#4f372f',
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '2.2rem',
      fontWeight: 600,
      color: '#4f372f',
    },
    body1: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.8,
      color: '#5c463f',
    },
    button: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: '#fff8f3',
          backgroundImage: [
            'radial-gradient(circle at top left, rgba(234, 201, 210, 0.42), transparent 32%)',
            'radial-gradient(circle at top right, rgba(232, 214, 181, 0.35), transparent 28%)',
          ].join(','),
        },
        '::selection': {
          backgroundColor: 'rgba(199, 130, 147, 0.24)',
        },
        '#root': {
          minHeight: '100vh',
        },
      },
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
            background:
              'linear-gradient(180deg, rgba(255, 249, 245, 0.97) 0%, rgba(255, 245, 240, 0.94) 48%, rgba(250, 239, 232, 0.98) 100%)',
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
          <FloatingCupcake />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App; 
