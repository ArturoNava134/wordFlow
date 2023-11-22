<?php


$urlCorrecto = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e30/correcto.html";
$urlIncorrecto = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e30/Incorrecto.html";

function redirect($url)
{
   header('Location: ' . $url, true);
   die();
}

$i1 = $_POST['i1'];
$i2 = $_POST['i2'];
$i3 = $_POST['i3'];
// echo '' .$derecha;
// echo '' .$izquierda;

// if (!empty($izquierda)&&!empty($derecha)) {
//     echo '<p>Edad: '.$age.'<br>';
//     echo 'Sexo: '.$sex.'</p>';
// }


if (($i1 == 'p' && $i2 == 'p' && $i3 == 'q')){
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