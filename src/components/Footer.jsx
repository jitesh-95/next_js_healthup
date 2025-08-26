'use client'

import { useThemeMode } from '@/app/ThemeContext';
import { Box, Typography } from '@mui/material';
import React from 'react';
import pgk from '../../package.json';


const APP_VERSION = pgk.version; // Update from package.json if needed

const Footer = () => {
  const { darkMode } = useThemeMode();
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: 0.5, md: 2 },
        textAlign: 'center',
        color: 'text.secondary',
        py: 2,
        borderTop: `1px solid ${darkMode ? 'rgb(57, 57, 57)' : 'rgb(212, 210, 210)'}`,
        boxShadow: 'none',
        backgroundColor: `${darkMode ? 'rgba(0, 0, 0, 0.72)' : 'rgba(241, 235, 235, 0.72)'}`, // translucent white
      }}
    >
      <Typography variant="body2">Driven by code. Inspired by health ❤️</Typography>

      {/* Vertical bar separator on md+ */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          mx: 1,
          color: 'text.disabled',
        }}
      >
        |
      </Box>

      <Typography variant='caption'>© {year} HealthUp. All rights reserved.</Typography>

      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          mx: 1,
          color: 'text.disabled',
        }}
      >
        |
      </Box>

      <Typography variant='caption'>Version {APP_VERSION}</Typography>
    </Box>
  )
}

export default Footer;