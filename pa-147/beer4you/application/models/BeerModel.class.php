<?php

class BeerModel {

    public function getAllBeers() {
        $database = new Database();
         $sql = 'SELECT
                    *
                FROM beers';

        return $database->query($sql, []);
        
    }
    
}