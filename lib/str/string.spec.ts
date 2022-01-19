import { Str } from './string';

describe('Str', () => {
  let str = new Str();

  beforeEach(async () => {
    //
  });

  it('should be defined', () => {
    expect(str).toBeDefined();
  });

  describe('Property ucFirst', () => {
    it('should be have property ucFirst', () => {
      expect(str).toHaveProperty('ucFirst');
    });

    it('should be use ucFirst property', () => {
      expect(str.ucFirst('test')).toEqual('Test');
    });

    it('ucFirst not affected more word than first', () => {
      expect(str.ucFirst('hello world!')).toEqual('Hello world!');
    });
  });

  describe('Property contains', () => {
    it('should be have property contain', () => {
      expect(str).toHaveProperty('contains');
    });

    it('should be use contains have value', () => {
      expect(str.contains('test', 'tes')).toEqual(false);
    });

    it('should be use contains have value', () => {
      expect(str.contains('test', 'test')).toEqual(true);
    });

    it('value not exist in array', () => {
      expect(str.contains('hello', ['fly', 'hell', 'bye'])).toEqual(false);
    });

    it('value not exist in array', () => {
      expect(str.contains('hello', ['fly', 'hello', 'bye'])).toEqual(true);
    });
  });
});
