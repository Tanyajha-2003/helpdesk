import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Cancel";

export default function OperationTicketApproval() {
  const dummyTickets = [
    {
      id: "1234",
      subject: "Login issue",
      category: "Access Issue",
      priority: "High",
      date: "13/08/21",
    },
    {
      id: "1124",
      subject: "New ticket issue",
      category: "Access Issue",
      priority: "Medium",
      date: "14/08/21",
    },
  ];

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Ticket Approval
      </Typography>

      <TextField label="Find ticket" size="small" sx={{ mb: 2 }} />

      <Table>
        <TableHead >
          <TableRow>
            <TableCell>Ticket No</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Assign to</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyTickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell sx={{ color: "blue", cursor: "pointer" }}>{ticket.id}</TableCell>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>{ticket.category}</TableCell>
              <TableCell>{ticket.priority}</TableCell>
              <TableCell>{ticket.date}</TableCell>
              <TableCell>
                <IconButton color="success"><CheckIcon /></IconButton>
                <IconButton color="error"><CloseIcon /></IconButton>
              </TableCell>
              <TableCell>
                <Select size="small" defaultValue="">
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="support1">Support Team 1</MenuItem>
                  <MenuItem value="support2">Support Team 2</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
