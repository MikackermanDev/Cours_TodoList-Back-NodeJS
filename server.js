// Importation des modules nécessaires
const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const app = express();
const port = 3030;

// Pour éviter les erreurs CORS Corss-Origin Resource Sharing
app.use(cors(corsOptions));

// Création du serveur
app.listen(port, () => {
	console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});

// Définition des routes pour test
app.get("/", (req, res) => {
	res.send("Bienvenue sur mikApi !");
});
