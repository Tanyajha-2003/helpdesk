import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Chip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const HelpdeskHeader = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#52D1C5', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h5" sx={{ fontStyle: 'italic', fontWeight: 'bold', flexGrow: 1 }}>
          Helpdesk
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip label="BM" size="small" sx={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold' }} />
          <Chip label="BI" size="small" sx={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold' }} />
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HelpdeskHeader;
