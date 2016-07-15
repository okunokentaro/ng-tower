import {Injectable} from '@angular/core';

import {FrameService} from './frame.service';

export function getTimes(minute: number): [number, number] {
  const h = Math.floor(minute / 60);
  const m = Math.floor(minute % 60);
  return [h, m];
}

@Injectable()
export class TimeService {

  constructor(private frameService: FrameService) {
    const framePerMinute = (12 * 60) / this.frameService.frameLength;
    this.frameService.subscribe((frame) => {
      const time = getTimes(frame * framePerMinute);
      console.log(time);
    });
  }

}
