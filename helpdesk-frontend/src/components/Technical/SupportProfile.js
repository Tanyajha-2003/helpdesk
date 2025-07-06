import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";

export default function SupportProfile() {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Profile & Feedback
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1">Username: OperationUser</Typography>
        <Typography>Contact: +1-234-567-8901</Typography>
        <Typography>Department: Operation</Typography>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1" mb={1}>Submit Feedback</Typography>
        <Button variant="contained" color="primary">Give Feedback</Button>
      </Paper>
    </Box>
  );
}
