import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <Typography variant="h4" color="error" gutterBottom>
        Access Denied
      </Typography>
      <Typography>You do not have permission to view this page.</Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/")}>
        Go Home
      </Button>
    </div>
  );
}
