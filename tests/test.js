// test de la coonnection à la db (server.js)

const connectToDb = require("./services/database.service");

async function testDatabaseConnection() {
	const db = await connectToDb();
	const [rows] = await db.query("SELECT * FROM account");
	console.log(rows);
}

testDatabaseConnection();
