const functions = require("./functions.js");

describe('multiply two numbers', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE -> Inicializa los objetos y establece los valores q vamos a usar en el test
    const number1 = 3;
    const number2 = 4;
    //ACT -> Realiza la llamada al metodo a probar con los parametross
    const result = functions.multiply(number1, number2);

    //ASSERT
    expect(result).toEqual(12);
  });

  it('should be return cero when I sent to multiply by zero', () => {
    //ARRANGE
    const a = 0;
    const b = 5;
    //ACT
    const result = functions.multiply(a, b);

    //ASSERT
    expect(result).toBe(0)
  });

});

describe(' function is null', () => {
  it('should be return a value null if i sent a null value', () => {
    //ARRANGE
    const valueNull = null;
    //ACT
    const result = functions.isNull(valueNull);
    //ASSERT
    expect(result).toBeNull();
  });

});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const value = true;
    //ACT
    const result = functions.checkTruthy(value);
    //ASSERT
    expect(result).toBeTruthy();
  });

  it('should be return boolean when I sent a boolean', () => {
    //ARRANGE
    const value = false;
    //ACT
    const result = functions.checkTruthy(value);
    //ASSERT
    expect(result).toBeFalsy();
  });


})

describe('addLastName function', () => {
  it('should be return Martinez when I sent Martinez', () => {
    //ARRANGE
    const lastname = 'Martinez';
    //ACT
    const result = functions.addLastName(lastname);
    //ASSERT
    expect(result).toEqual({firstname: 'Pepito', lastname: 'Martinez'});
  });

})

