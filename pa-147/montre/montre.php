<?php
include 'Time.class.php'; 
$montre = new Time(10, 20, 10);
echo '<p>'.$montre->hours.' : '.$montre->minutes.' : '.$montre->seconds.'</p>';
$montre->addSecond();
echo '<p>'.$montre->hours.' : '.$montre->minutes.' : '.$montre->seconds.'</p>';
$montre->addMinute();
echo '<p>'.$montre->hours.' : '.$montre->minutes.' : '.$montre->seconds.'</p>';
$montre->addHour();
echo '<p>'.$montre->hours.' : '.$montre->minutes.' : '.$montre->seconds.'</p>';
?>