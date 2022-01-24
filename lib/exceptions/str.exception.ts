export class StrException extends Error {
  name: 'StrException';

  constructor(message: string) {
    super(message);
  }
}
