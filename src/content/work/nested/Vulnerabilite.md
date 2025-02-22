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

Les graphes d'attaque probabilistes apportent une mise en évidence à ce problème en modélisant non seulement les vulnérabilités isolées, 
mais aussi les enchaînements d'exploits possibles. 
De plus, les graphes d'attaques probabilistes permettent d'estimer la probabilité de réussite de chaque exploit permettant ainsi de quantifier le risque de manière objective et mesurable, 
plutôt que de s'appuyer uniquement sur l'intuition ou l'expérience des administrateurs système.

##### Objectif du projet
L'objectif du projet est de concevoir un graphe d'attaque probabiliste permettant de modéliser les relations entre les exploits et leur interaction avec les machines connectées sur un réseau.
Pour y parvenir, trois étapes sont nécessaires :

- Cartographier la topologie du réseau afin d’identifier les machines connectées et d’analyser les vulnérabilités associées à chacune d’elles.

- Concevoir un moteur d'inférence modélisant la propagation des attaques en analysant les relations entre machines, accès et vulnérabilités pour identifier les chemins d'attaque exploitables.

- Développer des algorithmes pour générer des graphes d'attaque probabilistes, estimant la probabilité de succès de chaque chemin d’attaque.

##### Mon rôle dans le projet
Dans le cadre de ce projet, je suis principalement en charge du développement du moteur d’inférence et des algorithmes de construction de graphes d’attaque probabilistes. 

Pour le moteur d'inférence, cela implique de définir les règles logiques régissant la propagation des attaques, en modélisant les liens entre machines, accès et vulnérabilités. L’objectif est de formaliser comment une attaque peut évoluer à travers le réseau, notamment en déterminant comment l’exploitation d’une vulnérabilité permet d’obtenir de nouveaux accès facilitant les futures attaques.

En parallèle, je développe les algorithmes permettant de générer et analyser les graphes d’attaque, notamment en calculant les probabilités de succès des exploits en fonction de la configuration du réseau.

Une partie importante de mon travail consiste également à intégrer les données de la NVD (National Vulnerability Database) via ses API en fournissant l’ID CVE des vulnérabilités pour obtenir davantage d'informations. L'API permet notamment de récupérer l’Exploitability Score, utilisé pour calculer la probabilité d’exploitation de chaque vulnérabilité dans le graphe d'attaque.

##### Conclusion
Ce projet constitue ma première expérience concrète en cybersécurité, et me permet d’aller au-delà de la théorie en appliquant des modèles d’attaques à des cas réels. Il constitue aussi une expérience de développement directement utile, car il répond à un besoin actuel des entreprises : mieux anticiper les attaques multi-étapes. Enfin, en intégrant les données de la NVD via ses API, je développe des compétences en extraction et exploitation de données pour automatiser la gestion des vulnérabilités.