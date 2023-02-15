import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Accoes from '../../share/accoes';

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
    width: 110,
    editable: true,
  },
  {
    field: 'Acções',
    headerName: 'Acções',
    width: 110,
    editable: false,
  }
];

const rows = [
  { id: 1, Sobrenome: 'Snow', Nome: 'Jon', Email: 35,Acções:<Accoes/> },
  { id: 2, Sobrenome: 'Lannister', Nome: 'Cersei', Email: 42,Acções:<Accoes/> },
  { id: 3, Sobrenome: 'Lannister', Nome: 'Jaime', Email: 45,Acções:<Accoes/> },
  { id: 4, Sobrenome: 'Stark', Nome: 'Arya', Email: 16,Acções:<Accoes/> },
  { id: 5, Sobrenome: 'Targaryen', Nome: 'Daenerys', Email: null,Acções:<Accoes/> },
  { id: 6, Sobrenome: 'Melisandre', Nome: null, Email: 150,Acções:<Accoes/> },
  { id: 7, Sobrenome: 'Clifford', Nome: 'Ferrara', Email: 44,Acções:<Accoes/> },
  { id: 8, Sobrenome: 'Frances', Nome: 'Rossini', Email: 36,Acções:<Accoes/> },
  { id: 9, Sobrenome: 'Roxie', Nome: 'Harvey', Email: 65,Acções:<Accoes/> },
];

export default function DataGridDemo() {
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