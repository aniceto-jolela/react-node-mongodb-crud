const { Schema, Mongoose } = require("../share/mongoose.export");

const Usuario = new Schema({
  nome: {
    type: String
  },
  sobrenome: {
    type: String,
  },
  email: {
    type: String,
  }
});

Mongoose.model("usuarios", Usuario);