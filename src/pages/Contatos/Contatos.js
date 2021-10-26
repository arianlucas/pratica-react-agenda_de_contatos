import CustomNavbar from "../../Componentes/NavBar";
import Button from "@mui/material/Button";
import BasicTable from "../../Componentes/Table";

export default function Contatos() {
  return (
    <div className="Contatos">
      <CustomNavbar />
      <Button variant="contained" color="success">
        Adicionar
      </Button>
      <BasicTable />
    </div>
  );
}
