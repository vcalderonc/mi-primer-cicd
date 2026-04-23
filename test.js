// test.js
// Importamos la función que queremos probar
const { sumar } = require('./app');

// Suite de pruebas
describe('Función sumar', () => {

  test('2 + 3 debe ser igual a 5', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('0 + 0 debe ser igual a 0', () => {
    expect(sumar(0, 0)).toBe(0);
  });

  test('números negativos: -1 + -1 debe ser -2', () => {
    expect(sumar(-1, -1)).toBe(-2);
  });

});