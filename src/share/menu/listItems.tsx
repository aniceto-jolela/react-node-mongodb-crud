import * as React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DatasetIcon from '@mui/icons-material/Dataset';
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";

export default function MainListItems() {
  const [setSelected, getSelected] = React.useState(1);

  function Selected(item: number) {
    getSelected(item);
  }

  return (
    <React.Fragment>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: setSelected === 1 ? "blue" : "inherit",
        }}
        onClick={() => Selected(1)}
      >
        <ListItemButton>
          <ListItemIcon>
            <LayersIcon color={setSelected === 1 ? "info" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </Link>

      <Link
        to="/cadastro"
        style={{
          textDecoration: "none",
          color: setSelected === 2 ? "blue" : "inherit",
        }}
        onClick={() => Selected(2)}
      >
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon color={setSelected === 2 ? "info" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Cadastro" />
        </ListItemButton>
      </Link>

      <Link
        to="/dados"
        style={{
          textDecoration: "none",
          color: setSelected === 3 ? "blue" : "inherit",
        }}
        onClick={() => Selected(3)}
      >
        <ListItemButton>
          <ListItemIcon>
            <DatasetIcon color={setSelected === 3 ? "info" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Dados" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
}