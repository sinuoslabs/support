import { IString } from './string.interface';

export class Str extends String implements IString {
  after(): this {
    return this;
  }

  before(): this {
    return this;
  }

  camel(value: string): this {
    return this;
  }

  capitalize(value: string): this {
    return this;
  }

  contains(): this {
    return this;
  }

  end(): this {
    return this;
  }

  endWith(): this {
    return this;
  }

  finish(): this {
    return this;
  }

  is(): this {
    return this;
  }

  kebab(value: string): this {
    return this;
  }

  limit(value: string, limit = 100, end = '...'): this {
    return this;
  }

  lower(value: string): this {
    value;
    return this;
  }

  plural(value: string, count: number): this {
    return this;
  }

  random(length = 16): this {
    return this;
  }

  replaceFirst(): this {
    return this;
  }

  replaceLast(): this {
    return this;
  }

  singular(): this {
    return this;
  }

  slug(): this {
    return this;
  }

  snake(): this {
    return this;
  }

  start(): this {
    return this;
  }

  startWith(): this {
    return this;
  }

  studly(): this {
    return this;
  }

  title(): this {
    return this;
  }

  ucFirst(value: string): this {
    return this;
  }

  upper(value: string): this {
    value.toUpperCase();

    return this;
  }

  words(): this {
    return this;
  }

  l(value: string, encoding: string): this {
    return this;
  }
}
