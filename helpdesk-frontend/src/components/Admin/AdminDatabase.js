import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tabs,
  Tab,
  IconButton,
  TextField,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AdminDatabase() {
  // Dummy Data
  const staffData = {
    User: [
      { id: "ABC123", name: "Abu", department: "IT", speciality: "Software" },
      { id: "ABC124", name: "Ahmad", department: "Software", speciality: "Networking" },
      { id: "ABC125", name: "Ali", department: "Technical", speciality: "Hardware" },
    ],
    "Operation Team": [],
    "Technical Support": [],
  };

  const [tab, setTab] = useState("User");
  const [search, setSearch] = useState("");

  const filteredData = staffData[tab].filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.id.toLowerCase().includes(search.toLowerCase()) ||
      row.department.toLowerCase().includes(search.toLowerCase()) ||
      row.speciality.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Database
      </Typography>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(e, val) => setTab(val)}
        sx={{
          mb: 2,
          "& .MuiTab-root": {
            minHeight: "unset",
            padding: "6px 16px",
          },
        }}
      >
        <Tab label="User" value="User" />
        <Tab label="Operation Team" value="Operation Team" />
        <Tab label="Technical Support" value="Technical Support" />
      </Tabs>

      {/* Search */}
      <TextField
        label="Find staff"
        size="small"
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <Table>
        <TableHead sx={{ backgroundColor: "#52D1C5" }}>
          <TableRow>
            <TableCell>Staff ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Speciality</TableCell>
            <TableCell>Setting</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>{row.speciality}</TableCell>
              <TableCell>
                <IconButton size="small" color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton size="small" color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {filteredData.length === 0 && (
            <TableRow>
              <TableCell colSpan={5}>
                <Typography variant="body2" align="center" color="textSecondary">
                  No data to display.
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
}
