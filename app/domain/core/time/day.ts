import {AnyVal} from '../abstract/any-val';
import {Frame} from '../frame/frame';
import {maxHours} from './hour';
import {maxMinutes} from './minute';

export const maxDays = 3;

export class Day extends AnyVal<number> {

  static byFrame(f: Frame) {
    const v = ~~(f.value / (maxHours * maxMinutes)); // Math.floor hack
    return new Day(v);
  }

}
