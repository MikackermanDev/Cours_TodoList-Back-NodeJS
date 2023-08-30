const allowedOrigins = require("../config/allowedOrigins");

const credentials = (req, res, next) => {
	const origin = req.headers.origin;
	if (allowedOrigins.includes(origin)) {
		res.header("Access-Control-Allow-Origin", origin);
		res.header("Access-Control-Allow-Credentials", true);

		// Nouvelles consignes de sécurité :

		// Enable HSTS -> force l'httpS://
		res.header(
			"Strict-Transport-Security",
			"max-age=31536000; includeSubDomains; preload"
		);
		// Enable X-Content-Type-Options
		res.header("X-Content-Type-Options", "nosniff");
		// Enable X-Frame-Options
		res.header("X-Frame-Options", "SAMEORIGIN");
		// Enable Content-Security-Policy
		res.header("Content-Security-Policy", "default-src 'self'");
	}
	next();
};

module.exports = credentials;

// Ces en-têtes peuvent aider à protéger l’application contre certaines attaques courantes,
// comme le détournement de clics, le sniffing de type MIME et les attaques par injection de contenu.
