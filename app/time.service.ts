import {Injectable} from '@angular/core';

import {Date} from './domain/core/time/date';
import {FrameService} from './frame.service';

@Injectable()
export class TimeService {

  constructor(private frameService: FrameService) {
    this.frameService.subscribe((f) => {
      const date = Date.byFrame(f);
      console.log(`${date}`);
    });
  }

}
