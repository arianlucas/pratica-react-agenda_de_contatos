import { useState, useContext } from "react";
import UseContext from "../Contexto/UseContext";
<<<<<<< HEAD
import { useLocalStorage } from "react-use";
=======
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110

export function useAuth() {
  return useContext(UseContext);
}

export default function useGlobal() {
  const [exibAlert, setExibAlert] = useState(false);
  const [verificarVazio, setVerificarVazio] = useState("");
<<<<<<< HEAD
  const [token, setToken, removeToken] = useLocalStorage("tokenlogin", null);
=======
  const [token, setToken] = useState(null);
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
  const [contatos, setContatos] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  async function carregarContatos() {
    try {
      const response = await fetch(
        `https://cubos-api-contacts.herokuapp.com/contatos`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      setContatos(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(
        `https://cubos-api-contacts.herokuapp.com/contatos/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
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
        setModalDelete(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return {
    exibAlert,
    setExibAlert,
    verificarVazio,
    setVerificarVazio,
    token,
    setToken,
<<<<<<< HEAD
    removeToken,
=======
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
    contatos,
    setContatos,
    carregarContatos,
    modalDelete,
    setModalDelete,
    handleDelete,
    modalOpen,
    setModalOpen,
  };
}
