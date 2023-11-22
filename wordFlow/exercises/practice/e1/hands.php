 <?php


$urlCorrecto = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e1/correcto.html";
$urlIncorrecto = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e1/Incorrecto.html";

function redirect($url)
{
   header('Location: ' . $url, true);
   die();
}

$izquierda = $_POST['izquierda'];
$derecha = $_POST['derecha'];
// echo '' .$derecha;
// echo '' .$izquierda;

// if (!empty($izquierda)&&!empty($derecha)) {
//     echo '<p>Edad: '.$age.'<br>';
//     echo 'Sexo: '.$sex.'</p>';
// }


if (($izquierda == 'Izquierda' && $derecha == 'Derecha') or ($izquierda == 'izquierda' && $derecha == 'derecha') or ($izquierda == 'izquierda' && $derecha == 'Derecha') or ($izquierda == 'Izquierda' && $derecha == 'derecha')){
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