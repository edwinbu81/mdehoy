<?php
    session_start();

    include 'conexion_be.php';

    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $contrasena = hash('sha512', $contrasena);
    
    //se validan que los datos ingresados se encuentren en la base de datos
    $validar_login = mysqli_query($conexion, "SELECT * FROM clientes WHERE cli_correo='$correo' and cli_contrasena='$contrasena'");
    // condicion para enviar a la pagina menu de la app
    if(mysqli_num_rows($validar_login) >0){
        $_SESSION['usuario']= $correo;
        header("location: ../menu_tienda.php");
    exit;
    }else{
        //alerta en caso que el usuario no exista
        echo '
            <script>
                alert("Usuario no existe, por favor verifique los datos e intente nuevamente");
                window.location = "..login.php";
            </script>
        ';
        exit;
    }