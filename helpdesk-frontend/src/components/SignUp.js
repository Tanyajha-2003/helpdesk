import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
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


export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await API.post("/signup", { username, password, role: "user" });
      const res = await API.post("/login", { username, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.formBox}>
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Helpdesk System
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Sign up here
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
        <TextField
          fullWidth
          placeholder="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button fullWidth sx={styles.button} onClick={handleSignup}>
          Sign Up
        </Button>

        <Box sx={styles.footerLinks}>
        <Link href="/forgot-password" sx={{ color: "red" }}>
  Forgot password
</Link>

          <Link href="/login" sx={{ fontWeight: "bold" }}>
            Sign In
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
