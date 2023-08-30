// IMPORT de la fonction mikaLog
const { createMikaLog, deleteOldLog } = require("../tools/mikaLog");
const mikaLog = createMikaLog(__filename);
deleteOldLog(mikaLog);

const mysql = require("mysql2/promise");
const config = require("../config/config");

let db;
async function connectToDb() {
	if (!db) {
		const { host, port, database, user, password } = config.db; // récupère les infos dans la fichier "config.js", variable "db"
		mikaLog(`tentative de connection sur la database: ${database}`);
		db = await mysql.createConnection({
			host,
			port,
			database,
			user,
			password,
		});
		mikaLog(`Connexion à la base de données ${database} réussie !`);
	}
	return db;
}

module.exports = connectToDb;
