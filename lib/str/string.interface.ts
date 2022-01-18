export interface IString {
  after(): this;
  camel(value: string): this;
  finish(): this;
  is(): this;
  slug(): this;
  startWith(): this;
  upper(value: string): this;
  capitalize(value: string): this;
  snake(): this;
  studly(): this;
  words(): this;
  title(): this;
  singular(): this;
  plural(value: string, count: number): this;
  start(): this;
  random(length: number): this;
  end(): this;
  endWith(): this;
  contains(): this;
  before(): this;
  lower(value: string): this;
  l(value: string, encoding: string): this;
  kebab(value: string): this;
  limit(value: string, limit: number, end: string): this;
  replaceFirst(): this;
  replaceLast(): this;
  ucFirst(value: string): this;
}
