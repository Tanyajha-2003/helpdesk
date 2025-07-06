import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    language: true,
    dataBackup: true,
    goDash: true,
    superController: true,
    enableSMTP: true,
    editAuthorization: true,
    authorityLevel: "BM",
    enableNotification: true,
  });

  const handleChange = (field) => (event) => {
    setSettings((prev) => ({
      ...prev,
      [field]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
    }));
  };

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Setting
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">General</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                checked={settings.language}
                onChange={handleChange("language")}
              />
            }
            label="Language"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={settings.dataBackup}
                onChange={handleChange("dataBackup")}
              />
            }
            label="Data Backup"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Connect To</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                checked={settings.goDash}
                onChange={handleChange("goDash")}
              />
            }
            label="GoDash"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={settings.superController}
                onChange={handleChange("superController")}
              />
            }
            label="SuperController"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Email</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                checked={settings.enableSMTP}
                onChange={handleChange("enableSMTP")}
              />
            }
            label="Enable SMTP"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Authorization</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                checked={settings.editAuthorization}
                onChange={handleChange("editAuthorization")}
              />
            }
            label="Edit Authorization"
          />
          <Box mt={2}>
            <Typography variant="body2" gutterBottom>
              Authority Level
            </Typography>
            <Select
              size="small"
              value={settings.authorityLevel}
              onChange={handleChange("authorityLevel")}
              sx={{ width: 120 }}
            >
              <MenuItem value="BM">BM</MenuItem>
              <MenuItem value="BI">BI</MenuItem>
            </Select>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Notification</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                checked={settings.enableNotification}
                onChange={handleChange("enableNotification")}
              />
            }
            label="Enable Notification"
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
