export interface IString {
  ucFirst(value: string): string;
  contains(value: string, needles: string | string[]): boolean;
}
