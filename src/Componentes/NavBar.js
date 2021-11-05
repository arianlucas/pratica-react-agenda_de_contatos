import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
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
=======

export default function CustomNavBar() {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#134563" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KONTACTS
          </Typography>
          <Button color="inherit" onClick={() => history.push("/")}>
            <ExitToAppIcon />
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
