<?php
    // se llama el achivo de conexion a la base de datos
    include 'conexion_be.php';
    // se crean las variables
    $cedula = $_POST['cedula'];
    $nombre_completo = $_POST['nombre_completo'];
    $apellidos = $_POST['apellidos'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $direccion = $_POST['direccion'];
    $contrasena = $_POST['contrasena'];
    // para encriptar la contraseña
    $contrasena = hash('sha512', $contrasena);

    $query = "INSERT INTO clientes(Cli_cedula, Cli_nombre, Cli_apellido, Cli_correo, Cli_telefono, Cli_direccion, Cli_contrasena)
                VALUES('$cedula', '$nombre_completo', '$apellidos', '$correo', '$telefono', '$direccion', '$contrasena') ";
    //verificar que el correo no se repita en la base de datos
    $verificar_correo = mysqli_query($conexion, "SELECT * FROM clientes WHERE cli_correo='$correo'");
    //codicion
    if(mysqli_num_rows($verificar_correo)>0){
        echo '
            <script>
                alert("Este correo ya está registrado, intenta con otro diferente");
                window.location: "../login.php";
            </script>
        ';
        // para que se cierre el ciclo
        exit;
    }

    $ejecutar = mysqli_query($conexion, $query);

    if($ejecutar){
        echo '
            <script>
                alert("usuario almacenado exitosamente");
                window.location = "../login.php";
            </script>
        ';
    }else{
        echo '
            <script>
                alert("intentelo de nuevo usuario no almacenado");
                window.location = "../login.php";
            </script>
        ';
    }

    mysqli_close($conexion);

?>