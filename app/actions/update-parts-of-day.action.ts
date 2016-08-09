import {Injectable} from '@angular/core';
import {Action, Next} from 'walts';

import {AppState} from '../app.store';
import {Date} from '../domain/core/time/date';

@Injectable()
export class UpdatePartsOfDayAction extends Action<AppState> {

  constructor() {
    super();
  }

  create(date: Date): Next<AppState> {
    return (state: AppState) => ({
      partsOfDay: date.currentPartsOfDay()
    } as AppState);
  }

}
