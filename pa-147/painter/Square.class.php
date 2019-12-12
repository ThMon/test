<?php

class Square extends Rectangle {
	
	public function __construct($color, $x, $y, $opacity, $width)
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct($color, $x, $y, $opacity, $width, $width);

	}
}