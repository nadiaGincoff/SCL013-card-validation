// let creditCardNumber = "4546420024453980";

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
      console.log("El array invertido es: " + arrCreditCardNumber);
      // Creo un nuevo array para guardar los numeros finales
      let numeroMultiplicadoYSumado = [];
      // Recorro el array con el forEach, poniendo el numero a multiplicar[elemento del array], y la posicion[array]
      arrCreditCardNumber.forEach(function (numero, posicion) {
        // si la posicion es multiplo de 2, agrega el numero multiplicado por 2 al array.
        if ((posicion + 1) % 2 === 0) {
          let numeroMultiplicado = (numero * 2);
          // si el numero multiplicado es mayor a 10
          if (numeroMultiplicado >= 10) {
            let posicionPrimerDigito = numeroMultiplicado.toString().charAt(0, 1);
            let posicionSegundoDigito = numeroMultiplicado.toString().charAt(1, 2);
            let numeroSumado = parseInt(posicionPrimerDigito) + parseInt(posicionSegundoDigito);
            // console.log(posicion1);
            // console.log(posicion2);
            numeroMultiplicadoYSumado.push(numeroSumado);
          } else {
            numeroMultiplicadoYSumado.push(numeroMultiplicado);
          }
        // si no, agrega el numero sin multiplicar 
        } else {
          numeroMultiplicadoYSumado.push(numero);
        }
      })
      let suma = 0;
      for (let i = 0; i < numeroMultiplicadoYSumado.length; i++) {
        suma += numeroMultiplicadoYSumado[i];
        console.log("La suma es: " + suma);
      } if (suma % 10 === 0) {
        return true;
      } else {
        return false;
      }
    },
    /*Se crea el metodo (funcion) para enmascarar el numero de la tarjeta
    dejando los ultimos 4 digitos*/
    maskify: function(creditCardNumber){
      var numeral = "#"; //se define el simbolo con q se enmascara los digitos de la tarjeta//
      var tarjetaEnmascarada = creditCardNumber.slice(-4) //Se obtine los ultimos 4 digitos de la tarjeta//
      if (creditCardNumber.length > 4 ){ //si el largo de la tarjeta es mayor a 4 se enmascara//
          // Repite el numero de la tarjeta enmascardo exepto los ultimos 4/
          tarjetaEnmascarada = numeral.repeat(creditCardNumber.length-4) + creditCardNumber.slice(-4); 
      }
      console.log(tarjetaEnmascarada);
      return tarjetaEnmascarada;
  }
  };
  
  // validator.isValid(creditCardNumber);
  // validator.maskify(creditCardNumber);
  export default validator;