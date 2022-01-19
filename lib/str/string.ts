import { IString } from './string.interface';

export class Str implements IString {
  /**
   * Make a string's first character uppercase.
   * @method
   * @param {string} value
   * @return string
   */
  ucFirst(value: string): string {
    return value.charAt(0).toUpperCase() + value.substring(1);
  }
}
