const express = require("express");
const router = express.Router();

let tickets = [
  { id: 1, subject: "Login Issue", status: "Open", description: "Can't login", createdBy: "demo@example.com" }
];

router.get("/tickets", (req, res) => res.json(tickets));

router.post("/tickets", (req, res) => {
  const ticket = { ...req.body, id: tickets.length + 1 };
  tickets.push(ticket);
  res.json(ticket);
});

router.get("/tickets/:id", (req, res) => {
  const ticket = tickets.find(t => t.id == req.params.id);
  ticket ? res.json(ticket) : res.status(404).json({ error: "Not found" });
});

module.exports = router;