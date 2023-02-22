require("../models/usuario");
const { Mongoose } = require("../share/mongoose.export");
const Usuarios = Mongoose.model("usuarios");

module.exports = {
  async home(req, res) {
    return await res.json([{ title: "Wecome Back darling..." }]);
  },
  async read(req, res) {
    const usuariosRead = await Usuarios.find();

    return res.json(usuariosRead);
  },

  async create(req, res) {
    const { nome, sobrenome, email } = req.body;

    if (!nome || !sobrenome) {
      return res
        .status(400)
        .json({ error: "Nome/sobrenome são obrigatórios!" });
    }

    const usuarioCreated = await Usuarios.create({
      nome,
      sobrenome,
      email,
    });

    return res.json(usuarioCreated);
  },

  async delete(req, res) {
    const { id } = req.params;

    const usuarioDelete = await Usuarios.findOneAndDelete({ _id: id });

    if (usuarioDelete) {
      return res.json(usuarioDelete);
    }
    return res
      .status(401)
      .json({ error: "Registro não encontrado para deletar!" });
  },
};
