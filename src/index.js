import validator from './validator.js';

// console.log(validator);

///  VARIABLES 

const pantallaDeBienvenida = document.getElementById("pantalla-dividida");
const informacion = document.getElementById("informacion");
const btnRegistrarse = document.getElementById("btnRegistrarse");
const formulario = document.getElementById("formulario");
const btnEnviar = document.getElementById("btnEnviar");
const mensajeFinal = document.getElementById("mensajeFinal");
let elementosDeTarjeta = document.getElementById("numeroDeTarjeta").textContent;

// console.log(elementosDeTarjeta);

///   FUNCIONES 

// Mostrar el formulario y ocultar la primer pantalla de informacion y boton registro
function mostrarFormulario() {
    pantallaDeBienvenida.style.display = "none";
    informacion.style.display = "none";
    btnRegistrarse.style.display = "none";
    formulario.style.display = "block";
}

// 
function enviarFormulario() {
    formulario.style.display = "none";
    mensajeFinal.style.display = "block";
    let elementosDeTarjeta = document.getElementById("numeroDeTarjeta").value;
}

///   EVENTOS 

// Agrego funcionalidad al boton registrarse.
btnRegistrarse.addEventListener("click", function(event){
    mostrarFormulario();
}) 

// Agrego evento "submit" para enviar formulario 
btnEnviar.addEventListener("submit", function(event){
    enviarFormulario();
    // validator.isValid();
}) 