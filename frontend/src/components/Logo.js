import React from 'react';
import { Box, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Logo = ({ size = 'medium' }) => {
  const sizes = {
    small: {
      icon: 24,
      text: 'h6',
    },
    medium: {
      icon: 32,
      text: 'h4',
    },
    large: {
      icon: 48,
      text: 'h3',
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <AutoStoriesIcon
        sx={{
          fontSize: sizes[size].icon,
          color: 'primary.main',
          transform: 'rotate(-10deg)',
        }}
      />
      <Typography
        variant={sizes[size].text}
        component="span"
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          letterSpacing: '-0.5px',
        }}
      >
        Curie
      </Typography>
    </Box>
  );
};

export default Logo; 