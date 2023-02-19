const express = require("express");
const cors = require("cors");
const {Mongoose} = require('../share/mongoose.export') 
const Port = 5000;

const App = express();
App.use(cors());


//Mongoose
Mongoose.Promise = global.Promise
Mongoose.connect('mongodb://localhost/reactnode').then(()=>{
  console.log('Conectado a db.')
}).catch((error)=>{
  console.log('Error ao se conectar.')
})

App.listen(Port, () => {
  console.log("Connect success!");
});

module.exports=App