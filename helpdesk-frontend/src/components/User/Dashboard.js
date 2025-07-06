import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

const cardData = [
  { label: "Total Tickets", count: 12, color: "#2196F3" },
  { label: "Total Solved", count: 8, color: "#4CAF50" },
  { label: "Total Awaiting Approval", count: 2, color: "#F44336" },
  { label: "Total In Progress", count: 2, color: "#FFEB3B", textColor: "#000" },
];

export default function UserDashboard() {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        {cardData.map((card, idx) => (
          <Grid item xs={6} md={3} key={idx}>
            <Card
              sx={{
                backgroundColor: card.color,
                color: card.textColor || "#fff",
                minHeight: 100,
              }}
            >
              <CardContent>
                <Typography variant="h4" fontWeight="bold">
                  {card.count}
                </Typography>
                <Typography>{card.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
