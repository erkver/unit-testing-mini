const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions');

test('Should return 2', () => {
  const expected = 2;

  const actual = returnTwo();

  expect(actual).toEqual(expected);
});

test("Should return greeting with correct name", () => {
  const expected = 'Hello, James';

  const actual = greeing('James');

  expect(actual).toEqual(expected);
});

test("Should return greeting with correct name", () => {
  const expected = "Hello, Jill";

  const actual = greeting("Jill");
  
  expect(actual).toEqual(expected);
});

describe("Math Functions", () => {
  test("Should return correct added values", () => {
    const expected = 3;

    const actual = add(1, 2);

    expect(actual).toEqual(expected);
  });

  test("Should return correct added values", () => {
    const expected = 14;

    const actual = add(5, 9);

    expect(actual).toEqual(expected);
  });

  test("Should return correct multiplied values", () => {
    const expected = 4;

    const actual = multiply(2, 2);

    expect(actual).toEqual(expected);
  });

  test("Should return correct multiplied values", () => {
    const expected = 20;

    const actual = multiply(4, 5);

    expect(actual).toEqual(expected);
  });

  test("Should return correct divided values", () => {
    const expected = 5;

    const actual = divide(10, 2);

    expect(actual).toEqual(expected);
  });

  test("Should return correct divided values", () => {
    const expected = 10;

    const actual = divide(100, 10);

    expect(actual).toEqual(expected);
  });

  test("Should return correct subtracted values", () => {
    const expected = 1;

    const actual = subtract(10, 9);
    
    expect(actual).toEqual(expected);
  });

  test("Should return correct subtracted values", () => {
    const expected = 5;

    const actual = subtract(40, 35);

    expect(actual).toEqual(expected);
  });
});



