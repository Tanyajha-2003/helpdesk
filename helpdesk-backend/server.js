// server.js
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(cors({
  origin: "https://your-frontend-name.onrender.com" 
}));

// In-memory data
const users = [];
const tickets = [];

// Secret for JWT
const JWT_SECRET = "supersecretkey";

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Signup
app.post("/api/signup", async (req, res) => {
  const { username, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, password: hashed, role });
  res.json({ message: "User registered." });
});

// Login
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ message: "Invalid credentials." });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: "Invalid credentials." });

  const token = jwt.sign({ username: user.username, role: user.role }, JWT_SECRET);
  res.json({ token });
});

// Get tickets
app.get("/api/tickets", authenticateToken, (req, res) => {
  res.json(tickets);
});
app.post("/api/forgot-password", (req, res) => {
    const { email } = req.body;
    console.log("Reset link requested for:", email);
    res.json({ success: true, message: "Reset link sent to email (simulated)" });
  });
// Create ticket
app.post("/api/tickets", authenticateToken, (req, res) => {
  const { subject, description, priority, status } = req.body;
  const id = tickets.length + 1;
  tickets.push({
    id,
    subject,
    description,
    priority,
    status,
    createdBy: req.user.username,
    date: new Date().toLocaleDateString(), 
  });
  res.json({ message: "Ticket created." });
});

// Update ticket status
app.put("/api/tickets/:id", authenticateToken, (req, res) => {
  const ticket = tickets.find((t) => t.id === parseInt(req.params.id));
  if (!ticket) return res.status(404).json({ message: "Ticket not found." });
  ticket.status = req.body.status;
  res.json({ message: "Ticket updated." });
});
app.use(express.static(path.join(__dirname, "../helpdesk-frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../helpdesk-frontend/build", "index.html"));
  });
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
