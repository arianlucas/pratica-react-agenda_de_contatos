import "./style.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../Global/useGlobal";

export default function Cadastro() {
  const [nomeCadastro, setNomeCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");
  const { setExibAlert, verificarVazio, setVerificarVazio } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (nomeCadastro || emailCadastro || senhaCadastro) {
      setVerificarVazio(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nomeCadastro, emailCadastro, senhaCadastro]);

  async function cadastrarUsuario() {
    if (!nomeCadastro) {
      return setVerificarVazio("nome");
    }
    if (!emailCadastro) {
      return setVerificarVazio("email");
    }
    if (!senhaCadastro) {
      return setVerificarVazio("senha");
    }

    const body = {
      nome: nomeCadastro,
      email: emailCadastro,
      senha: senhaCadastro,
    };

    try {
      const response = await fetch(
        `https://cubos-api-contacts.herokuapp.com/usuarios`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setExibAlert({ data, typealert: "error" });

        setTimeout(() => {
          setExibAlert(false);
        }, 3000);
      } else {
        setExibAlert({ data: "Conta criada com sucesso", typealert: "sucess" });

        history.push("/");

        setTimeout(() => {
          setExibAlert(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="Cadastro">
      <div className="left">
        <Box className="box-form">
<<<<<<< HEAD
          <Typography
            variant="h5"
            className="title-cadastro"
            sx={{ fontSize: 24 }}
          >
=======
          <Typography variant="h5" className="title-cadastro">
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
            Cadastre-se
          </Typography>
          <TextField
            error={verificarVazio === "nome"}
            helperText={
              verificarVazio === "nome" && "O campo nome deve ser preenchido."
            }
            className="outlined-basic"
            label="Nome"
            variant="outlined"
            value={nomeCadastro}
            onChange={({ target }) => setNomeCadastro(target.value)}
            sx={{ width: "30rem", marginBottom: "1rem" }}
          />
          <TextField
            error={verificarVazio === "email"}
            helperText={
              verificarVazio === "email" && "O campo email deve ser preenchido."
            }
            className="outlined-basic"
            label="E-mail"
            variant="outlined"
            value={emailCadastro}
            onChange={({ target }) => setEmailCadastro(target.value)}
            sx={{ width: "30rem", marginBottom: "1rem" }}
          />
          <TextField
            error={verificarVazio === "senha"}
            helperText={
              verificarVazio === "senha" && "A senha deve ser informada."
            }
            type="password"
            className="outlined-basic"
            label="Senha"
            variant="outlined"
            value={senhaCadastro}
            onChange={({ target }) => setSenhaCadastro(target.value)}
            sx={{ width: "30rem", marginBottom: "4.5rem" }}
          />
          <Button
            className="login-btn"
            variant="contained"
            onClick={() => cadastrarUsuario()}
<<<<<<< HEAD
            sx={{
              width: 475,
              minHeight: 50,
              marginBottom: "0.8rem",
              fontSize: 16,
              borderRadius: "0.8rem",
            }}
=======
            sx={{ width: "30rem", height: "3rem", marginBottom: "0.5rem" }}
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
          >
            Cadastrar
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => history.push("/")}
<<<<<<< HEAD
            sx={{
              width: 475,
              minHeight: 50,
              marginBottom: "6rem",
              fontSize: 16,
              borderRadius: "0.8rem",
            }}
=======
            sx={{ width: "30rem", height: "3rem", marginBottom: "6rem" }}
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
          >
            Cancelar
          </Button>

<<<<<<< HEAD
          <Typography variant="body2" sx={{ fontSize: 16 }}>
=======
          <Typography variant="body2" gutterBottom>
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
            Já tem cadastro? <Link to="/">Clique aqui!</Link>
          </Typography>
        </Box>
      </div>
      <div className="right">
        <img src="./assets/imagem-direita.png" alt="Banner de Cadastro" />
      </div>
    </div>
  );
}
