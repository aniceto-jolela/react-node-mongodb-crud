import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import api from '../../api';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
    field: 'Nome',
    headerName: 'Nome',
    width: 300,
    editable: true,
  },
  {
    field: 'Sobrenome',
    headerName: 'Sobrenome',
    width: 200,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email',
    width: 400,
    editable: true,
  },
];


type propsUsuario={
  nome:String,
  sobrenome:String,
  email:String
}

export default function DataGridDemo() {
  const [mapUser,setMapUser] = React.useState<propsUsuario[]>([])
  

  React.useEffect(()=>{
    api.get('read').then((i)=>{
      setMapUser(i.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const rows =  mapUser?.map((item,count)=>({ id: ++count, Sobrenome: item.sobrenome, Nome: item.nome, Email: item.email}));

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}