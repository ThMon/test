<?php

class SvgMatrixRenderer {

    /**
     * @var string $template le chemin vers le fichier de template
     */
    private $template;

    /**
     * SvgMatrixRenderer constructor.
     * @param string $template Le chemin vers le fichier de template
     */
    public function __construct(string $template)
    {
        $this->template = $template;
    }

    /**
     * @param PixelAvatarMatrixInterface $matrix
     * @return string Le code SVG de l'avatar
     */
    public function render(PixelAvatarMatrix $matrix): string
    {
        // Démarrage de la tamporisation de sortie
        ob_start();

        // Initialisation de la taille de l'image, de la couleur de fond et de la couleur
        $size = $matrix->getSize();
        $grid = $matrix->getRandom();

        // Inclusion du template
        include $this->template;

        // On retourne le contenu du tampon de sortie et on l'efface
        return ob_get_clean();
    }
}