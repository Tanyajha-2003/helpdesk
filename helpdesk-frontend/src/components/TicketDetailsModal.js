import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

export default function TicketDetailsModal({ ticket, onClose }) {
  return (
    <Dialog open={!!ticket} onClose={onClose} fullWidth>
      <DialogTitle>Ticket Details</DialogTitle>
      <DialogContent>
        <Typography>Ticket No: {ticket.id}</Typography>
        <Typography>Date: {ticket.date}</Typography>
        <Typography>Name: John Doe</Typography>
        <Typography>Dept: IT Support</Typography>
        <Typography>Title: {ticket.subject}</Typography>
        <Typography>Description: Sample description for {ticket.subject}</Typography>
        <Typography>Category: General</Typography>
        <Typography>Type: Issue</Typography>
        <Typography>Priority: Medium</Typography>
        <Typography>Status: {ticket.status}</Typography>
        <Typography>Attachment: -</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="success">Close</Button>
      </DialogActions>
    </Dialog>
  );
}
