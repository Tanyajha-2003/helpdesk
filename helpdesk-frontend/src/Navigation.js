import React, { useContext } from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Navigation() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography
            variant="h6"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/dashboard")}
          >
            Helpdesk Portal
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate("/tickets")}>
            My Tickets
          </Button>
          <Button color="inherit" onClick={() => navigate("/create")}>
            New Ticket
          </Button>
          {user && (
            <Button
              color="error"
              variant="outlined"
              onClick={() => {
                logout();
                navigate("/");
              }}
              sx={{ ml: 2 }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
