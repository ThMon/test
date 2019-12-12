<?php

class Autoloader
{

    /**
     * Enregistre notre autoloader
     */
    function register()
    {
        // Ajoute la méthode 'autoload' de la classe courante (Autoloader) à la pile d'appel d'autoload de PHP
        spl_autoload_register([$this, 'autoload']);
    }

    /**
     * Inclue le fichier correspondant à notre classe
     * @param $class string Le nom de la classe à charger
     */
    function autoload($classe)
    {
        require sprintf(__DIR__ . '/%s.php', $classe);
    }

}
