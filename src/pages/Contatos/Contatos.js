import "./style.css";
import CustomNavbar from "../../Componentes/NavBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicTable from "../../Componentes/Table";
import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { useAuth } from "../../Global/useGlobal";

export default function Contatos() {
  const [novoCont, setNovoCont] = useState({
    nome: "",
    email: "",
    telefone: "",
  });
  const {
    verificarVazio,
    setVerificarVazio,
    token,
    setExibAlert,
    carregarContatos,
    modalDelete,
    setModalDelete,
    handleDelete,
    modalOpen,
    setModalOpen,
  } = useAuth();

  useEffect(() => {
    if (!novoCont.nome || !novoCont.email || !novoCont.telefone) {
      setVerificarVazio(false);
    }
  }, [novoCont.email, novoCont.nome, novoCont.telefone, setVerificarVazio]);

  useEffect(() => {
    if (modalOpen.nome) {
      setNovoCont({
        nome: modalOpen.nome,
        email: modalOpen.email,
        telefone: modalOpen.telefone,
      });
    } else {
      setNovoCont({
        nome: "",
        email: "",
        telefone: "",
      });
    }
  }, [modalOpen.email, modalOpen.nome, modalOpen.telefone]);

  function handleValues({ target }) {
    setNovoCont({ ...novoCont, [target.name]: target.value });
  }

  async function handleAddContato() {
    if (!novoCont.nome || !novoCont.email || !novoCont.telefone) {
      setVerificarVazio("vazios");
    }

    const body = {
      nome: novoCont.nome,
      email: novoCont.email,
      telefone: novoCont.telefone,
    };

    try {
      const response = await fetch(
        `https://cubos-api-contacts.herokuapp.com/contatos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
        await carregarContatos();

        setModalOpen(false);
        setNovoCont({
          nome: "",
          email: "",
          telefone: "",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleEditContato() {
    if (!novoCont.nome || !novoCont.email || !novoCont.telefone) {
      setVerificarVazio("vazios");
    }

    const body = {
      nome: novoCont.nome,
      email: novoCont.email,
      telefone: novoCont.telefone,
    };

    try {
      const response = await fetch(
        `https://cubos-api-contacts.herokuapp.com/contatos/${modalOpen.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
        await carregarContatos();

        setModalOpen(false);
        setNovoCont({
          nome: "",
          email: "",
          telefone: "",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="Contatos">
      <CustomNavbar />
      <div className="body-contatos">
        <Button
          variant="contained"
          color="success"
          onClick={() => setModalOpen("add")}
          sx={{
            alignSelf: "flex-start",
            marginBottom: "2rem",
            width: 237,
            height: 50,
            fontSize: "1.6rem",
          }}
        >
          Adicionar
        </Button>
        <BasicTable />
      </div>

      {modalOpen && (
        <div className="modalAddEdit">
          <div className="container-modal">
            <img
              className="btn-fechar"
              src="./assets/btn-fechar.png"
              alt="Bot??o de Fechar"
              onClick={() => setModalOpen(false)}
            />

            <h1 className="modal-title">
              {modalOpen.nome ? "Editar Contato" : "Novo Contato"}
            </h1>

            {verificarVazio === "vazios" && (
              <Typography variant="caption" gutterBottom>
                Todos os campos devem ser corretamente preenchidos
              </Typography>
            )}
            <input
              type="text"
              placeholder="Nome"
              className={`inputs-modal ${verificarVazio ? "error" : ""}`}
              name="nome"
              value={novoCont.nome}
              onChange={handleValues}
            />

            <input
              type="text"
              placeholder="E-mail"
              className={`inputs-modal ${verificarVazio ? "error" : ""}`}
              name="email"
              value={novoCont.email}
              onChange={handleValues}
            />

            <InputMask
              mask="(99)999999999"
              placeholder="Telefone"
              className={`inputs-modal ${verificarVazio ? "error" : ""}`}
              name="telefone"
              value={novoCont.telefone}
              onChange={handleValues}
            />

            <Button
              variant="contained"
              color="success"
              className="btn_modal btn-add"
              sx={{
                backgroundColor: "#04C45C",
                marginBottom: 1,
                marginTop: "55px",
              }}
              onClick={modalOpen.nome ? handleEditContato : handleAddContato}
            >
              {modalOpen.nome ? "Salvar" : "Adicionar"}
            </Button>

            <Button
              onClick={() => setModalOpen(false)}
              variant="contained"
              color="error"
              className="btn_modal btn-limpar"
            >
              {modalOpen.nome ? "Cancelar" : "Limpar"}
            </Button>
          </div>
        </div>
      )}

      {modalDelete && (
        <div className="modal-delete">
          <div className="container-modal container-modaldelete">
            <img
              className="btn-fechar"
              src="./assets/btn-fechar.png"
              alt="Bot??o de Fechar"
              onClick={() => setModalDelete(false)}
            />

            <h1 className="modal-title delete-title">Confirma a exclus??o?</h1>
            <Typography variant="body1" gutterBottom sx={{ fontSize: 16 }}>
              Deseja excluir o contato, {modalDelete.nome}?
            </Typography>

            <Button
              variant="contained"
              color="success"
              className="btn_modal btn-add"
              sx={{
                backgroundColor: "#04C45C",
                marginBottom: 1,
                marginTop: "55px",
              }}
              onClick={() => handleDelete(modalDelete.id)}
            >
              Excluir
            </Button>

            <Button
              variant="contained"
              color="error"
              className="btn_modal btn-limpar"
              onClick={() => setModalDelete(false)}
            >
              Cancelar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
