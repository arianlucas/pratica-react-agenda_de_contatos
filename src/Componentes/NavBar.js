import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useHistory } from "react-router-dom";

import { useAuth } from "../Global/useGlobal";

export default function CustomNavBar() {
  const history = useHistory();
  const { removeToken } = useAuth();

  function handleDeslogar() {
    history.push("/");
    removeToken();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: 70, backgroundColor: "#134563" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: 24 }}
          >
            KONTACTS
          </Typography>
          <Button color="inherit" onClick={() => handleDeslogar()}>
            <ExitToAppIcon sx={{ height: 28, width: 28 }} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
