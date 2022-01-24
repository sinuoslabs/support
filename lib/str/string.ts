import { IString } from './string.interface';
import { StrException } from '../exceptions';

export class Str implements IString {
  /**
   * Make a string's first character uppercase.
   * @method
   * @param {string} value
   * @return string
   */
  ucfirst(value: string): string {
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

  /**
   * Remove all special characters.
   * @param {string} value
   * @return string
   */
  removeSpecialCharacters(value: string): string {
    return value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, '');
  }

  /**
   *
   * @param value
   * @param separator
   */
  slug(value: string, separator?: string): string {
    const cleanString = this.removeSpecialCharacters(value);

    return cleanString
      .trim()
      .toLowerCase()
      .replace(/[^\w-]/g, separator || '-');
  }

  /**
   * Replace all special characters by replace value
   * @param value
   * @param replace
   */
  replaceSpecialChars(value: string, replace?: string): string {
    return value.replace(/[^\w-]/g, replace || '');
  }
}
