const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected

test('should ', () => {
  expect(firstNonConsecutiveNumber([1, 3])).toEqual(3)
});

test('should ', () => {
  expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toEqual(4)
});

test('should return -10 for given array [-1, 0, 1, -10]', () => {
  expect(firstNonConsecutiveNumber([-1, 0, 1, -10])).toEqual(-10)
});

test('should return null if whole array is consecutive [1, 2, 3, 4, 5, 6]', () => {
  expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toEqual(null)
});
