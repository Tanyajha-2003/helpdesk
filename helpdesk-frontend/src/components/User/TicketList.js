import React, { useState } from "react";
import {
  Table, TableHead, TableBody, TableRow, TableCell,
  Button, Chip, Dialog, DialogTitle, DialogContent, Typography
} from "@mui/material";

const dummyTickets = [
  { id: 1, subject: "Login Issue", status: "Open", priority: "High", date: "2025-07-03" },
  { id: 2, subject: "Email not working", status: "Pending", priority: "Medium", date: "2025-07-02" },
  { id: 3, subject: "Software Install", status: "Resolved", priority: "Low", date: "2025-07-01" },
];

export default function TicketList() {
  const [selected, setSelected] = useState(null);

  const getColor = (status) => {
    switch (status) {
      case "Open": return "error";
      case "Pending": return "warning";
      case "Resolved": return "success";
      default: return "default";
    }
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyTickets.map(ticket => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.id}</TableCell>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>
                <Chip label={ticket.status} color={getColor(ticket.status)} />
              </TableCell>
              <TableCell>{ticket.priority}</TableCell>
              <TableCell>{ticket.date}</TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => setSelected(ticket)}>
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selected && (
        <Dialog open onClose={() => setSelected(null)}>
          <DialogTitle>Ticket Details</DialogTitle>
          <DialogContent>
            <Typography><b>Subject:</b> {selected.subject}</Typography>
            <Typography><b>Status:</b> {selected.status}</Typography>
            <Typography><b>Priority:</b> {selected.priority}</Typography>
            <Typography><b>Date:</b> {selected.date}</Typography>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
