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
    return `${[this.value[0], this.value[1], this.value[2]]}`;
  }

  currentPartsOfDay(): PartsOfDay {
    return this.value[1].currentPartsOfDay();
  }

}
