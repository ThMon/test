<?php

// Inclusion du fichier de classe Autoloader
require __DIR__ . '/class/Autoloader.php';

// Instanciation de l'autoloader et appel de la méthode register()
$autoloader = new Autoloader();
$autoloader->register();