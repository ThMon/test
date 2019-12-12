<?php
    $pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'root');
    $pdo->exec('SET NAMES UTF8');
    
    $query = $pdo->prepare
    (
        'SELECT * FROM employees'
    );
    
    $query->execute();

    $employees = $query->fetchAll(PDO::FETCH_ASSOC);
    
    //var_dump($employees);


    $query = $pdo->prepare
    (
        'SELECT * FROM offices WHERE officeCode = 1'
    );
    
    $query->execute();

    $office = $query->fetch(PDO::FETCH_ASSOC);
    
    var_dump($office);

    include 'pdo.phtml';
?>
