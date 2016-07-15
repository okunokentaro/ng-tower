import {AnyVal} from '../abstract/any-val';
import {Frame} from '../frame/frame';
import {Day} from './day';
import {maxMinutes} from './minute';

import {PartsOfDay} from '../parts-of-day/parts-of-day';
import {Night} from '../parts-of-day/night';
import {Dawn} from '../parts-of-day/dawn';
import {Morning} from '../parts-of-day/morning';
import {Afternoon} from '../parts-of-day/afternoon';
import {Dusk} from '../parts-of-day/dusk';
import {Evening} from '../parts-of-day/evening';

export const maxHours = 24;

export class Hour extends AnyVal<number> {

  static byFrame(f: Frame): Hour {
    const day = Day.byFrame(f);
    const v   = ~~((f.value - maxHours * maxMinutes * day.value) / maxMinutes); // Math.floor hack
    return new Hour(v);
  }

  currentPartsOfDay(): PartsOfDay {
    if (4 <= this.v && this.v < 6) {
      return new Dawn();
    }
    if (6 <= this.v && this.v < 11) {
      return new Morning();
    }
    if (11 <= this.v && this.v < 16) {
      return new Afternoon();
    }
    if (16 <= this.v && this.v < 18) {
      return new Dusk();
    }
    if (18 <= this.v && this.v < 23) {
      return new Evening();
    }
    // 23 <= v < 4
    return new Night();
  }

}
