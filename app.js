const express = require("express");
const cors = require("cors");
const Port = 5000;

const App = express();
App.use(cors());

App.listen(Port, () => {
  console.log("Connect success!");
});

module.exports=App