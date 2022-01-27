import { ArrException } from '../exceptions';

type order = 'asc' | 'ASC' | 'desc' | 'DESC';

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

  /**
   * Short array contain only number values.
   *
   * @param array
   * @param order
   */
  static sortNumber(array: Array<number>, order: order = 'asc') {
    if (!Array.isArray(array)) throw new ArrException(`The received parameter is not an array`);

    if (array.length <= 0) throw new ArrException(`You parameter can not be empty`);

    if (array.some(isNaN)) throw new ArrException(`Your array must contain only numeric values`);

    if (order === 'asc' || order === 'ASC') {
      return this.sort(array, (a, b) => a - b);
    }

    return this.sort(array, (a, b) => b - a);
  }
};
