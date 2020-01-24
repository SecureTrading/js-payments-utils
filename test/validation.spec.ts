// given
import each from 'jest-each';
import validation from '../src/validation';

describe('validation', () => {
  // given
  describe('luhnCheck', () => {
    // then
    each([
      ['', false],
      ['4111111111111110', false],
      ['4111111111111111', true],
      ['4111111111111112', false],
      ['5200000000001005', true],
      ['5200000000001006', false]
    ]).test('should return desired value', (number, expected) => {
      expect(validation.luhnCheck(number)).toBe(expected);
    });
  });

});
