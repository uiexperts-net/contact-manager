// src/App.tsx
import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import NavbarWithLogo from './components/NavbarWithLogo';

const App: React.FC = () => {
  const contactCount = 10; // Example count for contacts
  const groupCount = 5;     // Example count for groups

  return (
    <Container>
      <CssBaseline />
      <NavbarWithLogo contactCount={contactCount} groupCount={groupCount} />
    </Container>
  );
};

export default App;
