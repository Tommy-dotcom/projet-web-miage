// On importe Express
let express = require('express'),
	bodyParser = require('body-parser');

// Import de Swagger pour la doc de l'API
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

// Options pour la documenation Swagger
const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: "Application Web MIAGE",
			version: '0.1.0',
			description: "Documentation de l'API de l'application web de la MIAGE",
			contact: {
				name: 'Thomas LAMOTHE',
				url: 'https://thomaslamothe.com',
				email: 'thomaslamothe@free.fr'
			},
		},
		servers: [
			{
				url: 'http://localhost:8000'
			}
		]
	},
	apis: ['./routes/*.js'],
};

// Création de l'application Express
const port = 8000;
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/basic", require("./routes/basic"));

const PORT = process.env.PORT || 8000;

// Création de la doc Swagger
app.use(
	"/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)
);

app.listen(PORT, () => {
	// Notification que l'on est online
	console.debug("Server listening on port: " + PORT);
});

