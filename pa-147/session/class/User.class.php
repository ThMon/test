<?php

class User {


	public function addUser($post) {

		$hashPwd = $this->hashPassword($post['psw']);

		$database = new Database();

		$database->executeSql('INSERT INTO 
								users(email, psw, firstName, lastName, age) 
							   VALUES 
							   (?, ?, ?, ?, ?)',  

								[ 
									$post['email'], 
									$hashPwd, 
									$post['firstName'], 
									$post['lastName'], 
									$post['age'] 
								]);

		header('Location: index.php');
		exit();
	}


	public function connectUser($post) {

		$database = new Database();

		$user = $database->queryOne('SELECT * FROM users WHERE email =?', [ $post['email'] ]);

		var_dump($user);

		if( $user != false && $this->verifyPassword($post['psw'], $user['psw']) == true ) {
			$_SESSION['id'] = $user['id'];
			$_SESSION['email'] = $user['email'];
			$_SESSION['firstName'] = $user['firstName'];
			$_SESSION['lastName'] = $user['lastName'];
			$_SESSION['age'] = $user['age'];
		}

		header('Location: index.php');
		exit();
	}


	private function hashPassword($password)
    {

        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        return crypt($password, $salt);
    }

    private function verifyPassword($password, $hashedPassword)
	{
		return crypt($password, $hashedPassword) == $hashedPassword;
	}

	public function sendMailForChangePassword($email) {

		$database = new Database();
		$user = $database->queryOne('SELECT * FROM users WHERE email =?', [ $email ]);

		var_dump($user);

		if ($user != false) {
			$message = 'Cliquez sur le lien :<a href=changePassword.php?id="'.$user['psw'].'&mail='.$user['email'].'">cliquez ici</a>';


			// attention on envoie toujours l'url de change sur un mail !!!!!!!

			//mail($user['email'], 'change password', $message);


			// ça c'est mal !!!!!!!!!!!
			header('Location: changePassword.php?id='.$user['psw'].'&mail='.$user['email']);
			exit();

			return 'yes';
		} else {

			return 'no';

		}
		
	}

	 public function modifyPassword($password, $id, $email) {
    
    	$hashPwd = $this->hashPassword($password);
        
    	$database = new Database();

		$database->executeSql('UPDATE users SET psw = ? WHERE psw = ? AND email = ?', [ $hashPwd, $id, $email ]);

		header('Location: login.php');
		exit();
    
    
    }

}




?>