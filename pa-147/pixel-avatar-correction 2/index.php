<?php

// Inclusion des dépendances
require 'class/SvgMatrixRenderer.php';
require 'class/PixelAvatarMatrix.php';
require 'class/Utils.php';

// Création d'un objet SvgMatrixRenderer, en paramètre du constructeur le chemin vers le fichier de template SVG
$renderer = new SvgMatrixRenderer('avatar.svg.tpl');

// Création de la matrice de l'avatar avec injection de l'objet Moteur de rendu
$matrix = new PixelAvatarMatrix($renderer);
$matrix->setSize(6);

// Génération d'un tableau de couleurs aléatoires
$colors = array_map(function() {
    return Utils::getRandomColor();
}, array_fill(0, 2, null));

$matrix->setColors($colors);

$svg = $matrix->render();

// Inclusion du template
include 'index.phtml';