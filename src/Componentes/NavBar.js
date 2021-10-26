import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function CustomNavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#134563" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KONTACTS
          </Typography>
          <Button color="inherit">
            <ExitToAppIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
