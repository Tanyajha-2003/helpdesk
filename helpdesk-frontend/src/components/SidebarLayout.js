import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dashboard, NoteAdd, ListAlt, ExitToApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
const drawerWidth = 220;
const headerHeight = 64;

export default function SidebarLayout({ children }) {
  const navigate = useNavigate();

  return (
    <>
      {/* Fixed Sidebar Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#e0e0e0",
            position: "fixed",
            top: `${headerHeight}px`,
            left: 0,
            height: `calc(100% - ${headerHeight}px)`,
          },
        }}
      >
        <Box sx={{ mt: 2 }}>
          <List>
            <ListItem button onClick={() => navigate("/dashboard")}>
              <ListItemIcon><Dashboard /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={() => navigate("/new-ticket")}>
              <ListItemIcon><NoteAdd /></ListItemIcon>
              <ListItemText primary="New Ticket" />
            </ListItem>
            <ListItem button onClick={() => navigate("/my-tickets")}>
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="My Ticket" />
            </ListItem>
            <ListItem button onClick={() => navigate("/")}>
              <ListItemIcon><ExitToApp /></ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
       <Box
        component="main"
        sx={{
          marginLeft: `${drawerWidth}px`,
          marginTop: `${headerHeight}px`,
          paddingTop: 3,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Content Area */}
        <Box sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
}
