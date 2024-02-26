const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE -> Inicializa los objetos y establece los valores q vamos a usar en el test
    const a = 3;
    const b = 4;
    //ACT
    const result = functions.multiply(a, b);

    //ASSERT
    expect(result).toEqual(12);
  });

  it('should be return cero when I sent the number  cero', () => {
    //ARRANGE
    const a = 0;
    const b = 5;
    //ACT
    const result = functions.multiply(a, b);

    //ASSERT
    expect(result).toEqual(0);
  });

});

describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE

    //ACT
    const result = functions.isNull();
    //ASSERT
    expect(result).toBeNull();
  });

  it('should be dont throw errors', () => {
    //ARRANGE

    //ACT

    //ASSERT
    expect(() => functions.isNull()).not.toThrow();
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

  it('should be return false when I sent a not boolean parameter', () => {
    //ARRANGE
    const value = 'test';
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


  it('should be return undefined when I dont sent lastname', () => {
    //ARRANGE
    //ACT
    const result = functions.addLastName();
    //ASSERT
    expect(result.lastname).toBeUndefined();
    expect(result).toEqual({firstname: 'Pepito', lastname: undefined})
  });
})

