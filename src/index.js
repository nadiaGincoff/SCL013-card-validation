import validator from './validator.js';

// console.log(validator);

///  VARIABLES 

const pantallaDeBienvenida = document.getElementById("pantallaBienvenida");
const formulario = document.getElementById("formulario");
const btnRegistrarse = document.getElementById("btnRegistrarse");
const btnValidar = document.getElementById("btnValidar");
const btnEnviar = document.getElementById("btnEnviar");
const mensajeFinal = document.getElementById("mensajeFinal");

///   FUNCIONES 

// Mostrar el formulario y ocultar la primer pantalla de informacion y boton registro
function mostrarFormulario() {
    pantallaBienvenida.style.display = "none";
    formulario.style.display = "block";
}

function enviarFormulario() {
    formulario.style.display = "none";
    mensajeFinal.style.display = "block";
}

///   EVENTOS 
// Agrego funcionalidad al boton registrarse.
btnRegistrarse.addEventListener("click", function(event){
    mostrarFormulario();
})

btnValidar.addEventListener("click", function(event){
    let numeroDeTarjeta = document.getElementById("creditCardNumber").value;
    let tarjetaEnmascarada = validator.maskify(numeroDeTarjeta);
    let validar = validator.isValid(numeroDeTarjeta);
    if(validar){
        document.getElementById("tarjetaValidada").innerHTML = "Tarjeta válida"
        document.getElementById("creditCardNumber").value = tarjetaEnmascarada;
        btnEnviar.disabled = false;
        btnValidar.disabled = true;
    } else {
        document.getElementById("tarjetaValidada").innerHTML = "La tarjeta ingresada es incorrecta";
    }
})
// Agrego evento "submit" para enviar formulario 
formulario.addEventListener("submit", function(event){
    // Cancela el evento del submit, previene la pagina de recargarse  
    event.preventDefault();
    enviarFormulario();
})