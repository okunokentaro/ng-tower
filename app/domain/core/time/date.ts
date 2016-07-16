import {AnyVal} from '../abstract/any-val';
import {Frame} from '../frame/frame';
import {Day} from './day';
import {Hour} from './hour';
import {Minute} from './minute';
import {PartsOfDay} from '../parts-of-day/parts-of-day';

export class Date extends AnyVal<[Day, Hour, Minute]> {

  static byFrame(f: Frame): Date {
    return new Date([
      Day.byFrame(f),
      Hour.byFrame(f),
      Minute.byFrame(f)
    ]);
  }

  toString(): string {
    return `${[this.v[0], this.v[1], this.v[2]]}`;
  }

  clock(): string {
    const h = this.v[1];
    const m = `0${this.v[2]}`.slice(-2);

    return `${h}:${m}`;
  }

  currentPartsOfDay(): PartsOfDay {
    return this.v[1].currentPartsOfDay();
  }

}
