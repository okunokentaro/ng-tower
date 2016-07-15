import {AnyVal} from '../abstract/any-val';
import {Frame} from '../frame/frame';
import {Day} from './day';
import {maxHours} from './hour';

export const maxMinutes = 60;

export class Minute extends AnyVal<number> {

  static byFrame(f: Frame) {
    const day = Day.byFrame(f);
    const v   = ~~((f.value - maxHours * maxMinutes * day.value) % maxMinutes); // Math.floor hack
    return new Minute(v);
  }

}

