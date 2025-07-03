import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";

export default function ProfileSettings() {
  return (
    <Box>
      <Typography variant="h6" mb={2}>User Profile</Typography>
      <Paper sx={{ p: 2 }}>
        <Button variant="contained" sx={{ mb: 2 }}>Edit Account</Button>
        <Grid container spacing={2}>
          {[
            "Username",
            "Current Password",
            "New Password",
            "Confirm Password",
            "Email",
            "Real Name",
            "Access Level",
            "Project Access Level",
          ].map((label) => (
            <Grid item xs={12} md={6} key={label}>
              <TextField label={label} fullWidth size="small" />
            </Grid>
          ))}
        </Grid>
        <Box mt={2}>
          <Button variant="contained" sx={{ backgroundColor: "#00bfa5" }}>Update User</Button>
        </Box>
      </Paper>
      <Box mt={4} textAlign="center">
        <Typography variant="body2">Footer Area</Typography>
      </Box>
    </Box>
  );
}
