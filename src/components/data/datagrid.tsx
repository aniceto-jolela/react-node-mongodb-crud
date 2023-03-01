import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import api from "../../api";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "Nome",
    headerName: "Nome",
    width: 300,
    editable: false,
  },
  {
    field: "Sobrenome",
    headerName: "Sobrenome",
    width: 200,
    editable: false,
  },
  {
    field: "Email",
    headerName: "Email",
    width: 300,
    editable: false,
  },
];

type propsUsuario = {
  _id: String;
  nome: String;
  sobrenome: String;
  email: String;
};

export default function DataGridDemo() {
  const [mapUser, setMapUser] = React.useState<propsUsuario[]>([]);
  const [idUser, setIdUser] = React.useState("");
  const [updateHook, setUpdateHook] = React.useState("");
  const [sms, setSms] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [sobrenome, setSobrenome] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    api
      .get("user")
      .then((i) => {
        setMapUser(i.data);
        setUpdateHook(i.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateHook]);

  function selectedRow(e?: any) {
    setIdUser(e);
  }

  function deleteSelectedRow() {
    idUser !== ""
      ? api
          .delete("user/" + idUser)
          .then((i) => {
            setIdUser("");
            setUpdateHook(i.data._id);
          })
          .catch((err) => {
            console.log(err);
          })
      : console.log("");
  }

  function updateSelectRow(e: any) {
    const { id, Nome, Sobrenome, Email } = e.row;
    setNome(Nome);
    setSobrenome(Sobrenome);
    setEmail(Email);
  }

  const rows = mapUser?.map((item, count) => ({
    id: item._id,
    Sobrenome: item.sobrenome,
    Nome: item.nome,
    Email: item.email,
  }));

  const InputTextValues = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
  };

  const handleSubmit = () => {
    nome === ""
      ? setSms("Campo obrigatório")
      : sobrenome === ""
      ? setSms("Campo obrigatório")
      : api
          .post("content/" + idUser + "", InputTextValues)
          .then((req) => {
            setUpdateHook(req.data._id);
            console.log(req.data);
          })
          .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid item xs={6} md={8} style={{ marginTop: -50, marginBottom: 30 }}>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={deleteSelectedRow}
        >
          Eiminar
        </Button>
      </Grid>

      <Grid
        container
        spacing={0}
        justifyContent="center"
        direction="row"
        alignItems="center"
        style={{ background: "#FFF", paddingTop: 10, paddingBottom: 40 }}
      >
        <Grid item xs={6} md={3}>
          <TextField
            id="outlined-required"
            label="nome"
            defaultValue=""
            size="small"
            helperText={nome === "" ? sms : ""}
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            id="outlined-required"
            label="Sobrenome"
            defaultValue=""
            helperText={sobrenome === "" ? sms : ""}
            size="small"
            name="sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            id="outlined-helperText"
            label="nome@provedor.com"
            defaultValue=""
            size="small"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="outlined" size="small" onClick={handleSubmit}>
            Editar
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          onSelectionModelChange={(e) => selectedRow(e)}
          onRowClick={(up) => updateSelectRow(up)}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          //checkboxSelection
          //disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
}
