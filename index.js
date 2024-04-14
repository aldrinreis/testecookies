const express = require("express");
const app = express();

var cookie = require("cookie-parser");
app.use(cookie());

//Objeto JSON para adicionar no cookie
let usuario = {
  nome: "thais",
  idade: "18",
};

app.get("/", (req, res) => {
  res.send("Seja bem Vindo ao teste de cookies.");
});

//ROTA ADICIONANDO O COOKIE
app.get("/adicionarUsuario", (req, res) => {
  res.cookie("usuarioDados", usuario, { expire: 400000 + Date.now() });
  res.send("Dados do usuário adicionado com sucesso!");
});

//VISUALIZAR DADOS DO COOKIE
app.get("/usuarios", (req, res) => {
  //Mostra os dados dos cookies
  res.send(req.cookies.usuarioDados);
});
/*
app.get("/usuariostotal", (req, res) => {
  //Mostra os dados dos cookies
  res.send(req.cookies);
});
*/
//Excluir/destruir os cookies
app.get("/logout", (req, res) => {
  res.clearCookie(); // usuarios entre ""
  res.send("Usuários desconectado com sucesso!");
});

app.listen(3000);
