import {Injectable} from '@angular/core';

import {TimeService} from './time.service';

export function getTimes(minute: number): [number, number] {
  const h = Math.floor(minute / 60);
  const m = Math.floor(minute % 60);
  return [h, m];
}

@Injectable()
export class ClockService {

  constructor(private timeService: TimeService) {
    const framePerMinute = (12 * 60) / this.timeService.frameLength;
    this.timeService.subscribe((frame) => {
      const time = getTimes(frame * framePerMinute);
      console.log(time);
    });
  }

}
