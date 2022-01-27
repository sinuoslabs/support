import { ArrException } from '../exceptions';

export const Arr = class {
  /**
   * Sort array.
   * @param array
   * @param fn
   */
  static sort(array: Array<any>, fn?: (a, b) => number) {
    if (!Array.isArray(array)) throw new ArrException(`The received parameter is not an array`);

    return array.sort(fn);
  }
};
