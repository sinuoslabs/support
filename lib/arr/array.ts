import { ArrException } from '../exceptions';

export const Arr = class {
  /**
   * Sort array.
   * @param array
   * @param fn
   */
  static sort(array: Array<any>, fn?: (a, b) => number) {
    if (!Array.isArray(array)) throw new ArrException(`Your argument is not array`);

    return array.sort(fn);
  }
};
