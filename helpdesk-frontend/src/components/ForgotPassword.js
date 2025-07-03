import React, { useState } from "react";
import { TextField, Typography, Link } from "@mui/material";
import API from "../api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await API.post("/forgot-password", { email });
      console.log("Response:", res.data); 
      setSubmitted(true);
    } catch (error) {
      console.error("Reset error:", error);
      alert("Failed to send reset email");
    }
  };
  

  const styles = {
    wrapper: {
      minHeight: "100vh",
      backgroundColor: "#55d6c2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      backgroundColor: "#b2dfdb",
      padding: "2rem",
      borderRadius: "3px",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    title: {
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    subtitle: {
      marginBottom: "1.5rem",
    },
    button: {
      backgroundColor: "#2979ff",
      color: "white",
      borderRadius: "12px",
      marginTop: "1rem",
      padding: "10px 0",
      width: "100%",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "1rem",
      fontSize: "0.9rem",
    },
    link: {
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.box}>
        <Typography variant="h5" style={styles.title}>
          Helpdesk System
        </Typography>
        <Typography variant="subtitle1" style={styles.subtitle}>
          Reset your password
        </Typography>

        {!submitted ? (
          <>
            <TextField
              fullWidth
              placeholder="Enter your email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button style={styles.button} onClick={handleSubmit}>
              Send Reset Link
            </button>
            <div style={styles.footer}>
              <Link href="/login" style={{ color: "red" }}>
                Back to Login
              </Link>
            </div>
          </>
        ) : (
          <Typography sx={{ mt: 3, color: "green", fontWeight: "bold" }}>
            ✅ Reset link sent! Please check your email.
          </Typography>
        )}
      </div>
    </div>
  );
}
