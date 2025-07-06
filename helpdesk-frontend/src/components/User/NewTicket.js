import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
  Paper,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import API from "../../api"; 

export default function NewTicket() {
  const [form, setForm] = useState({
    ticketNo: "",
    date: "",
    name: "",
    department: "",
    subject: "",
    category: "",
    description: "",
    type: "",
    priority: "",
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await API.post("/tickets", {
        ...form,
        status: "Open", // default status
      });
      alert("🎉 Ticket submitted successfully!");
      setForm({
        ticketNo: "",
        date: "",
        name: "",
        department: "",
        subject: "",
        category: "",
        description: "",
        type: "",
        priority: "",
      });
    } catch (err) {
        console.error("Ticket submit failed:", err.response?.data || err.message);
        alert("❌ Failed to submit ticket.");
      }
      
  };

  return (
    <Paper elevation={2} sx={{ p: 4, m: 3, backgroundColor: "#fff", borderRadius: "12px" }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
        Create New Ticket
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Ticket No." value={form.ticketNo} onChange={handleChange("ticketNo")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Date" type="date" InputLabelProps={{ shrink: true }} value={form.date} onChange={handleChange("date")} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Name" value={form.name} onChange={handleChange("name")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Department" value={form.department} onChange={handleChange("department")} />
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth label="Subject" value={form.subject} onChange={handleChange("subject")} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Category" value={form.category} onChange={handleChange("category")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            value={form.description}
            onChange={handleChange("description")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <AttachFileIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Type" value={form.type} onChange={handleChange("type")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Priority" value={form.priority} onChange={handleChange("priority")} />
        </Grid>
        <Grid item xs={12} md={6}>
   <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={(value) => console.log("Captcha value:", value)} />
 </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="flex-end" alignItems="center">
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#55D6C2",
              color: "#000",
              textTransform: "none",
              px: 4,
              py: 1,
              fontWeight: "bold",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#4ccab9" },
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

