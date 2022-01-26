import { INumber } from './num.interface';

export class Num implements INumber {
  /**
   * Random a number.
   * @param min
   * @param max
   */
  random(min: number, max?: number): number {
    if (max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return Math.floor(Math.random() * (min + 1));
  }
}
