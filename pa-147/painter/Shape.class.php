<?php

abstract class Shape
{
	protected $color;

	protected $x;

	protected $y;

    protected $opacity;

    public function __construct($color, $x, $y, $opacity)
	{
		$this->color = $color;
        $this->x = $x;
        $this->y = $y;
		$this->opacity  = $opacity;
	}

	public function setColor($color)
	{
		$this->color = $color;
	}

    public function setLocation($x, $y)
    {
        $this->x = $x;
        $this->y = $y;
    }

	public function setOpacity($opacity)
	{
		$this->opacity = $opacity;
	}
}