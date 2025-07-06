import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const logs = [
  { id: 1, user: "johndoe", action: "Logged in", date: "2025-07-05" },
  { id: 2, user: "admin", action: "Updated settings", date: "2025-07-05" },
];

export default function AdminUserLogs() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>User</TableCell>
          <TableCell>Action</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {logs.map((log) => (
          <TableRow key={log.id}>
            <TableCell>{log.id}</TableCell>
            <TableCell>{log.user}</TableCell>
            <TableCell>{log.action}</TableCell>
            <TableCell>{log.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
