import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Toolbar, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../share/navigation/breadcrumbs";
import Button from "@mui/material/Button";

export default function Create() {
  return (
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
        <CustomizedBreadcrumbs Label="Cadastro" />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          direction="column"
          alignItems="center"
          style={{ background: "#FFF",paddingTop:100,paddingBottom:40 }}
        >
          <Grid item xs={6} md={12}>
            <Typography>Nome</Typography>
            <TextField
              required
              id="outlined-required"
              label="nome"
              defaultValue=""
              size="small"
              helperText="Digite o nome"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Sobrenome</Typography>
            <TextField
              required
              id="outlined-required"
              label="Sobrenome"
              defaultValue=""
              size="small"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Email</Typography>
            <TextField
              id="outlined-helperText"
              label="nome@provedor.com"
              defaultValue=""
              size="small"
            />
          </Grid>
          <Grid item xs={6} md={8}>
            <Button variant="outlined" size="small">
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
