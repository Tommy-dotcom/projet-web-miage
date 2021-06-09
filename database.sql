-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  mer. 09 juin 2021 à 18:52
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `miage`
--

-- --------------------------------------------------------

--
-- Structure de la table `classe`
--

CREATE TABLE `classe` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `happen_at` datetime DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `classe_type_id` int(11) NOT NULL,
  `formation_id` int(11) NOT NULL,
  `modality_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `classe`
--

INSERT INTO `classe` (`id`, `title`, `happen_at`, `duration`, `created_by`, `classe_type_id`, `formation_id`, `modality_id`) VALUES
(2, 'Développement d applications Web 2.0', '2021-04-12 10:15:00', 2, 1, 2, 1, 1),
(4, 'Réunion orientation', '2021-04-15 00:00:00', 3, 2, 3, 6, 1),
(5, 'test de création de formation ', '2020-12-02 23:00:00', 2, 2, 1, 1, 1),
(6, 'Développement d applications Web 2.0', '2021-06-24 08:00:00', 3, 1, 4, 1, 1),
(7, 'Programmation répartie', '2021-06-24 10:00:00', 2, 3, 1, 1, 1),
(8, 'Applications objets conurrents', '2021-06-24 14:00:00', 2, 3, 1, 1, 1),
(9, 'Gestion de projets informatique', '2021-06-24 16:00:00', 3, 2, 2, 1, 1),
(10, 'Analyse Financière', '2021-06-25 09:00:00', 3, 2, 3, 1, 1),
(11, 'Test ', '2021-06-16 00:00:00', 3, 1, 2, 2, NULL),
(12, 'Test ', '2021-06-16 00:00:00', 3, 1, 2, 2, NULL),
(13, 'test de création de formation ', '2020-12-02 23:00:00', 2, 2, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `classe_type`
--

CREATE TABLE `classe_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `classe_type`
--

INSERT INTO `classe_type` (`id`, `name`) VALUES
(1, 'Cours'),
(2, 'TP'),
(3, 'TD'),
(4, 'Examen');

-- --------------------------------------------------------

--
-- Structure de la table `formation`
--

CREATE TABLE `formation` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `formation`
--

INSERT INTO `formation` (`id`, `name`) VALUES
(1, 'MIAGE'),
(2, 'IUT Informatique'),
(3, 'Toulouse Business School'),
(4, 'H.E.C.'),
(5, 'Sciences Po'),
(6, 'Ecoles des mines'),
(7, 'Polytechnique');

-- --------------------------------------------------------

--
-- Structure de la table `modality`
--

CREATE TABLE `modality` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `modality`
--

INSERT INTO `modality` (`id`, `name`) VALUES
(1, 'présentiel'),
(2, 'distanciel'),
(3, 'hybride');

-- --------------------------------------------------------

--
-- Structure de la table `presence`
--

CREATE TABLE `presence` (
  `id` int(11) NOT NULL,
  `student` int(11) NOT NULL,
  `classe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `formation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `user_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `user_type`) VALUES
(1, 'Thomas', 'Lamothe', 'thomaslamothe@free.fr', 1),
(2, 'Filiz', 'Kara', 'filiz.kara@toulouse.miage.fr', 1),
(3, 'Quentin', 'Guerin', 'guerin.quentin@toulouse.miage.fr', 1),
(5, 'Jimi', 'Hendrix', 'jimi.hendrix@ut-capitole.fr', 2);

-- --------------------------------------------------------

--
-- Structure de la table `user_type`
--

CREATE TABLE `user_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user_type`
--

INSERT INTO `user_type` (`id`, `name`) VALUES
(1, 'secrétariat'),
(2, 'enseignant ');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_created_by` (`created_by`),
  ADD KEY `fk_classe_type` (`classe_type_id`),
  ADD KEY `fk_formation` (`formation_id`),
  ADD KEY `fk_modality` (`modality_id`);

--
-- Index pour la table `classe_type`
--
ALTER TABLE `classe_type`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `formation`
--
ALTER TABLE `formation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `modality`
--
ALTER TABLE `modality`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `presence`
--
ALTER TABLE `presence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_student_presence` (`student`),
  ADD KEY `fk_classe_presence` (`classe`);

--
-- Index pour la table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_formation_student` (`formation_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_type` (`user_type`);

--
-- Index pour la table `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `classe`
--
ALTER TABLE `classe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `classe_type`
--
ALTER TABLE `classe_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `formation`
--
ALTER TABLE `formation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `modality`
--
ALTER TABLE `modality`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `presence`
--
ALTER TABLE `presence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user_type`
--
ALTER TABLE `user_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `classe`
--
ALTER TABLE `classe`
  ADD CONSTRAINT `fk_classe_type` FOREIGN KEY (`classe_type_id`) REFERENCES `classe_type` (`id`),
  ADD CONSTRAINT `fk_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_formation` FOREIGN KEY (`formation_id`) REFERENCES `formation` (`id`),
  ADD CONSTRAINT `fk_modality` FOREIGN KEY (`modality_id`) REFERENCES `modality` (`id`);

--
-- Contraintes pour la table `presence`
--
ALTER TABLE `presence`
  ADD CONSTRAINT `fk_classe_presence` FOREIGN KEY (`classe`) REFERENCES `classe` (`id`),
  ADD CONSTRAINT `fk_student_presence` FOREIGN KEY (`student`) REFERENCES `student` (`id`);

--
-- Contraintes pour la table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `fk_formation_student` FOREIGN KEY (`formation_id`) REFERENCES `formation` (`id`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_type` FOREIGN KEY (`user_type`) REFERENCES `user_type` (`id`);
