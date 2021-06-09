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

// GET REQUEST
router.get("/", function (req, res) {
	try {
		sequelize.authenticate();
	   	sequelize.query("SELECT * FROM user").then(([results, metadata]) => {
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

// GET SIMPLE REQUEST
router.get('/:id', function(req, res) {
	try {
		sequelize.authenticate();
	   	sequelize.query("SELECT * FROM user WHERE id = " + req.params.id).then(([results, metadata]) => {
	   		if (results.length > 0) {
		    	res.json(results[0]);
	   		} else {
		    	res.json({
	    			message: 'Could not find informations for this id'
	    		});
	   		} 
	    })
	} catch (error) {
		res.json({
			status: 500,
			message: 'Can\'t connect to database'
		})
	}
});

module.exports = router;