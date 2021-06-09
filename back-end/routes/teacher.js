const express = require("express");
const router = express.Router();

// MysQL
const { Sequelize } = require('sequelize');

// Import des credentials
// Pour éviter de pousser les credentials sur la remote git, nous les stockons dans le fichier credentials.json
// qui est ignoré par le .gitignore
var credentials = require('../credentials.json');

// Connexion à MySQL
const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password, {
    dialect: "mysql",
    host: credentials.host,
    port: credentials.port
});

// GET TEACHERS REQUEST
router.get("/", function (req, res) {
    try {
        sequelize.authenticate();
        sequelize.query("SELECT * FROM user WHERE user_type = 2").then(([results, metadata]) => {
            res.json({
                data: results,
            });
        })
    } catch (error) {
        res.json({
            status: 500,
            message: 'Can\'t connect to database'
        })
    }
});

module.exports = router;