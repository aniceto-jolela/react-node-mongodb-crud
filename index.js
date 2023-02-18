const express = require("express");
const cors = require("cors");
const Port = 5000;

const App = express();
App.use(cors());

App.get("/dados", (req, res) => {
  res.json([{ nome: "Aniceto" }, { email: "author@gmail.com" }]);
});

App.listen(Port, () => {
  console.log("Connect port 5000");
});
