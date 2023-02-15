import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Toolbar } from "@mui/material";
import CustomizedBreadcrumbs from "../../share/navigation/breadcrumbs";
import DataGridDemo from "./datagrid";



const Table=()=>{

    return(
      <Box
      component="form"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
      noValidate
      autoComplete="off"
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <CustomizedBreadcrumbs Label="Dados" />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          direction="column"
          alignItems="center"
          style={{ background: "#FFF",paddingTop:100,paddingBottom:40 }}
        >
          <DataGridDemo/>
          
        </Grid>
      </Container>
    </Box>
    
    )
}

export default Table