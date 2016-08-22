import {Injectable} from '@angular/core';
import {Actions, Action} from 'walts';

import {AppState} from './app.store';
import {Date} from './domain/core/time/date';

@Injectable()
export class AppActions extends Actions<AppState> {

  constructor() {
    super();
  }

  updateClock(date: Date): Action<AppState> {
    return (state: AppState) => ({
      clock: date.clock()
    } as AppState);
  }

  updatePartsOfDay(date: Date): Action<AppState> {
    return (state: AppState) => ({
      partsOfDay: date.currentPartsOfDay()
    } as AppState);
  }

}
