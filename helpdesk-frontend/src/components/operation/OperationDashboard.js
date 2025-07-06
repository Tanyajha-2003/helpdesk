import React from "react";
import { Box, Typography, Grid, Card, CardContent, Divider } from "@mui/material";

const cardData = [
  { label: "Created", count: 12, bgColor: "#2196F3" },
  { label: "Approved", count: 8, bgColor: "#4CAF50" },
  { label: "Rejected", count: 2, bgColor: "#F44336" },
  { label: "Closed", count: 2, bgColor: "#FFEB3B" },
];

const OperationDashboard = () => {
  return (
    <Box>
      {/* Cards */}
      <Grid container spacing={2}>
        {cardData.map((card, idx) => (
          <Grid item xs={6} md={3} key={idx}>
            <Card sx={{ backgroundColor: card.bgColor, color: "#fff" }}>
              <CardContent>
                <Typography variant="h4" fontWeight="bold">{card.count}</Typography>
                <Typography variant="subtitle1">{card.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Divider */}
      <Box my={3}><Divider /></Box>

      {/* Performance */}
      <Typography variant="h6" fontWeight="bold" mb={1}>Performance</Typography>
      <Box sx={{ backgroundColor: "#E0F2F1", p: 2, borderRadius: 2 }}>
        <Typography>[📊 Insert Performance Chart Here]</Typography>
      </Box>

      {/* Team Summary */}
      <Box mt={4}>
        <Typography variant="h6" fontWeight="bold" mb={1}>Team Members</Typography>
        <Box sx={{ backgroundColor: "#F1F8E9", p: 2, borderRadius: 2 }}>
          <Typography>[👥 Insert Performance Table Here]</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OperationDashboard;
