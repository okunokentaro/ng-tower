import {Injectable} from '@angular/core';

import {FrameService} from './frame.service';

export function frameToTimes(frame: number): [number, number, number] {
  const d = ~~(frame / (24 * 60)); // Math.floor hack
  const h = ~~((frame - 24 * 60 * d) / 60);
  const m = ~~((frame - 24 * 60 * d) % 60);
  return [d, h, m];
}

@Injectable()
export class TimeService {

  constructor(private frameService: FrameService) {
    this.frameService.subscribe((frame) => {
      const time = frameToTimes(frame);
      console.log(time);
    });
  }

}
