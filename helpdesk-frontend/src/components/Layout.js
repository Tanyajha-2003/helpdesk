import React from "react";
import { Drawer, AppBar, Toolbar, Typography, Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
const drawerWidth = 200;

export default function Layout({ children }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Helpdesk System
          </Typography>
          <IconButton color="inherit" onClick={() => navigate("/")}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/tickets">
            <ListItemText primary="My Tickets" />
          </ListItem>
          <ListItem button component={Link} to="/profile">
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
}
