<div align="center">

<img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Nodejs" width="100" height="100" />
<br/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="Postman" width="300" height="100" />
<br/>
<img src="https://logos-download.com/wp-content/uploads/2020/06/Postman_Logo.png" alt="Postman" width="300" height="100" />


</div>

# Back-end


[Backend api documentation](https://documenter.getpostman.com/view/24942571/2s93CNMDCz)


```js

 "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "express-fileupload": "^1.4.0",
    "express-session": "^1.17.3",
    "mongoose": "^6.9.2",
    "nodemon": "^2.0.20"
  }

```

# Mongodb


* Step 1 - Install
```js
use reactnode
```

* Step 2 - Status
```js
systemctl status mongod
```

* Step 3 - Active
```js
systemctl start mongod
```

* Step 4 - Create db
```js
use reactnode
```

* Step 5 - Add collections
```js
db.usuarios.insertMany([{nome:'Aniceto',sobrenome:'Thegifted',email:'thegifted@gmail.com'},{nome:'Hossana',sobrenome:'Kely',email:'kely@gmail.com'},{nome:'Joseanne',sobrenome:'Tavares',email:'tavares@gmil.com'}])
```

* Step 6 - Show collections
```js
show collections
```

* Step 7 - Find collections
```js
db.usuarios.find()
```
#
#

# Config

```js
const express = require("express");
const cors = require("cors");
const {Mongoose} = require('../share/mongoose.export'); 
const { json } = require("express");
const Port = 5000;

const App = express();
App.use(cors());
App.use(json())


//Mongoose
Mongoose.Promise = global.Promise
Mongoose.connect('mongodb://localhost/reactnode').then(()=>{
  console.log('Connect db.')
}).catch((error)=>{
  console.log('Error ao se conectar.')
})

App.listen(Port, () => {
  console.log("Connect success!");
});

module.exports=App
```

# Routes

```js
const App = require("../config/app");
const contentController = require("../controllers/contentController");
const usuarioController = require("../controllers/usuario.controller");
const Route = App._router;

Route.get("/", usuarioController.home);
Route.get("/user", usuarioController.read);
Route.post("/user", usuarioController.create);
Route.post("/content/:id",contentController.update)
Route.delete("/user/:id", usuarioController.delete);

module.exports = {
  Route,
};

```

# Models

```js
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
```

# Mongoose

```js
const Mongoose = require('mongoose')
const Schema = Mongoose.Schema


module.exports={
    Mongoose,Schema
}
```

# Controllers

```js
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
```


```js
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

```
