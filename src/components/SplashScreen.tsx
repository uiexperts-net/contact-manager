// src/components/SplashScreen.tsx
import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

// Use the logo from the public/assets directory
const logoPath = '/assets/logo.png';

const SplashScreen: React.FC<{ loading: boolean; message?: string }> = ({ loading, message }) => {
  if (!loading) return null;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      position="absolute"
      top={0}
      left={0}
      bgcolor="background.default"
      zIndex={1000}
    >
      <img src={logoPath} alt="Logo" style={{ width: 100, height: 100, marginBottom: 20 }} />
      <Typography variant="h4" gutterBottom>
        Contact Manager
      </Typography>
      <CircularProgress />
      {message && <Typography variant="h6" mt={2}>{message}</Typography>}
    </Box>
  );
};

export default SplashScreen;
