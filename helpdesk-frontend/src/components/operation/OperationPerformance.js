import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";

const teamMembers = [
  { name: "Operation Name 1", ticketsHandled: 5 },
  { name: "Operation Name 2", ticketsHandled: 3 },
  { name: "Operation Name 3", ticketsHandled: 7 },
];

export default function OperationPerformance() {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Performance
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold">My Performance</Typography>
        <Typography>Total Tickets Handled: 5</Typography>
        <Typography>Tickets Closed: 3</Typography>
        <Typography>Tickets In Progress: 2</Typography>
      </Paper>

      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Team Members
      </Typography>
      <Paper>
        <List>
          {teamMembers.map((member, idx) => (
            <React.Fragment key={idx}>
              <ListItem
                secondaryAction={
                  <Button size="small" variant="outlined">
                    View Details
                  </Button>
                }
              >
                <ListItemText
                  primary={member.name}
                  secondary={`Tickets Handled: ${member.ticketsHandled}`}
                />
              </ListItem>
              {idx < teamMembers.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
