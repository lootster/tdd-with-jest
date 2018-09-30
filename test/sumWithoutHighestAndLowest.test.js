const sumWithoutHighestAndLowest = require('../src/sumWithoutHighestAndLowest.js');

// test cases

test('should sum all the numbers of the array except the highest and the lowest number', () => {
  expect(sumWithoutHighestAndLowest([6,2,1,8,10])).toEqual(16)
});

test('should also exclude ALL occurrences', () => {
  expect(sumWithoutHighestAndLowest([1,1,11,2,3])).toEqual(5)
});

