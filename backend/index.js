import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send("Hello, world!");
});

// Criar uma nova rota GET
app.get("/oi", function (req, res) {
  res.send("Olá, Mundo!");
});

app.listen(3000);
