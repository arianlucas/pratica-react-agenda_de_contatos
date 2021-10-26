import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Claudia M. Sousa",
    "claudia@teste.com.br",
    "(99)9999-9999",
    "",
    <div>
      <EditIcon />
      <DeleteIcon />
    </div>
  ),
  createData(
    "Claudia M. Sousa",
    "claudia@teste.com.br",
    "(99)9999-9999",
    "",
    <div>
      <EditIcon />
      <DeleteIcon />
    </div>
  ),
  createData(
    "Claudia M. Sousa",
    "claudia@teste.com.br",
    "(99)9999-9999",
    "",
    <div>
      <EditIcon />
      <DeleteIcon />
    </div>
  ),
  createData(
    "Claudia M. Sousa",
    "claudia@teste.com.br",
    "(99)9999-9999",
    "",
    <div>
      <EditIcon />
      <DeleteIcon />
    </div>
  ),
  createData(
    "Claudia M. Sousa",
    "claudia@teste.com.br",
    "(99)9999-9999",
    "",
    <div>
      <EditIcon />
      <DeleteIcon />
    </div>
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ width: "60rem" }}>
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
