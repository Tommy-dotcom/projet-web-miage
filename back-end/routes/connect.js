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
    if (req.query.email != undefined) {
        try {
            sequelize.authenticate();
            sequelize.query("SELECT first_name as firstName, last_name as lastName FROM user WHERE user_type != 2 AND email = '" + req.query.email + "'").then(([results, metadata]) => {
                if (results.length > 0) {
                    res.json({
                        data: results[0],
                        isLogged: true,
                        isStudent: false
                    });
                } else {
                    sequelize.query("SELECT formation_id as formation, first_name as firstName, last_name as lastName FROM student WHERE email = '" + req.query.email + "'").then(([results, metadata]) => {
                        if (results.length > 0) {
                            res.json({
                                data: results[0],
                                isLogged: true,
                                isStudent: true
                            });
                        } else {
                            res.json({
                                isLogged: false,
                                isStudent: false
                            })
                        }
                    })
                }
            })
        } catch (error) {
            res.json({
                status: 500,
                message: 'Can\'t connect to database'
            })
        }
    }
});

module.exports = router;