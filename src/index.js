import validator from './validator.js';

// console.log(validator);

///  VARIABLES 

const formulario = document.getElementById("formulario");
const btnRegistrarse = document.getElementById("btnRegistrarse");
const btnValidar = document.getElementById("btnValidar");
const btnEnviar = document.getElementById("btnEnviar");
const mensajeFinal = document.getElementById("mensajeFinal");

///   FUNCIONES 

// Mostrar el formulario y ocultar la primer pantalla de informacion y boton registro
function mostrarFormulario() {
    document.getElementById("pantallaBienvenida").style.display = "none";
    formulario.style.display = "block";
}

function enviarFormulario() {
    formulario.style.display = "none";
    mensajeFinal.style.display = "block";
}

///   EVENTOS 
// Agrego funcionalidad al boton registrarse.
btnRegistrarse.addEventListener("click", function(){
    mostrarFormulario();
})

btnValidar.addEventListener("click", function(){
    let numeroDeTarjeta = document.getElementById("creditCardNumber").value;
    if (numeroDeTarjeta.length < 16) {
        return 
    }
    let tarjetaEnmascarada = validator.maskify(numeroDeTarjeta);
    let validar = validator.isValid(numeroDeTarjeta);
    if(validar){
        document.getElementById("tarjetaValidada").innerHTML = "Tarjeta válida"
        document.getElementById("creditCardNumber").value = tarjetaEnmascarada;
        btnEnviar.disabled = false;
        btnValidar.disabled = true;
    } else {
        document.getElementById("tarjetaValidada").innerHTML = "Tarjeta inválida";
    }
})
// Agrego evento "submit" para enviar formulario 
formulario.addEventListener("submit", function(){
    // Cancela el evento del submit, previene la pagina de recargarse  
    event.preventDefault();
    enviarFormulario();
})
