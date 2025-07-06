import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import TicketDetailsModal from "../User/TicketDetailsModal";
import API from "../../api";

export default function MyTicket() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch tickets from backend
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await API.get("/tickets");
        setTickets(res.data);
        setFilteredTickets(res.data);
      } catch (err) {
        console.error("Error fetching tickets:", err);
      }
    };
    fetchTickets();
  }, []);

  // Handle search input
  useEffect(() => {
    const lower = searchQuery.toLowerCase();
    const filtered = tickets.filter(
      (t) =>
        t.subject.toLowerCase().includes(lower) ||
        t.description?.toLowerCase().includes(lower) ||
        t.id.toString().includes(lower)
    );
    setFilteredTickets(filtered);
  }, [searchQuery, tickets]);

  const getColor = (status) => {
    switch (status) {
      case "In Progress":
        return "success";
      case "On hold":
        return "warning";
      case "Closed":
        return "default";
      default:
        return "primary";
    }
  };

  return (
    <Box>
      <Typography variant="h6" mb={2} align="center">
        List of Tickets
      </Typography>

      <Box mb={2}>
        <TextField
          label="Find ticket"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ticket No.</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created By</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTickets.map((ticket) => (
            <TableRow
              key={ticket.id}
              hover
              onClick={() => setSelectedTicket(ticket)}
            >
              <TableCell sx={{ color: "blue", cursor: "pointer" }}>
                {ticket.id}
              </TableCell>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>
                <Chip label={ticket.status} color={getColor(ticket.status)} />
              </TableCell>
              <TableCell>{ticket.createdBy}</TableCell>
              <TableCell>{ticket.date || "—"}</TableCell>
              <TableCell>{ticket.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedTicket && (
        <TicketDetailsModal
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </Box>
  );
}
