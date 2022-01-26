import { Num } from './num';
import { NumException } from '../exceptions';

describe('Number', () => {
  let number: Num;

  beforeEach(async () => {
    number = new Num();
  });

  it('should be defined', () => {
    expect(number).toBeDefined();
  });

  describe('Random method', () => {
    it('should have method random', () => {
      expect(number).toHaveProperty('random');
    });

    it('Use random method', () => {
      expect(number.random(5)).not.toBeNull();
      expect(number.random(5)).not.toBeNaN();
      expect(number.random(5)).toBeGreaterThanOrEqual(0);
      expect(number.random(5)).toBeLessThanOrEqual(5);
    });

    it('should have method random and return value', () => {
      number.random = jest.fn().mockReturnValue(5);

      expect(number.random(5)).not.toBeNull();
      expect(number.random(5)).not.toBeNaN();
      expect(number.random(5)).toEqual(5);
    });
  });
});
