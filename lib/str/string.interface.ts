export interface IString {
  after(): this;
  camel(): this;
  finish(): this;
  is(): this;
  slug(): this;
  startWith(): this;
  upper(): this;
  snake(): this;
  studly(): this;
  words(): this;
  title(): this;
  singular(): this;
  plural(): this;
  start(): this;
  end(): this;
  endWith(): this;
  contains(): this;
  before(): this;
  lower(value: string): this;
  length(value: string, encoding: string): this;
  kebab(value: string): this;
  limit(value: string, limit?: number, end?: string): this;
  replaceFirst(): this;
  replaceLast(): this;
  ucFirst(): this;
}
