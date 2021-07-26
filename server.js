const express = require("express");
const expressEJSLayout = require("express-ejs-layouts");
const App = express();

const PORT = process.env.PORT || 3000;

App.use(expressEJSLayout);

App.set("view engine", "ejs");

App.get("/", (req, res) => {
  res.render("pages/index");
});

App.get("/informacoes", (req, res) => {
  res.render("pages/informacoes");
});

App.get("/download", (req, res) => {
  res.render("pages/download");
});

App.get("/sobre", (req, res) => {
  res.render("pages/sobre");
});

App.get("/contatar", (req, res) => {
  res.render("pages/contatar");
});

App.listen(PORT, () => {
  process.stdout.write(`Aplicação Rodando na porta: http://localhost:${PORT}`);
});

App.use(express.static(__dirname + "/public"));
App.use(express.static(__dirname + "/src"));
