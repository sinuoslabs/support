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

  /**
   * Determine if a given string contains a given substring.
   * @param value
   * @param needles
   * @return boolean
   */
  contains(value: string, needles: string | string[]): boolean {
    return needles.includes(value);
  }
}
