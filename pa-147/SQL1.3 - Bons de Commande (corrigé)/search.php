<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'root');

$pdo->exec('SET NAMES UTF8');


if(empty($_POST) == false ) {

	//var_dump($_POST);



	$query = $pdo->prepare
	(
	    'SELECT * FROM products WHERE productName LIKE "%"?"%"'
	);

	$query->execute([ $_POST['searchText'] ]);


	$products = $query->fetchAll(PDO::FETCH_ASSOC);

	var_dump($products);


}


include 'search.phtml';
?>