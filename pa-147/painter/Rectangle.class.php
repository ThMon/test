<?php

class Rectangle extends Shape
{
	protected $height;

    protected $width;

    public function __construct($color, $x, $y, $opacity, $height, $width)
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct($color, $x, $y, $opacity);

		$this->height = $height;
		$this->width  = $width;
	}


	public function setSize($width, $height)
	{
		$this->height = $height;
		$this->width  = $width;
	}

	public function createForm()
	{
		return "<rect x='".$this->x."' y='".$this->y."' width='".$this->width."' height='".$this->height."' fill='".$this->color."' opacity='".$this->opacity."' />";
		
	}
}


