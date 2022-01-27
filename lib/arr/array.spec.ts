import { Arr } from './array';
import { ArrException } from '../exceptions';

describe('Arr', () => {
  // let arr: Arr;

  beforeEach(async () => {
    // arr = new Arr()
  });

  it('should be defined', () => {
    expect(Arr).toBeDefined();
  });

  describe('sort', () => {
    it('should have sort method', () => {
      expect(Arr).toHaveProperty('sort');
    });

    it('throw exception if parameter is not array', () => {
      expect(() => {
        Arr.sort([]);
      }).toThrow('You parameter can not be empty');
      expect(() => {
        Arr.sort([]);
      }).toThrowError(ArrException);
    });

    it('should use sort method with array number', () => {
      const array = [2, 1, 4, 10];

      expect(Arr.sort(array)).toEqual([1, 10, 2, 4]);
      expect(Arr.sort(array, (a, b) => a - b)).toEqual([1, 2, 4, 10]);
      expect(Arr.sort(array, (a, b) => b - a)).toEqual([10, 4, 2, 1]);
    });

    it('should use sort method with array number', () => {
      const string = ['a', 'd', 'b', 'e', 'c'];

      expect(Arr.sort(string)).toEqual(string);
      expect(Arr.sort(string, (a, b) => a.localeCompare(b))).toEqual(['a', 'b', 'c', 'd', 'e']);
      expect(Arr.sort(string, (a, b) => b.localeCompare(a))).toEqual(['e', 'd', 'c', 'b', 'a']);
    });
  });
});
