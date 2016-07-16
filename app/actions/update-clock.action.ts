import {Injectable} from '@angular/core';
import {Action, Reducer} from 'walts';

import {AppState} from '../app.store';
import {Date} from '../domain/core/time/date';

@Injectable()
export class UpdateClockAction extends Action<AppState> {

  constructor() {
    super();
  }

  create(date: Date): Reducer<AppState> {
    return (state: AppState) => {
      let next = {} as AppState;
      next.clock = date.clock();
      return Promise.resolve(this.merge(state, next));
    };
  }

}
