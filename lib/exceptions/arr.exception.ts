export class ArrException extends Error {
  name: 'ArrException';

  constructor(message: string) {
    super(message);
  }
}
