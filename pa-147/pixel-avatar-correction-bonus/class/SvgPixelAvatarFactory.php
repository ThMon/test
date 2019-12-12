<?php

/**
 * Class SvgPixelAvatarFactory
 * Usine à fabriquer des avatars
 */
class SvgPixelAvatarFactory {

    /**
     * @param int $size La taille de l'avatar
     * @param int $numberOfColors Le nombre de couleurs différentes de l'avatar
     * @return PixelAvatarMatrix
     */
    static public function get(int $size = 5, int $numberOfColors = 2): PixelAvatarMatrix
    {
        // Création d'un objet SvgMatrixRenderer, en paramètre du constructeur le chemin vers le fichier de template SVG
        $renderer = new SvgMatrixRenderer('avatar.svg.tpl');

        // Création de la matrice de l'avatar avec injection de l'objet Moteur de rendu
        $matrix = new PixelAvatarMatrix($renderer);
        $matrix->setSize($size);

        // Génération d'un tableau de couleurs aléatoires
        $colors = array_map(function() {
            return Utils::getRandomColor();
        }, array_fill(0, $numberOfColors, null));

        $matrix->setColors($colors);

        return $matrix;
    }
}