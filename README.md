# Projet Web Miage

[![Build Status](https://travis-ci.com/Tommy-dotcom/projet-web-miage.svg?token=rAyisTaP6NRY7iAE3TDo&branch=main)](https://travis-ci.com/Tommy-dotcom/projet-web-miage)

## Front-End

Nous nous proposons d'utiliser **Angular** pour le développement du front-end et de fournir les différents templates.

D'un point de vue graphique, nous utilisons Bootstrap en bibliothèque de composant HTML/CSS.

Sachant qu'il serait fastidieux de n'utiliser que CSS pour nos stylisations. Nous utiliserons le pré-processeur **Sass** dans sa synthaxe *SCSS*

## Back-End

Nous nous proposons d'utiliser **NodeJS** pour le développement du back-end et de fournir des endpoints à une API qui sera utilisé en Front.

### Création de la base

Le script `database.sql` permet de créer une base de données contenant certaines sources de bases à l'application.

Pour éviter de pousser sur la remote les mots de passes et identifiants de connexion à nos bases respectives, nous nous basons sur le fichier `credentials.json` :

```json
{
	"host": "localhost",
	"port": 8889,
	"user": "",
	"password": "",
	"database": ""
}
```