import * as React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from '@mui/icons-material/AddTask';

function Header() {
  return (
    <React.Fragment>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        CRUD
      </Typography>
      <IconButton color="inherit" style={{ cursor: "default" }}>
        <AddTaskIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default Header;