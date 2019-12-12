<?php

session_start();
include 'class/Database.class.php';
include 'class/User.class.php';

$test = '';
if(empty($_POST) == false) {
	var_dump($_POST);

	$user = new User();
	$test = $user->sendMailForChangePassword($_POST['email']);

	var_dump($test);
}

$template = 'forgotPassword';
include 'layout.phtml';

?>
