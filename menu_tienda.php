<?php

    session_start();

    if(!isset($_SESSION['usuario'])){
        echo '
            <script>
                alert("Por favor debes iniciar sesión");
            </script>
        ';
        heder("location: login.php");
        session_destroy();
        die();
    }

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú de la Tienda Virtual</title>
    <link rel="stylesheet" href="assets/stylesmenu.css">
</head>
<body>
    <nav>
           <img src="imagenes/logomiapp.jpg" alt="" class="logo"class="logo" width="300" height="300">
    </nav>


    <div class="header">
        <h1>MUEBLES DE HOY</h1>
        <a href="php/cerrar_sesion.php">Cerrrar Sesion </a>
    </div>
    <div class="menu">
        <a href="carritotienda.html">Productos</a>
        <a href="pagina-de-pagos.html">Realizar pago</a>
        <a href="contacto.html">Contactanos</a>
        <a href="mi_cuenta.html">Mi Cuenta</a>
    </div>
    <div class="content">
        <h1>Bienvenido a Nuestra Tienda Virtual</h1>
        <p>Explora nuestros productos y disfruta de una experiencia de compra en línea fácil y segura.</p>
    </div>
</body>
</html>