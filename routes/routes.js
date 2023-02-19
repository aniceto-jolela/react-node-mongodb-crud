const App = require("../config/app");
const Path = require("path");
const { Mongoose } = require("../share/mongoose.export");
const Route = App._router;
require("../models/usuario");
const Usuario = Mongoose.model("usuarios");

Route.get("/", (req, res) => {
  res.json([{ title: "WELCOME BACK" }]);
});

Route.get("/create", (req, res) => {
  res.json([{ nome: "Aniceto" }, { email: "author@gmail.com" }]);
});
Route.get("Update", (req, res) => {});
Route.get("delete", (req, res) => {});

Route.get("/read", (req, res) => {
  Usuario.find()
    .then((usuario) => {
      console.log(usuario.length);
      res.json([usuario]);
    })
    .catch((err) => {
      console.log("Erro!" + err);
    });
});

module.exports = {
  Route,
  Path,
};
