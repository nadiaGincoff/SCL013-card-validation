import validator from './validator.js';
// import { parse } from "@babel/parser"

function mostrarFormulario() {
    let registro = document.getElementById("registro");
    let formulario = document.getElementById("formulario");
   
    registro.style.display = "none";
    formulario.style.display = "block";
}

console.log(validator);
