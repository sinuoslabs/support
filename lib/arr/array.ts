import { ArrException } from '../exceptions';

export const Arr = class {
  /**
   * Sort array.
   * @param array
   * @param fn
   */
  static sort(array: Array<any>, fn?: (a, b) => number) {
    if (!Array.isArray(array)) throw new ArrException(`The received parameter is not an array`);

    if (array.length <= 0) throw new ArrException(`You parameter can not be empty`);

    return array.sort(fn);
  }
};
