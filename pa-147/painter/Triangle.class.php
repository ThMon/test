<?php

class Triangle extends Shape {

	private $x2;
	private $y2;
	private $x3;
	private $y3;


	public function __construct($color, $opacity, $x, $y, $x2, $y2, $x3, $y3)
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct($color, $x, $y, $opacity);

		$this->x2 = $x2;
		$this->y2 = $y2;
		$this->x3 = $x3;
		$this->y3 = $y3;
	}

	public function createForm() {
		return "<polygon points='".$this->x." ".$this->y." ".$this->x2." ".$this->y2." ".$this->x3." ".$this->y3."' fill='".$this->color."' opacity='".$this->opacity."' />";
	}

}


?>