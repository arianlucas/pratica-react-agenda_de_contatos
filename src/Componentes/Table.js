import { useEffect } from "react";
import { useAuth } from "../Global/useGlobal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BasicTable() {
  const { contatos, carregarContatos, setModalDelete, setModalOpen } =
    useAuth();

  useEffect(() => {
    carregarContatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer
      component={Paper}
<<<<<<< HEAD
      sx={{ width: 956, alignSelf: "flex-start", marginBottom: "2rem" }}
=======
      sx={{ width: "60rem", alignSelf: "flex-start", marginBottom: "2rem" }}
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contatos.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.telefone}</TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div>
                  <EditIcon
                    onClick={() => setModalOpen(row)}
<<<<<<< HEAD
                    sx={{
                      ":hover": { cursor: "pointer" },
                      height: 20,
                      width: 20,
                    }}
                  />
                  <DeleteIcon
                    onClick={() => setModalDelete(row)}
                    sx={{
                      ":hover": { cursor: "pointer" },
                      height: 20,
                      width: 20,
                    }}
=======
                    sx={{ ":hover": { cursor: "pointer" } }}
                  />
                  <DeleteIcon
                    onClick={() => setModalDelete(row)}
                    sx={{ ":hover": { cursor: "pointer" } }}
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
