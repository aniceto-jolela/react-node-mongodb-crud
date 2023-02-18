const App = require("../app");
const Path = require('path')
const Route = App._router

Route.get("/", (req, res) => {
  res.json([{ title: "WELCOME BACK" }]);
});

Route.get("/create", (req, res) => {});
Route.get("Update", (req, res) => {});
Route.get("delete", (req, res) => {});

Route.get("/read", (req, res) => {
  res.json([{ nome: "Aniceto" }, { email: "author@gmail.com" }]);
});

module.exports = {
    Route,Path
}
