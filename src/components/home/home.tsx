import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Toolbar } from "@mui/material";
import CustomizedBreadcrumbs from "../../share/navigation/breadcrumbs";

const Home = () => {
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
        <CustomizedBreadcrumbs Label="Home" />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          direction="column"
          alignItems="center"
          style={{ background: "#f7f7f7", }}
        >
         <img src='/img/line.gif' width='55%' alt="Home" />
          
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
