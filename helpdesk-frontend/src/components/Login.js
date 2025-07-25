import React, { useState, useContext } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import API from "../api";

const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#55D6C2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formBox: {
    backgroundColor: "#b2dfdb",
    padding: "2rem",
    borderRadius: "3px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2979ff",
    color: "#fff",
    borderRadius: "12px",
    marginTop: "1rem",
    padding: "10px 0",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
    fontSize: "0.9rem",
  },
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/login", { username, password });
      const { token } = res.data;

      const payload = JSON.parse(atob(token.split(".")[1]));
      login({ username: payload.username, role: payload.role }, token);
  
      // Redirect
      switch (payload.role) {
        case "admin":
          navigate("/admin-dashboard");
          break;
        case "operation":
          navigate("/operation-dashboard");
          break;
        case "support":
          navigate("/support-dashboard");
          break;
        default:
          navigate("/dashboard");
      }
    } catch (err) {
      console.error(err.response ? err.response.data : err);
      alert("Login failed");
    }
  };
  
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.formBox}>
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Helpdesk System
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Login here
        </Typography>

        <TextField
          fullWidth
          placeholder="Username"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          placeholder="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button fullWidth sx={styles.button} onClick={handleLogin}>
          Login
        </Button>

        <Box sx={styles.footerLinks}>
          <Link href="/forgot-password" sx={{ color: "red" }}>
            Forgot password
          </Link>
          <Link href="/signup" sx={{ fontWeight: "bold" }}>
            Sign Up
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
