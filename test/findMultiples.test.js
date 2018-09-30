const findMultiples = require("../src/findMultiples");

// write test cases to ensure findMultiples() works as expected

test('should return multiples of 2 up to 6 ', () => {
  const expected = [2, 4, 6];
  expect(findMultiples(2, 6)).toEqual(expect.arrayContaining(expected));
});

test('should return multiples of 2 up to 10 ', () => {
  const expected = [2, 4, 6, 8, 10];
  expect(findMultiples(2, 11)).toEqual(expect.arrayContaining(expected));
});

test('should return multiples of 3 up to 12 ', () => {
  const expected = [3, 6, 9, 12];
  expect(findMultiples(3, 13)).toEqual(expect.arrayContaining(expected));
});

test('should return multiples of 5 up to 20 ', () => {
  const expected = [5, 10, 15, 20];
  expect(findMultiples(5, 24)).toEqual(expect.arrayContaining(expected));
});