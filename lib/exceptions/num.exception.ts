export class NumException extends Error {
  name: 'NumException';

  /**
   * @constructor
   * @param {string} message
   */
  constructor(message: string) {
    super(message);
  }
}
