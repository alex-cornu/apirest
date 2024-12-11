//Imports
var express = require("express");
var bodyParseur = require("body-parser");
var apiRouteur = require("./apiRouteur").router;
console.log("Express importé avec succès !");
var server = express();

server.use(bodyParseur.urlencoded({ extended: true }));
server.use(bodyParseur.json());
server.use("/api/", apiRouteur);

// Configure root

server.get("/", function (req, res) {
  res.setHeader("Content-type", "text/html");
  res.status(200);
  res.send("<h1>Bienvenue sur mon super serveur hmtl de la mort qui tue</h1>");
});

//lauch
server.listen(8080, function () {
  console.log("serveur en écoute :) ");
});
