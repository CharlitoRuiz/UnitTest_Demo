const isUpperCase = require('../sentences');

test('The string HELLO should return true', () => {
  expect(isUpperCase('HELLO')).toBe(true);
})
test('Testing for Hello (mixed)', () => {
  expect(isUpperCase('Hello')).toBe(false);
})
test('Testing for hello (lower)', () => {
  expect(isUpperCase('hello')).toBe(false);
})