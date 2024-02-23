const { default: expect } = require("expect");
const sum = require("./index.js");
const { multiply } = require("../functions.js");

/*test("Add numbers", function() {
  //ARRANGE
  const a = 1;
  const b = 2;

  //ACT
  const result = sum(a, b);

  //ARRANGE
  expect(result).toEqual(3);
});*/


describe('Sum Function test suite', () => {
  it('when I sent 2 numbers returned the sum of them', () => {

    //ARRANGE -> Inicializa los objetos y establece los valores q vamos a usar en el test
    const a = 1;
    const b = 2;

    //ACT -> Realiza la llamada al metodo a probar con los parametross
    const result = sum(a, b);

    //ARRANGE
    expect(result).toEqual(3);
  })
  it('should return null when I null annd null', () => {


    //ARRANGE
    const a = null;
    const b = null;

    //ACT
    const result = sum(a, b);

    //ARRANGE
    expect(result).toBe(0);
  })
  it('should return string concatened when I sent number and string', () => {


    //ARRANGE
    const a = 'null';
    const b = 1;

    //ACT
    const result = sum(a, b);

    //ARRANGE
    expect(result).toBe('null1');
  })
  it('should be return multiple when i sent two number', () => {
    //ARRANGE -> Inicializa los objetos y establece los valores q vamos a usar en el test
    const number1 = 4
    const number2 = 3

    //ACT -> Realiza la llamada al metodo a probar con los parametross
    const result = multiply(number1, number2)

    //ASSERT -> Comprueba q el metodo de pruebas se comporta como se espera
    expect(result).toBe(12)
  })
  it('Should be return sum when i sent two numbers', () => {
    //arrange
    const num1 = 6
    const num2 = 1

    //ACT
    const total = sum(num1, num2)

    //ASSERT
    expect(total).toBe(7)
  })
})
