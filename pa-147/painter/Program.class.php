<?php

class Program {

	protected $prog;

	private $rectangle;

	private $square;

	private $ellipse;

	private $circle;

	private $triangle;

	public function __construct()
	{
		$this->prog = [];
		$this->rectangle = new Rectangle('firebrick', 50, 20, 1,100, 200);
		$this->square = new Square('deepskyblue', 400, 200, 0.5, 100);
		$this->ellipse = new Ellipse('seagreen', 600, 180, 1, 40, 80);
		$this->circle = new Circle('gold', 300, 250, 0.33, 180);
		$this->triangle = new Triangle('purple', 0.75, 60, 60, 200, 250, 60, 250);
	}

	public function addShape($shape)
    {
        // Ajout d'un objet géométrique au tableau d'objets.
        array_push($this->prog, $shape);
    }

	public function draw() {
		$this->addShape($this->rectangle->createForm());
		$this->addShape($this->square->createForm());
		$this->addShape($this->ellipse->createForm());
		$this->addShape($this->circle->createForm());
		$this->addShape($this->triangle->createForm());

		foreach ($this->prog as $shape) {
			echo $shape;
		}
			
	}

}