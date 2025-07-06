import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

export default function OperationProfileSetting() {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Profile Settings
      </Typography>

      <Paper sx={{ p: 3 }}>
        <TextField fullWidth label="Username" margin="normal" />
        <TextField fullWidth label="Current Password" type="password" margin="normal" />
        <TextField fullWidth label="New Password" type="password" margin="normal" />
        <TextField fullWidth label="Confirm New Password" type="password" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Update Profile
        </Button>
      </Paper>
    </Box>
  );
}
