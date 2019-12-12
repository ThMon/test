<?php

class Circle extends Shape {
	private $r;

	public function __construct($color, $x, $y, $opacity, $r)
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct($color, $x, $y, $opacity);

		$this->r = $r;

	}

	public function createForm() {
		return "<circle cx='".$this->x."' cy='".$this->y."' r='".$this->r."' fill='".$this->color."' opacity='".$this->opacity."' />";
	}

}


?>