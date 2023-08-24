const bcrypt = require("bcrypt");
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mydb",
});

exports.register = (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const confirmPassword = req.body.confirmPassword;

	if (password !== confirmPassword) {
		res.status(400).send({ error: "Les mots de passe ne correspondent pas" });
		return;
	}

	bcrypt.hash(password, 10, (err, hash) => {
		if (err) {
			res.status(500).send({ error: err });
			return;
		}

		connection.query(
			"INSERT INTO account (email, password) VALUES (?, ?)",
			[email, hash],
			(error, results, fields) => {
				if (error) {
					res.status(500).send({ error });
				} else {
					res.send({ message: "Compte créé avec succès" });
				}
			}
		);
	});
};
