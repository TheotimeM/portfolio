---
slug: "postfix"
title: Serveur d'envoi de mail
publishDate: 2020-03-02 00:00:00
img: /portfolio/assets/stock-1.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |
  Ce projet a eu lieu lors de mon stage dans l'entreprise Groupe Lecoq en juin et juillet 2024, durant lequel j'ai participé au développement d'une solution interne.
tags:
  - Docker
  - Postfix
  - MariaBD
  - PHP
---

##### Introduction
L’objectif de ce projet était de déployer une solution de serveurs d’envoi de mails automatique basée sur Postfix dans un environnement dockerisé.

Ce système permet aux utilisateurs de remplir un formulaire PHP, qui, une fois soumis, génère automatiquement un email envoyé aux services concernés afin de les informer des tâches à effectuer en fonction des choix sélectionnés.

Pour les administrateurs, ce projet intègre Postfix Admin, une interface web permettant de gérer les comptes email d’un domaine sans avoir à modifier manuellement les fichiers de configuration du serveur.

Le serveur mail repose sur Postfix pour l’envoi des mails et MariaDB pour stocker les informations des comptes.

##### Mon investissement dans le projet
Dans le cadre de ce projet, je me suis principalement occupé de la conteneurisation de l’application. J’ai conçu et optimisé les fichiers Dockerfile et Docker Compose pour qu'ils puissent déployer correctement le service Postfix.

L’une des grandes difficultés du projet a été d’assurer le bon fonctionnement de Postfix dans un environnement conteneurisé. Initialement pris en charge par un autre intervenant, le projet m’a été confié en niveau 2, en relai au chef de projet précédent. Lors du déploiement, j’ai rencontré des erreurs bloquantes, nécessitant une investigation approfondie. 

Pour résoudre ces problèmes, j’ai mis en place des logs de déploiement afin de mieux comprendre les points de blocage.
Cependant, les logs n'étant pas suffisants, j'ai dû plonger en profondeur dans la documentation officielle de Postfix. Cela m’a permis de mieux maîtriser ses mécanismes internes et de déployer le service de manière propre, et de corriger toutes les erreurs.

##### Bilan
Ce projet m’a offert une expérience précieuse avec Docker, un outil que j'ai découvert lors de ce projet. 

Il m’a également permis de renforcer considérablement ma compréhension du déploiement de services web, en particulier avec Postfix. 

Par ailleurs, j’ai développé une meilleure méthodologie de débugage, en apprenant à exploiter les logs et à approfondir la documentation technique pour résoudre les problèmes complexes.
