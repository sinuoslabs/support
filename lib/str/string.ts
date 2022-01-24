import { IString } from './string.interface';
import { StrException } from '../exceptions';

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
   * @param {string} value
   * @param {string} needles
   * @return boolean
   */
  contains(value: string, needles: string | string[]): boolean {
    return needles.includes(value);
  }

  /**
   * Convert the given string to lower-case.
   * @param {string} value
   * @return string
   */
  lower(value: string): string {
    return value.toLowerCase();
  }

  /**
   * Check string is palindrome.
   * @param {string} value
   * @return boolean
   */
  palindrome(value: string): boolean {
    if (value.match(/[\W_]/g)) {
      throw new StrException(`please define a single word`);
    }

    return value.toLowerCase() === value.toLowerCase().split('').reverse().join('');
  }

  /**
   * Make a string's first character lowercase.
   * @method
   * @param {string} value
   * @return string
   */
  lcfirst(value: string): string {
    return value.charAt(0).toLowerCase() + value.substring(1);
  }
}
