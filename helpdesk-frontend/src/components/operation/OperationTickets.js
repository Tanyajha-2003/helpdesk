import React, { useEffect, useState } from "react";
import {
  Table, TableHead, TableBody, TableRow, TableCell,
  Button, Chip, Dialog, DialogTitle, DialogContent, Typography
} from "@mui/material";
import API from "../../api";

export default function OperationTickets() {
  const [tickets, setTickets] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await API.get("/tickets");
        setTickets(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTickets();
  }, []);

  const getColor = (status) => {
    switch (status) {
      case "Open": return "error";
      case "In Progress": return "warning";
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
          {tickets.map((ticket) => (
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
        <Dialog open onClose={() => setSelected(null)} fullWidth>
          <DialogTitle>Ticket Details</DialogTitle>
          <DialogContent>
            <Typography><b>Subject:</b> {selected.subject}</Typography>
            <Typography><b>Status:</b> {selected.status}</Typography>
            <Typography><b>Priority:</b> {selected.priority}</Typography>
            <Typography><b>Date:</b> {selected.date}</Typography>
            <Typography><b>Description:</b> {selected.description || "—"}</Typography>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
