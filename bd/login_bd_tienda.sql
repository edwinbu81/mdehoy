-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-08-2024 a las 23:05:01
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login_bd_tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `Adm_cod` int(10) NOT NULL,
  `Adm_nombre` text NOT NULL,
  `Adm_apellido` text NOT NULL,
  `Adm_correo` varchar(11) NOT NULL,
  `Adm_contraseña` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `Pro_codigo` int(20) NOT NULL,
  `Pro_nombre` text NOT NULL,
  `Prducto_valor` int(10) NOT NULL,
  `Pro_marca` varchar(11) NOT NULL,
  `Pro_descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `Cli_id` int(11) NOT NULL,
  `Cli_cedula` int(10) NOT NULL,
  `Cli_nombre` varchar(30) NOT NULL,
  `Cli_apellido` varchar(25) NOT NULL,
  `Cli_correo` varchar(30) NOT NULL,
  `Cli_telefono` int(10) NOT NULL,
  `Cli_direccion` varchar(50) NOT NULL,
  `Cli_contrasena` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`Cli_id`, `Cli_cedula`, `Cli_nombre`, `Cli_apellido`, `Cli_correo`, `Cli_telefono`, `Cli_direccion`, `Cli_contrasena`) VALUES
(11, 2000222555, 'carlos', 'salazar', 'carlosza@gmail.com', 604664433, 'avenida1909', '654321'),
(12, 2147483647, 'zulma', 'zapata', 'zulmazapata@gmail.com', 2147483647, 'avenida brazil', '654321'),
(13, 1002444555, 'marcos', 'pinto', 'pintomarcos@gmailcom', 2147483647, 'avenida cali1', 'e16d6b316f3bef1794c548b7a98b969a6aacb02f6ae5138efc1c443ae6643a6a77d92a0e33e382d6cbb7758f9ab25ab0f97504554d1904620a41fed463796fc2'),
(14, 1001000111, 'paola', 'perea', 'paolasal@gamail.com', 2147483647, 'calle1cra2', 'e16d6b316f3bef1794c548b7a98b969a6aacb02f6ae5138efc1c443ae6643a6a77d92a0e33e382d6cbb7758f9ab25ab0f97504554d1904620a41fed463796fc2'),
(15, 1222333444, 'jaime', 'santos', 'jaimesantos@gamil.com', 2147483647, 'calle sur casa azul #90', 'f1ecb37cc45de7b5e816917b042f258e37bd81e95a4352723c172d20095418d82e3c05838912b8801f4f0d215969c0188509868f26735eddc5293880ef0a4c06'),
(16, 1444555666, 'diana', 'gomez', 'dianagomez@gmail.com', 2147483647, 'calle los colores avenina 5', 'e16d6b316f3bef1794c548b7a98b969a6aacb02f6ae5138efc1c443ae6643a6a77d92a0e33e382d6cbb7758f9ab25ab0f97504554d1904620a41fed463796fc2'),
(17, 1777666555, 'Pablo', 'Marmol', 'pablomarmol21@gmail.com', 2147483647, 'calle las americas sur 20-30', 'e16d6b316f3bef1794c548b7a98b969a6aacb02f6ae5138efc1c443ae6643a6a77d92a0e33e382d6cbb7758f9ab25ab0f97504554d1904620a41fed463796fc2'),
(18, 1888999000, 'dario', 'gomez', 'dariogomez34@gmail.com', 2147483647, 'avenida silva de sousa casa34', 'e16d6b316f3bef1794c548b7a98b969a6aacb02f6ae5138efc1c443ae6643a6a77d92a0e33e382d6cbb7758f9ab25ab0f97504554d1904620a41fed463796fc2'),
(19, 321445667, 'andres', 'polo', 'andrespolo23@hotmail.com', 2147483647, 'calle azul casa amarilla', 'e16d6b316f3bef1794c548b7a98b969a6aacb02f6ae5138efc1c443ae6643a6a77d92a0e33e382d6cbb7758f9ab25ab0f97504554d1904620a41fed463796fc2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `Fac_cod` int(10) NOT NULL,
  `Fac_fecha` date NOT NULL,
  `Fac_valor` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago`
--

CREATE TABLE `pago` (
  `Pag_cod` int(10) NOT NULL,
  `Pag_valor` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `Pro_cod` int(20) NOT NULL,
  `Pro_nombre` text NOT NULL,
  `Pro_valor` int(10) NOT NULL,
  `Pro_descripcion` text NOT NULL,
  `Pro_marca` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`Pro_cod`, `Pro_nombre`, `Pro_valor`, `Pro_descripcion`, `Pro_marca`) VALUES
(1, 'comedor', 850000, 'hermoso comedror de 6 puestos', 'caucasico');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`Adm_cod`);

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`Pro_codigo`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`Cli_id`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`Fac_cod`);

--
-- Indices de la tabla `pago`
--
ALTER TABLE `pago`
  ADD PRIMARY KEY (`Pag_cod`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`Pro_cod`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `Adm_cod` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `Pro_codigo` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `Cli_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `Fac_cod` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pago`
--
ALTER TABLE `pago`
  MODIFY `Pag_cod` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `Pro_cod` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
