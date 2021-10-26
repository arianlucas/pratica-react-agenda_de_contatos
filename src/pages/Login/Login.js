import "./style.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <div className="Login">
      <div className="left">
        <img src="./assets/imagem-esquerda.png" alt="Banner de Login" />
      </div>
      <div className="right">
        <Box className="box-form">
          <Typography variant="caption" gutterBottom>
            Bem vindo
          </Typography>
          <Typography variant="h5" className="title-login">
            Faça o login com sua conta
          </Typography>
          <TextField
            className="outlined-basic"
            label="E-mail"
            variant="outlined"
          />
          <TextField
            className="outlined-basic"
            label="Senha"
            variant="outlined"
          />
          <Button className="login-btn" variant="contained">
            Login
          </Button>
        </Box>

        <Typography variant="body2" gutterBottom>
          Não tem cadastro? Clique aqui!
        </Typography>
      </div>
    </div>
  );
}
