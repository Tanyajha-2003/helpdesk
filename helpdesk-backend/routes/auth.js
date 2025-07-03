const express = require("express");
const router = express.Router();

let users = [
  { email: "demo@example.com", password: "password123", name: "Demo User" }
];

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) return res.json({ success: true, user });
  res.status(401).json({ success: false, message: "Invalid credentials" });
});

router.post("/signup", (req, res) => {
  const { email, password, name } = req.body;
  users.push({ email, password, name });
  res.json({ success: true });
});

router.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  res.json({ success: true, message: "Reset link sent to email (simulated)" });
});

module.exports = router;