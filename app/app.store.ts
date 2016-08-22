import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {State, Store} from 'walts';

import {PartsOfDay} from './domain/core/parts-of-day/parts-of-day';
import {Night} from './domain/core/parts-of-day/night';
import {Landscape} from './domain/application/landscape/landscape';

import {AppDispatcher} from './app.dispatcher';

export class AppState extends State {
  partsOfDay: PartsOfDay;
  clock: string;
  landscape: Landscape;
}

const INIT_STATE: AppState = {
  partsOfDay: new Night(),
  clock     : '',
  landscape : Landscape.blankLandscape()
};

@Injectable()
export class AppStore extends Store<AppState> {

  constructor(private dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }

  getPartsOfDay(): Observable<PartsOfDay> {
    return this.observable.map(s => s.partsOfDay);
  }

  getClock(): Observable<string> {
    return this.observable.map(s => s.clock);
  }

  getLandscape(): Observable<Landscape> {
    return this.observable.map(s => s.landscape);
  }

}
