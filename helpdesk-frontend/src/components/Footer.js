import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#55D6C2',
        color: 'black',
        textAlign: 'center',
        py: 2,
        position: 'absolute',
        bottom: 0,
        width: '83%',
        mt: 'auto'
      }}
    >
      <Typography variant="body1" fontWeight="bold">
       Footer
      </Typography>
    </Box>
  );
}
