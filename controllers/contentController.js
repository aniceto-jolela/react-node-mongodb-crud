require("../models/usuario");
const { Mongoose } = require("../share/mongoose.export");
const Usuarios = Mongoose.model("usuarios");

module.exports = {
  async update(req, res) {
    const { id } = req.params;
    const { nome, sobrenome, email } = req.body;
    const usuarioUpdate = await Usuarios.findOne({ _id: id });

    if (nome || sobrenome || email) {
      (usuarioUpdate.nome = nome), (usuarioUpdate.sobrenome = sobrenome);
      usuarioUpdate.email = email;

      await usuarioUpdate.save();
    }
    return res.json(usuarioUpdate);
  },
};
