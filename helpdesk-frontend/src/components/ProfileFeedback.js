import React from "react";
import { Box, Button, Paper, Rating, TextField, Typography } from "@mui/material";

export default function ProfileFeedback() {
  return (
    <Box>
      <Typography variant="h6" mb={2}>User Profile</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Paper sx={{ p: 2, flex: 1 }}>
          <Typography variant="h6" align="center" gutterBottom>
            <span role="img" aria-label="avatar">👤</span>
          </Typography>
          <Typography>Username: johndoe</Typography>
          <Typography>Contact Number: 1234567890</Typography>
          <Typography>Email: johndoe@example.com</Typography>
          <Typography>Department: IT</Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: 1 }}>
          <Typography variant="body1">Give Your Feedback</Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="(Lorem Ipsum...)"
            sx={{ my: 1 }}
          />
          <Rating />
          <Box mt={1}>
            <Button variant="contained">Submit Feedback</Button>
          </Box>
        </Paper>
      </Box>
      <Box mt={4} textAlign="center">
        <Typography variant="body2">Footer Area</Typography>
      </Box>
    </Box>
  );
}
