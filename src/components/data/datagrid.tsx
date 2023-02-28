import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import api from "../../api";
import Button from "@mui/material/Button";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "Cod", headerName: "Cod", width: 60 },
  {
    field: "Nome",
    headerName: "Nome",
    width: 300,
    editable: true,
  },
  {
    field: "Sobrenome",
    headerName: "Sobrenome",
    width: 200,
    editable: true,
  },
  {
    field: "Email",
    headerName: "Email",
    width: 300,
    editable: true,
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
    console.log(" ID =" + e);
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
      : console.log(idUser);
  }

  function updateSelectRow(e:any){
    console.log("Dados = ", e)
  }

  const rows = mapUser?.map((item, count) => ({
    id: item._id,
    Sobrenome: item.sobrenome,
    Nome: item.nome,
    Email: item.email,
  }));

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

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          onSelectionModelChange={(e) => selectedRow(e)}
          onEditRowsModelChange={(up)=>updateSelectRow(up)}
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
