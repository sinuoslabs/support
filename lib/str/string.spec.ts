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
});
