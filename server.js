// Importation des modules nécessaires
const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");

const config = require("./config/config");

//IMPORT de la fonction mikaLog
const { createMikaLog, deleteOldLog } = require("./tools/mikaLog");
const mikaLog = createMikaLog(__filename);
deleteOldLog(mikaLog);

// Handle options credentials check - avant CORS!
// and fetch cookies credentials requirement
app.use(credentials);
// Pour éviter les erreurs CORS Corss-Origin Resource Sharing
app.use(cors(corsOptions));

// permet d’analyser les requêtes entrantes avec des données JSON, c’est-à-dire des objets ou des tableaux. Cette fonction crée aussi un nouvel objet req.body contenant les données analysées, ou un objet vide si il n’y a pas de données à analyser, si le type de contenu ne correspond pas, ou si une erreur se produit.
app.use(express.json());

// routes (systeme de login)

// Connection à la DB PUIS écoute du PORT
const connectToDb = require("./services/database.service");
connectToDb().then(() => {
	app.listen(config.API.PORT, () => {
		mikaLog(`Serveur s'éxécute sur le PORT ${config.API.PORT}`);
	});
});
