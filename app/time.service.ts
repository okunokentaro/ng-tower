import {Injectable} from '@angular/core';

import {Frame} from './domain/core/frame/frame';
import {Day} from './domain/core/time/day';
import {Hour} from './domain/core/time/hour';
import {Minute} from './domain/core/time/minute';
import {FrameService} from './frame.service';

export function frameToTimes(f: Frame): [Day, Hour, Minute] {
  return [
    Day.byFrame(f),
    Hour.byFrame(f),
    Minute.byFrame(f)
  ];
}

@Injectable()
export class TimeService {

  constructor(private frameService: FrameService) {
    this.frameService.subscribe((f) => {
      const time = frameToTimes(f);
      console.log(time);
    });
  }

}
