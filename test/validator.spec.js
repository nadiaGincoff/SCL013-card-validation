// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  test('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });
<<<<<<< HEAD
  });
=======
});
>>>>>>> 00194d49a8ba9e6b7f4911fb006a82bd4fc04b24

  describe('validator.isValid', () => {
    test('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });
    test('debería retornar validator.isValid = true', () => {
<<<<<<< HEAD
      let resultado = validator.isValid("4546420024453980");
      expect(resultado).toBe(true);
=======
     let resultado = validator.isValid("4556364607935616");
     expect(resultado).toBe(true);
    });
>>>>>>> 00194d49a8ba9e6b7f4911fb006a82bd4fc04b24
    });

 
  describe('validator.maskify', () => {
    test('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });
<<<<<<< HEAD
    test('debería retornar tarjeta = ############5811', () => {
      let tarjeta = validator.maskify("4021629834945811");
      expect(tarjeta).toBe("############5811");
    });
  });


=======

    test('Debería retornar "############5616" para "4556364607935616"', () => {
      let tarjeta =validator.maskify("4556364607935616");
      expect(tarjeta).toBe("############5616")
    });
  });
>>>>>>> 00194d49a8ba9e6b7f4911fb006a82bd4fc04b24
