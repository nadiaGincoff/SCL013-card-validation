// import { stringLiteral } from "@babel/types";

let creditCardNumber = "4546420024453980";
// let creditCardNumber1 = [4,5,4,6,4,2,0,0,2,4,4,5,3,9,8,0];

// 1st for() = variable contador = la longitud del string menos 1,
// ya que los array comienzan en 0
// i >= 0 porque 0 es mi posicion inicial 
// i-- recorro el for al inverso  

const validator = {

    isValid: function (creditCardNumber) {
        // pasar el string a array  
        let arrCreditCardNumber = [];
        // pasar de string a array 
        for (let i = creditCardNumber.length - 1; i >= 0; i--) {
            // Devuelve el caracter de una posicion dada mediante char.At   
            let caracter = creditCardNumber.charAt(i);
            // Guardo cada caracter como un numero
            let numero = parseInt(caracter);
            // Agrego al array mediante push
            arrCreditCardNumber.push(numero);
        }

        console.log(arrCreditCardNumber);
        // Creo un nuevo array para guardar los numeros finales
        let numeroMultiplicadoYSumado = [];
        // Recorro el array con el forEach, poniendo el numero a multiplicar[elemento del array], y la posicion[array]
        arrCreditCardNumber.forEach(function (numero, posicion) {
            // si la posicion es multiplo de 2, agrega el numero multiplicado por 2 al array.
            if (posicion % 2 === 0) {
                let numeroMultiplicado = (numero * 2);
                // si el numero multiplicado es mayor a 10
                if (numeroMultiplicado >= 10) {
                    let posicionPrimerDigito = numeroMultiplicado.toString().charAt(0, 1);
                    let posicionSegundoDigito = numeroMultiplicado.toString().charAt(1, 2);
                    let numeroSumado = parseInt(posicionPrimerDigito) + parseInt(posicionSegundoDigito);
                    // console.log(posicion1);
                    // console.log(posicion2);
                    // console.log(numberSumado);
                    numeroMultiplicadoYSumado.push(numeroSumado);
                } else {
                    numeroMultiplicadoYSumado.push(numeroMultiplicado);
                }
                // si no, agrega el numero sin multiplicar 
            } else {
                numeroMultiplicadoYSumado.push(numero);
            }
        })
        console.log(numeroMultiplicadoYSumado);
    }

    
        
};
 // todavia haciendo pruebas !

 
      function sumarElementos(numeroFinal) {
          console.log(numeroFinal);
          let suma = 0;
          for (let i = 0; i = numeroFinal.length; i++){
              suma += numeroFinal[i];
          }
          console.log(sumarElementos(creditCardNumber1));
          return suma;
          
      }
      



// validator.isValid(creditCardNumber);

export default validator;