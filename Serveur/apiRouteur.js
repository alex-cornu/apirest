var express = require("express");
let usersControlleur = require("../Serveur/routes/usersControlleur");

exports.router = (function () {
  var apiRouteur = express.Router();

  apiRouteur.route("/users/register/").post(usersControlleur.register);
  apiRouteur.route("/users/login").post(usersControlleur.login);

  return apiRouteur;
})();
