import "./style.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Cadastro() {
  return (
    <div className="Cadastro">
      <div className="left">
        <Box className="box-form">
          <Typography variant="h5" className="title-cadastro">
            Cadastre-se
          </Typography>
          <TextField
            className="outlined-basic"
            label="Nome"
            variant="outlined"
          />
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
            Cadastrar
          </Button>
          <Button variant="contained" color="error">
            Cancelar
          </Button>
        </Box>

        <Typography variant="body2" gutterBottom>
          Já tem cadastro? Clique aqui!
        </Typography>
      </div>
      <div className="right">
        <img src="./assets/imagem-direita.png" alt="Banner de Cadastro" />
      </div>
    </div>
  );
}
