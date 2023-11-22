<?php


$urlCorrecto = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e39/correcto.html";
$urlIncorrecto = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e39/Incorrecto.html";

function redirect($url)
{
   header('Location: ' . $url, true);
   die();
}

$i1 = $_POST['i1'];
$i2 = $_POST['i2'];
$i3 = $_POST['i3'];


if (($i1 == 'p' && $i2 == 'b' && $i3 == 'b')){
    echo "correcto.";
    $url= $urlCorrecto;
    redirect($url);
}
else{
    $url= $urlIncorrecto;
    redirect($url);
    echo "incorrecto";
}

?>