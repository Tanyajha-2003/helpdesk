import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

export default function Profile() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Avatar sx={{ width: 80, height: 80, margin: "0 auto" }}>U</Avatar>
        <Typography variant="h6">User Name</Typography>
        <Typography>Email: user@example.com</Typography>
      </CardContent>
    </Card>
  );
}
