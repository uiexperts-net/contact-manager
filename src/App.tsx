// src/App.tsx
import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2-second delay for loading

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <SplashScreen loading={true} message="Loading..." />
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // Full-screen height
            textAlign: 'center', // Center text content
          }}
        >
          {/* Star Image */}
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ width: '100px', height: '100px', marginBottom: '20px' }}
          />

          {/* Welcome Message */}
          <Typography variant="h5" gutterBottom>
            Welcome to Contact Manager!
          </Typography>

          {/* Sync Contacts Button */}
          <Button
            variant="contained"
            sx={{ backgroundColor: '#7b4d82', color: '#fff' }}
          >
            Sync Contacts
          </Button>
        </Box>
      )}
    </div>
  );
};

export default App;
