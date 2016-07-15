export class AnyVal<T> {

  constructor(private v: T) {
    // noop
  }

  get value(): T {
    return this.v;
  }

  toString(): string {
    return `${this.v}`;
  }

}
