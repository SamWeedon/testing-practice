//const { default: test } = require("node:test");
const functions = require("./practice");

// tests for capitalize()
test("capitalizes a one character string", () => {
  expect(functions.capitalize("a")).toBe("A");
});

test("capitalizes first letter of multi-character string", () => {
  expect(functions.capitalize("i went to the concert")).toBe(
    "I went to the concert"
  );
});

test("doesn't crash even if first character isn't a letter", () => {
  expect(functions.capitalize("700 people went to the concert")).toBe(
    "700 people went to the concert"
  );
});

test("throws error if argument isn't a valid string", () => {
  expect(() => functions.capitalize(45)).toThrow("Not a valid string");
  expect(() => functions.capitalize("")).toThrow("Not a valid string");
});

// tests for reverseString()
test("reverses a string", () => {
  expect(functions.reverseString("abc")).toBe("cba");
});

test("throws error if argument isn't a string", () => {
  expect(() => functions.reverseString(45)).toThrow("Not a string");
});

test("doesn't break if an empty string is passed", () => {
  expect(functions.reverseString("")).toBe("");
});

// tests for the calculator object
test("tests for add()", () => {
  expect(functions.calculator.add(1, 8)).toBe(9);
  expect(functions.calculator.add(-1, 8)).toBe(7);
});

test("tests for subtract()", () => {
  expect(functions.calculator.subtract(1, 8)).toBe(-7);
  expect(functions.calculator.subtract(-1, 8)).toBe(-9);
});

test("tests for divide()", () => {
  expect(functions.calculator.divide(2, 1)).toEqual(2);
  expect(functions.calculator.divide(1, 2)).toBeCloseTo(0.5);
  expect(functions.calculator.divide(1, 0)).toBe(Infinity);
});

test("tests for multiply()", () => {
  expect(functions.calculator.multiply(2, 1)).toEqual(2);
  expect(functions.calculator.multiply(-3, 0)).toBeCloseTo(0); // returns negative zero (-0)
});

// tests for caesarCipher()
test("correctly encrypts string", () => {
  expect(functions.caesarCipher("abc", 3)).toBe("def");
});

test("correctly handles z-to-a wrapping", () => {
  expect(functions.caesarCipher("yzab", 3)).toBe("bcde");
});

test("preserves case", () => {
  expect(functions.caesarCipher("AbCd", 3)).toBe("DeFg");
});

test("preserves punctuation, symbols and whitespace", () => {
  expect(functions.caesarCipher("(a, b, c)!", 3)).toBe("(d, e, f)!");
});

// tests for analyzeArray()
test("tests for average()", () => {
  expect(functions.analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("tests for min()", () => {
  expect(functions.analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("tests for max()", () => {
  expect(functions.analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("tests for min()", () => {
  expect(functions.analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
