// TODO:
// Preguntar por el numero de la tarjeta
// Pasar los numeros a un array en orden inverso
// Aplicar la operacion a los numeros de las posiciones parse
// Sumar los digitos y nuevos digitos
// Comprobar si es una tarjeta validTa

// import  from "@babel/types";

// let creditNumber = document.getElementById("targetNumber").value;

let creditCardNumber = "4546420024453980";

// 1st for() = variable contador = la longitud del string menos 1,
// ya que los array comienzan en 0
// i >= 0 porque 0 es mi posicion inicial 
// i-- recorro el for al inverso  

const validator = {

 isValid: function(creditCardNumber) {
    // pasar el string a array  
    let arrCreditCardNumber = [];
    // pasar de string a array 
    for (let i = creditCardNumber.length -1; i >= 0; i--) {
    // Devuelve el caracter de una posicion dada mediante char.At   
        let caracter = creditCardNumber.charAt(i);
    // Guardo cada caracter como un numero
        let numero = parseInt(caracter);
    // Agrego al array mediante push
        arrCreditCardNumber.push(numero);
    }
    console.log(arrCreditCardNumber + "FUNCIONAAAA ESOOOOO");
    


    // Creo un nuevo array para los numeros multiplicados
    let numberMultiplicate = [];
    // Recorro el array con el forEach, poniendo el numero a multiplicar[elemento del array], y la posicion[array]
    arrCreditCardNumber.forEach(function(number, posicion) {
    // si la posicion es multiplo de 2, agrega el numero multiplicado por 2 al array.
        if (posicion % 2 === 0) {
            let numberMultiplicado = (number * 2);
    // si el numero multiplicado es mayor a 10
            if (numberMultiplicado >= 10) {
                let posicion1 = numberMultiplicado.toString().charAt(0, 1);
                let posicion2 = numberMultiplicado.toString().charAt(1, 2);
                let numberSumado = parseInt(posicion1) + parseInt(posicion2);
                console.log(posicion1);
                console.log(posicion2);
                console.log(numberSumado);
                numberMultiplicate.push(numberSumado);
            } 
    // si no, agrega el numero sin multiplicar 
        } else {
            numberMultiplicate.push(number);
        }
    })
    console.log(numberMultiplicate + "VAMOO");
 
 }
};




validator.isValid(creditCardNumber)


export default validator;