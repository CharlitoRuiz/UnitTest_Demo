const sum = require('../sum');

test('sum 1 + 2 are equal to 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum one negative number', () => {
  expect(sum(-3, 3)).toBe(0);
});

