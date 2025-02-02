---
slug : "vulnerabilite"
title: Outil d'automatisation d'analyse de risque (En cours)
publishDate: 2025-05-01 00:00:00
img: /portfolio/assets/stock-3.jpg
img_alt: Pearls of silky soft white cotton, bubble up under vibrant lighting
description: |
  Ce projet s'inscrit dans le Stage-Projet que je réalise à l'UQAC, dans le cadre de mon échange universitaire avec l'ESIEA pour ma double diplomation.
tags:
  - Dev
  - Cybersécurité
  - Gestion des vulnérabilités
---
##### Introduction
La gestion des vulnérabilités est un enjeu majeur pour les entreprises, face à des menaces de plus en plus sophistiquées. 
Plus un réseau est vaste, plus il est exposé à un nombre croissant de vulnérabilités et d'attaques complexes.

Si de nombreux outils permettent aujourd’hui de détecter les vulnérabilités immédiates, notament ceux utilisant le Common Vulnerability Scoring System (CVSS), ils peinent à identifier les attaques qui exploitent plusieurs failles en cascade, appelées multi-stage exploits. 

Ces attaques avancées combinent plusieurs vulnérabilités pour contourner les défenses et atteindre des objectifs critiques.

Les graphes d'attaque probabilistes apportent une solution à ce problème en modélisant non seulement les vulnérabilités isolées, 
mais aussi les enchaînements d'exploits possibles. 
De plus les graphes d'attaques probabilistes permettent d'estimer la probabilité de réussite de chaque exploit, permettant ainsi de quantifier le risque de manière objective et mesurable, 
plutôt que de s'appuyer uniquement sur l'intuition ou l'expérience des administrateurs système.

##### Objectif du projet
L'objectif du projet est de concevoir un graphe d'attaque probabiliste afin de modéliser les relations entre les exploits et leur interaction avec les machines connectées sur un réseau.
Pour y parvenir, deux étapes sont nécessaires :

- Cartographier la topologie du réseau afin d’identifier les machines connectées et d’analyser les vulnérabilités associées à chacune d’elles.

- Développer des algorithmes permettant de générer des graphes d'attaque probabilistes, intégrant les dépendances entre exploits et estimant la probabilité de succès de chaque chemin d’attaque.

##### Mon rôle dans le projet
Dans le cadre de ce projet, je suis principalement en charge du développement des algorithmes permettant de construire et d'analyser les graphes d'attaque probabilistes. Cela implique la modélisation des liens entre les différentes vulnérabilités, ainsi que l'implémentation d'algorithmes pour calculer les probabilités de succès des exploits en fonction des configurations du réseau.

Une partie essentielle de mon travail consiste également à intégrer les données de la NVD (National Vulnerability Database) via ses API afin d'enrichir le modèle avec des informations actualisées sur les vulnérabilités connues. L'objectif est de rendre l'outil dynamique et capable d'évoluer avec l’apparition de nouvelles menaces. Pour cela, je mets en place des scripts d'extraction et de traitement des données, optimisant leur utilisation pour une intégration efficace dans le modèle probabiliste.

##### Conclusion
Ce projet est ma première expérience concrète en cybersécurité, me permettant d’aller au-delà de la théorie en appliquant des modèles d’attaque à des cas réels. Il représente aussi une expérience de développement directement utile, car il répond à un besoin actuel des entreprises : mieux anticiper les attaques multi-étapes. Enfin, en intégrant les données de la NVD via ses API, je développe des compétences en extraction et exploitation de données pour automatiser la gestion des vulnérabilités.