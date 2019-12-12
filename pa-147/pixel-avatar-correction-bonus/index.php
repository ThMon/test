<?php

require __DIR__ . '/autoload.php';

$matrix = SvgPixelAvatarFactory::get(8,3);
$svg = $matrix->render();

$filename = FileSystemHelper::write($svg, 'avatars', 'svg');

include 'index.phtml';