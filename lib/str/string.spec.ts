import { Str } from './string';
import { StrException } from '../exceptions';

describe('Str', () => {
  let str = new Str();

  beforeEach(async () => {
    //
  });

  it('should be defined', () => {
    expect(str).toBeDefined();
  });

  describe('Property ucfirst', () => {
    it('should be have property ucfirst', () => {
      expect(str).toHaveProperty('ucfirst');
    });

    it('should be use ucfirst property', () => {
      expect(str.ucfirst('test')).toEqual('Test');
    });

    it('ucfirst not affected more word than first', () => {
      expect(str.ucfirst('hello world!')).toEqual('Hello world!');
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

  describe('Property lower', () => {
    it('should be have property lower', () => {
      expect(str).toHaveProperty('lower');
    });

    it('should be use lower property', () => {
      expect(str.lower('Test')).toEqual('test');
    });

    it('lower not affected more word than first', () => {
      expect(str.lower('Hello World!')).toEqual('hello world!');
    });
  });

  describe('Property palindrome', () => {
    it('should be have property palindrome', () => {
      expect(str).toHaveProperty('palindrome');
    });

    it('string is palindrome', () => {
      expect(str.palindrome('kayak')).toEqual(true);
      expect(str.palindrome('Kayak')).toEqual(true);
      expect(str.palindrome('KaYak')).toEqual(true);
      expect(str.palindrome('kayaK')).toEqual(true);
      expect(str.palindrome('KayaK')).toEqual(true);
      expect(str.palindrome('KaYaK')).toEqual(true);
    });

    it('string is not palindrome', () => {
      expect(str.palindrome('Hello')).toEqual(false);
    });

    it('palindrome method return exception if value is more 1 word', () => {
      expect(() => {
        str.palindrome('Hello world');
      }).toThrow('please define a single word');

      expect(() => {
        str.palindrome('Hello world');
      }).toThrowError(StrException);
    });
  });

  describe('Property lcfirst', () => {
    it('should be have property lcfirst', () => {
      expect(str).toHaveProperty('lcfirst');
    });

    it('should be use lcfirst property', () => {
      expect(str.lcfirst('TEST')).toEqual('tEST');
    });

    it('lcfirst not affected more word than first', () => {
      expect(str.lcfirst('Hello World!')).toEqual('hello World!');
    });
  });
});
