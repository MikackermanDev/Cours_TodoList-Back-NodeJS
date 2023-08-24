// Importation des modules nécessaires
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
require("dotenv").config();
const PORT = process.env.PORT || 3500;

// Pour éviter les erreurs CORS Corss-Origin Resource Sharing
app.use(cors(corsOptions));

// permet d’analyser les requêtes entrantes avec des données JSON, c’est-à-dire des objets ou des tableaux. Cette fonction crée aussi un nouvel objet req.body contenant les données analysées, ou un objet vide si il n’y a pas de données à analyser, si le type de contenu ne correspond pas, ou si une erreur se produit.
app.use(express.json());

// Création du serveur
app.listen(PORT, () => console.log(`Serveur s'éxécute sur le PORT ${PORT}`));
