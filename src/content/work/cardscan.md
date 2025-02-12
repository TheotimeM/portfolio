---
slug: "cardscan"
title: Cardscan
publishDate: 2024-06-01 00:00:00
img: /portfolio/assets/stock-2.jpg
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  Le projet CardScan s'inscrit dans le cadre du Projet Scientifique et Technique (PST) de 2ème année à l'ESIEA.
tags:
  - Python
  - Embarqué
  - Pilotage du projet
  - Méthode AGILE
  - Prix coup de coeur
---
##### Introduction
L'objectif de notre projet était de concevoir une machine automatisée capable de scanner des cartes à jouer et à collectionner provenant d'une pile de cartes, puis de les trier en fonction de leur prix dans deux bacs distincts.

Pour ce faire, nous avons opté pour l'utilisation d'un OCR (Reconnaissance Optique de Caractères) qui, à partir d'une caméra, détermine l'identifiant unique de chaque carte. En se basant sur cet identifiant, la machine peut consulter une base de données intégrée (stockée sur une carte SD connectée à une Raspberry Pi) pour récupérer le prix associé à chaque carte.

D’un point de vue mécanique, nous avons créé un mécanisme pour accueillir la pile de cartes à trier, un mécanisme pour pousser les cartes et un mécanisme permettant de trier les cartes dans les deux piles.

Au cours de ce projet, je me suis occupé du pilotage du projet et de la partie logicielle.


##### Pilotage du projet
Pour la partie pilotage, je me suis occupé de définir la méthodologie de travail utilisée en optant pour la méthode AGILE avec des réunions hebdomadaires.

De plus, j'ai créé des diagrammes de GANTT pour chaque équipe (hardware et software) à l'aide de TeamGantt.

En plus du suivi organisationnel, j’ai été responsable de la création des livrables, incluant les rapports de projet, les supports de présentation et les comptes-rendus de réunion.




##### Logiciel
Sur la partie logicielle, j’ai conçu l’architecture du logiciel, en veillant à une structure modulaire où chaque fonctionnalité est encapsulée dans un module dédié. Cette approche assure une meilleure clarté du code et facilite ainsi le débugage.

J’ai également participé au développement et à l’intégration des différents modules liés à l’interaction avec les composants hardware tels que la caméra, les capteurs et les servomoteurs. J’ai contribué à l’optimisation du logiciel pour garantir un temps de réponse suffisamment court afin de répondre aux exigences formulées dans le cahier des charges.

##### Conclusion
Ce projet m’a permis de consolider mes compétences en gestion de projet, en développement logiciel pour systèmes embarqués et en optimisation de l'architecture logicielle.

L’intégration de divers composants électroniques m’a également apporté une expérience précieuse en interaction hardware/software.

Le projet s'est terminé en juin 2024 lors de la présentation devant des jurys et d'autres étudiants lors des <a href="https://techday-paris.esiea.fr/projet/15/">Techdays</a>, un salon créé par l'ESIEA, où nous avons été récompensés du prix Coup de Cœur.