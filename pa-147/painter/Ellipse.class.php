<?php

class Ellipse extends Shape {
	private $xRadius;

	private $yRadius;


	public function __construct($color, $x, $y, $opacity, $xRadius, $yRadius)
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct($color, $x, $y, $opacity);

		$this->xRadius = $xRadius;
		$this->yRadius = $yRadius;
	}

	public function createForm() {
		return "<ellipse cx='".$this->x."' cy='".$this->y."' rx='".$this->xRadius."' ry='".$this->yRadius."' fill='".$this->color."' opacity='".$this->opacity."' />";
	}
}