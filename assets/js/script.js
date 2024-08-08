document.getElementById("btn_iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registrar").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

//declarcion de variables
var contenedor_login_registro =document.querySelector(".contenedor_login-registro");
var formulario_login =document.querySelector(".formulario-login");
var formulario_registro =document.querySelector(".formulario-registro");
var caja_trasera_login =document.querySelector(".caja_trasera-login");
var caja_trasera_registro =document.querySelector(".caja_trasera-registro");

//funcion para corregir ancho ventana
function anchoPagina(){
    if(window.innerWidth > 850 ){
        caja_trasera_login.style.display = "block";
        caja_trasera_registro.style.display = "block";
    }else{
        caja_trasera_registro.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display ="block";
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "0px";
    }
}

anchoPagina();

//funcion para movimiento del formulario
function iniciarSesion(){

    if (window.innerWidth > 850) {
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_registro.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

    function register(){

        if (window.innerWidth > 850) {
            formulario_registro.style.display = "block";
            contenedor_login_registro.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_registro.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_registro.style.display = "block";
            contenedor_login_registro.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_registro.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1"
        }



}