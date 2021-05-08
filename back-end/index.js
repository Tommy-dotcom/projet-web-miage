// On importe Express
let express = require('express'),
	bodyParser = require('body-parser');

// MysQL
const { Sequelize } = require('sequelize');

// Import des credentials
// Pour éviter de pousser les credentials sur la remote git, nous les stockons dans le fichier credentials.json 
// qui est ignoré par le .gitignore
var credentials = require('./credentials.json');

// Connexion à MySQL 
const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password, {
    dialect: "mysql",
    host: credentials.host,
    port: credentials.port
});

// Import de Swagger pour la doc de l'API
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

// Création de l'application Express
const port = 8000;
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/formation", require("./routes/formation"));
app.use("/class_type", require("./routes/type"));
app.use("/classe", require('./routes/classe'));
app.use("/user", require('./routes/user'));
app.use("/student", require('./routes/student'));

const PORT = process.env.PORT || 8000;

// Création de la doc Swagger
app.use(
	"/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)
);

app.listen(PORT, () => {
	// Notification que l'on est online
	console.debug("Server listening on port: " + PORT);
});