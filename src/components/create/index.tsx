import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Toolbar, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../share/navigation/breadcrumbs";
import Button from "@mui/material/Button";
import api from "../../api";

export default function Create() {
  const [sms, setSms] = useState("");

  const initialValues = {
    nome: "",
    sobrenome: "",
    email: "",
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const [formValues, setFormValues] = useState(initialValues);
  const handleSubmit = () => {
    formValues.nome === ""
      ? setSms("Campo obrigatório")
      : formValues.sobrenome === ""
      ? setSms("Campo obrigatório")
      : api
          .post("user/", formValues)
          .then((req) => {
            console.log(req.data);
          })
          .catch((err) => console.log(err));
    setFormValues({ nome: "", sobrenome: "", email: "" });
  };

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
          style={{ background: "#FFF", paddingTop: 100, paddingBottom: 40 }}
        >
          <Grid item xs={6} md={12}>
            <Typography>Nome</Typography>
            <TextField
              id="outlined-required"
              label="nome"
              defaultValue=""
              size="small"
              helperText={formValues.nome === "" ? sms : ""}
              name="nome"
              value={formValues.nome}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Sobrenome</Typography>
            <TextField
              id="outlined-required"
              label="Sobrenome"
              defaultValue=""
              helperText={formValues.sobrenome === "" ? sms : ""}
              size="small"
              name="sobrenome"
              value={formValues.sobrenome}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>Email</Typography>
            <TextField
              id="outlined-helperText"
              label="nome@provedor.com"
              defaultValue=""
              size="small"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6} md={8}>
            <Button variant="outlined" size="small" onClick={handleSubmit}>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
