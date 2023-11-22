<?php


$urlCorrecto = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e37/correcto.html";
$urlIncorrecto = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e37/Incorrecto.html";

function redirect($url)
{
   header('Location: ' . $url, true);
   die();
}

$i1 = $_POST['i1'];
$i2 = $_POST['i2'];



if (($i1 == 'd' && $i2 == 'q')){
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