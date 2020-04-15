// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  test('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });
});

  describe('validator.isValid', () => {
    test('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });
    test('debería retornar validator.isValid = true', () => {
     let resultado = validator.isValid("4556364607935616");
     expect(resultado).toBe(true);
    });
    });

 
  describe('validator.maskify', () => {
    test('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    test('Debería retornar "############5616" para "4556364607935616"', () => {
      let tarjeta =validator.maskify("4556364607935616");
      expect(tarjeta).toBe("############5616")
    });
  });
