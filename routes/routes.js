const App = require("../config/app");
const contentController = require("../controllers/contentController");
const usuarioController = require("../controllers/usuario.controller");
const Route = App._router;

Route.get("/", usuarioController.home);
Route.get("/usuario", usuarioController.read);
Route.post("/usuario", usuarioController.create);
Route.post("/content/:id",contentController.update)
Route.delete("/usuario/:id", usuarioController.delete);

module.exports = {
  Route,
};
