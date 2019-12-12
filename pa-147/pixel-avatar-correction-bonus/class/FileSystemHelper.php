<?php

class FileSystemHelper {

    /**
     * Vérifie que tous les dossiers d'un chemin existent, sinon les crée
     * @param string $path Le chemin que l'on souhaite vérifier
     */
    static public function createFoldersFromPath(string $path)
    {
        $folders = explode('/', $path);

        array_reduce($folders, function($currentPath, $item){
            $currentPath .= $item . '/';
            if(!is_dir($currentPath)) {
                mkdir($currentPath, 755);
            }
            return $currentPath;
        }, '');
    }

    /**
     * @param string $content Le contenu textuel à enregistrer dans le fichier
     * @param string $path Le chemin vers le dossier dans lequel on souhaite enregistrer le fichier
     * @param string $extension L'extension du fichier
     * @param string|null $filename Le nom du fichier
     * @return string Le nom du fichier dans lequel on a écrit
     */
    static public function write(string $content, string $path, string $extension = 'txt', string $filename = null)
    {
        $filename = $filename ?? self::getRandomFilename() . '.' . $extension;
        self::createFoldersFromPath($path);

        if(substr($path, -1, 1) !== '/') {
            $path .= '/';
        }

        $file = fopen($path . $filename, 'w');
        fwrite($file, $content);
        fclose($file);

        return $filename;
    }

    /**
     * @return string
     */
    static public function getRandomFilename()
    {
        return md5(uniqid(rand(), true));
    }
}