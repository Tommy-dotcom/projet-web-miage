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
	   	sequelize.query("SELECT * FROM classe").then(([results, metadata]) => {
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

// POST REQUEST
router.post('/', function(req, res) {
	const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

	// vérification que tous les objets sont bien présents dans la requête
	if (!equals(Object.keys(req.body).sort(), ['classeType', 'createdBy', 'duration', 'formation', 'happenAt', 'title'])) {
    	res.json({
    		status: 400,
    		message: 'Bad request'
    	});

    	return;
	}

	try {
		const date = new Date(Date.parse(req.body.happenAt));

		sequelize.authenticate();
	   	sequelize.query(`INSERT INTO classe(title, happen_at, duration, created_by, classe_type_id, formation_id) VALUES('${req.body.title} ', '${date.toISOString().slice(0, 19).replace('T', ' ')}', ${req.body.duration}, ${req.body.createdBy}, ${req.body.classeType}, ${req.body.formation})`).then(([results, metadata]) => {
	    	res.json({
	    		status: 200,
	    		message: 'Successfully written'
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
	   	sequelize.query("SELECT classe.id, classe.title, classe.happen_at, classe.duration, user.first_name as creatorFirstName, user.last_name as creatorLastName, user.email as creatorEmail, classe_type.name as classeType, formation.name as formationName FROM user, formation, classe_type, classe WHERE user.id = classe.created_by AND classe.formation_id = formation.id AND classe.classe_type_id = classe_type.id AND classe.id = " + req.params.id).then(([results, metadata]) => {
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

// DELETE REQUEST
router.delete('/:id', function(req, res) {
	try {
		sequelize.authenticate();
	   	sequelize.query("DELETE FROM classe WHERE id = " + req.params.id).then(([results, metadata]) => {
	    	res.json({
	    		status: 200,
    			message: 'Successfully deleted'
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