import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import GroupIcon from '@mui/icons-material/Group';

interface NavbarWithLogoProps {
  contactCount: number;
  groupCount: number;
}

const NavbarWithLogo: React.FC<NavbarWithLogoProps> = ({ contactCount, groupCount }) => {
  return (
    <Box>
      {/* Navbar */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left side - Logo and Title */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="logo" sx={{ p: 0 }}>
              <img src="/assets/logo.png" alt="Contact Manager Logo" style={{ width: 28, height: 29 }} />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ ml: 1, fontWeight: 'bold' }}>
              Contact Manager
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      {/* Dashboard and Count Icons */}
      <Box sx={{ textAlign: 'left', mt: 4 }}>
        <Typography variant="h4">Dashboard</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        {/* Contacts */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 10, mt:20 }}>
          <IconButton aria-label="contacts" sx={{ fontSize: 60 }}>
          <img src="assets/contact icon.png" alt="gmail group Logo" style={{ width: 81, height: 75 }} />
          </IconButton>
          <Typography variant="h4">{contactCount}</Typography>
          <Typography variant="body1">Contacts</Typography>
        </Box>

        {/* Groups */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 10,mt:20 }}>
          <IconButton aria-label="groups" sx={{ fontSize: 60 }}>
            
            <img src="/assets/gmailgroup.png" alt="gmail group Logo" style={{ width: 81, height: 75 }} />
          </IconButton>
          <Typography variant="h4">{groupCount}</Typography>
          <Typography variant="body1">Groups</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarWithLogo;
