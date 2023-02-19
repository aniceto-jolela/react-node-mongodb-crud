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
  const newUsuario={
    nome: String,
    sobrenome: String,
    email: String
  }
  new Usuario(newUsuario).save().then(()=>{
    console.log('Cadastrado com sucesso!')
  }).catch((err)=>{
    console.log('Usuário não cadastrado.'+err)
  })
});
Route.get("Update", (req, res) => {
  Usuario.findOne({_id:req.params.id}).then((usuario)=>{
    console.log('Usuário editado com sucesso')
  }).catch((err)=>{
    console.log('Erro ao actualizar usuário.')
  })
});
Route.get("delete", (req, res) => {
  Usuario.deleteOne({_id:req.params.id}).then((usuario)=>{
    console.log('Usuário deletado com sucesso.')
  }).catch((err)=>{
    console.log('Erro ao deletar')
  })
});

Route.get("/read", (req, res) => {
  Usuario.find()
    .then((usuario) => {
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
