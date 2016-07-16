import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';

import {Date} from './domain/core/time/date';
import {FrameService} from './frame.service';

@Injectable()
export class TimeService {

  private subject: Subject<Date>;

  constructor(private frameService: FrameService) {
    this.subject = new Subject<Date>();

    this.frameService.observable.subscribe((f) => {
      const date = Date.byFrame(f);
      this.subject.next(date);
    });
  }

  get observable(): Subject<Date> {
    return this.subject;
  }

}
