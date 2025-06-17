import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

const bakingTips = [
  "Always preheat your oven!",
  "Room temperature ingredients mix better",
  "Don't overmix your batter",
  "Let your bread cool before slicing",
  "Measure flour by weight for accuracy",
];

const FloatingCupcake: React.FC = () => {
  const [showTip, setShowTip] = useState(false);
  const controls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useTransform(mouseX, (value) => value - 25);
  const y = useTransform(mouseY, (value) => value - 25);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleClick = () => {
    setShowTip(true);
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.5 },
    });
    setTimeout(() => setShowTip(false), 3000);
  };

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          x,
          y,
          zIndex: 1000,
          cursor: 'pointer',
        }}
        animate={controls}
        onClick={handleClick}
      >
        <Box
          component="img"
          src="https://placehold.co/50x50/FFB6C1/8B4513?text=🧁"
          alt="Floating Cupcake"
          sx={{
            width: 50,
            height: 50,
            filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))',
          }}
        />
      </motion.div>
      {showTip && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'fixed',
            top: y.get() - 60,
            left: x.get(),
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '8px 16px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 1001,
          }}
        >
          {bakingTips[Math.floor(Math.random() * bakingTips.length)]}
        </motion.div>
      )}
    </>
  );
};

export default FloatingCupcake; 