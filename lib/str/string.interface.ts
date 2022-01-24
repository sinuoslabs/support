export interface IString {
  ucfirst(value: string): string;
  contains(value: string, needles: string | string[]): boolean;
  lower(value: string): string;
  palindrome(value: string): boolean;
  lcfirst(value: string): string;
  removeSpecialCharacters(value: string): string;
  slug(value: string, separator?: string): string;
  replaceSpecialChars(value: string, replace?: string): string;
}
