import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
const stats = [
  { label: "Total Tickets", value: 12, color: "#2196f3" },
  { label: "Total Solved", value: 8, color: "#4caf50" },
  { label: "Total Awaiting Approval", value: 2, color: "#f44336" },
  { label: "Total in Progress", value: 2, color: "#ffc107" },
];

export default function Dashboard() {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
            <Paper
              sx={{
                backgroundColor: stat.color,
                color: "#fff",
                padding: 2,
                textAlign: "center",
                borderRadius: 2,
              }}
            >
            <Typography>{stat.label}</Typography>
              <Typography variant="h4">{stat.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}
