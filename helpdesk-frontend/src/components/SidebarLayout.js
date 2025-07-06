import React, { useContext } from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, NoteAdd, ListAlt, ExitToApp, Settings, People, Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext";
const drawerWidth = 220;
const headerHeight = 64;

export default function SidebarLayout({ children }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const role = user?.role;

  // Menu items per role
  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/dashboard", roles: ["user"] },
    { text: "New Ticket", icon: <NoteAdd />, path: "/new-ticket", roles: ["user"] },
    { text: "My Tickets", icon: <ListAlt />, path: "/my-tickets", roles: ["user"] },
    { text: "Profile", icon: <Person />, path: "/profile", roles: ["user"] },
    { text: "Profile Setting", icon: <Settings />, path: "/profile-setting", roles: ["user"] },

    { text: "Dashboard", icon: <Dashboard />, path: "/operation-dashboard", roles: ["operation"] },
    { text: "Ticket Approval", icon: <NoteAdd />, path: "/operation-approval", roles: ["operation"] },
    { text: "My Tickets", icon: <ListAlt />, path: "/operation-my-tickets", roles: ["operation"] },
    { text: "Performance", icon: <People />, path: "/operation-performance", roles: ["operation"] },
    { text: "Profile", icon: <Person />, path: "/operation-profile", roles: ["operation"] },
    { text: "Profile Setting", icon: <Settings />, path: "/operation-profile-setting", roles: ["operation"] },

    { text: "Dashboard", icon: <Dashboard />, path: "/support-dashboard", roles: ["support"] },
    { text: "My Tickets", icon: <ListAlt />, path: "/support-my-tickets", roles: ["support"] },
    { text: "Performance", icon: <People />, path: "/support-performance", roles: ["support"] },
    { text: "Profile", icon: <Person />, path: "/support-profile", roles: ["support"] },
    { text: "Profile Setting", icon: <Settings />, path: "/support-profile-setting", roles: ["support"] },

    { text: "Dashboard", icon: <Dashboard />, path: "/admin-dashboard", roles: ["admin"] },
    { text: "Database", icon: <NoteAdd />, path: "/admin-database", roles: ["admin"] },
    { text: "Setting", icon: <Settings />, path: "/admin-settings", roles: ["admin"] },
    { text: "User Log History", icon: <ListAlt />, path: "/admin-user-logs", roles: ["admin"] },
    { text: "Profile", icon: <Person />, path: "/admin-profile", roles: ["admin"] },
    { text: "Profile Setting", icon: <Settings />, path: "/admin-profile-settings", roles: ["admin"] },
  ];

  return (
    <>
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
        <List>
          {menuItems
            .filter((item) => !item.roles || item.roles.includes(role))
            .map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
        </List>
      </Drawer>

      <Box component="main"
        sx={{
          marginLeft: `${drawerWidth}px`,
          marginTop: `${headerHeight}px`,
          padding: 3,
          minHeight: "100vh",
        }}
      >
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}
