<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$monto = $_POST['monto'];
$metodo_pago = $_POST['metodo_pago'];

if ($metodo_pago == 'tarjeta') {
    $numero_tarjeta = $_POST['numero_tarjeta'];
    $fecha_expiracion = $_POST['fecha_expiracion'];
    $cvv = $_POST['cvv'];

    // Integrar con una pasarela de pagos como Stripe, PayPal, etc.
    // Este es un ejemplo básico de integración con Stripe
    require 'vendor/autoload.php';
    \Stripe\Stripe::setApiKey('tu_clave_secreta_de_stripe');

    try {
        $charge = \Stripe\Charge::create([
            'amount' => $monto * 100, // Monto en centavos
            'currency' => 'usd',
            'source' => [
                'number' => $numero_tarjeta,
                'exp_month' => substr($fecha_expiracion, 0, 2),
                'exp_year' => substr($fecha_expiracion, 3, 2),
                'cvc' => $cvv,
            ],
            'description' => 'Pago por ' . $nombre,
        ]);
        echo "Pago exitoso!";
    } catch (\Stripe\Exception\CardException $e) {
        echo 'Error: ' . $e->getMessage();
    }

} elseif ($metodo_pago == 'pse') {
    // Redirigir a la plataforma de pagos PSE
    $pse_url = "https://pse.plataforma.com/pagar?monto=$monto&email=$email";
    header("Location: $pse_url");
    exit();
}
?>