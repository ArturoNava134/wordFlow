 <?php


$urlCorrecto = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e24/correcto.html";
$urlIncorrecto = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e24/incorrecto.html";

function redirect($url)
{
   header('Location: ' . $url, true);
   die();
}

$conteo = $_POST['conteoP'];


if ($conteo == 7){
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