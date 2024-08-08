<?php

//*conexion a la base de datos *//
    $conexion = mysqli_connect("localhost", "root", "", "login_bd_tienda");

    /* para comprobar la conexxion*/
    if($conexion){
        echo 'Conectado exitosamente a la base de datos';
    }else{
        echo 'No se ha podido conectar a la base de datos';
    } 


    
?>