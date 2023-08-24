const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
			// || !origin à supprimer avant la mise en prod
			callback(null, true);
		} else {
			callback(new Error("Non autorisé par CORS"));
		}
	},
	optionsSuccessStatus: 200,
};

module.exports = corsOptions;
