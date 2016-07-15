import {AnyVal} from '../abstract/any-val';
import {Frame} from '../frame/frame';
import {Day} from './day';
import {maxMinutes} from './minute';

export const maxHours = 24;

export class Hour extends AnyVal<number> {

  static byFrame(f: Frame) {
    const day = Day.byFrame(f);
    const v   = ~~((f.value - maxHours * maxMinutes * day.value) / maxMinutes); // Math.floor hack
    return new Hour(v);
  }

}
