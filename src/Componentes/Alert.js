import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Slide from "@mui/material/Slide";

export default function CustomAlert({ infos }) {
  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Stack
        sx={{
          width: "50%",
          position: "absolute",
          top: 30,
        }}
        spacing={2}
      >
<<<<<<< HEAD
        <Alert
          severity={infos.typealert === "error" ? "error" : "success"}
          sx={{ fontSize: 16 }}
        >
          <AlertTitle sx={{ fontSize: 18 }}>
=======
        <Alert severity={infos.typealert === "error" ? "error" : "success"}>
          <AlertTitle>
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
            {infos.typealert === "error" ? "Erro" : "Successo"}
          </AlertTitle>
          <strong>{infos.data}!</strong>
        </Alert>
      </Stack>
    </Slide>
  );
}
