import {Injectable} from '@angular/core';
import {State, Store} from 'walts';

import {PartsOfDay} from './domain/core/parts-of-day/parts-of-day';
import {Night} from './domain/core/parts-of-day/night';
import {AppDispatcher} from './app.dispatcher';

export class AppState extends State {
  partsOfDay: PartsOfDay;
  clock: string;
}

const INIT_STATE: AppState = {
  partsOfDay: new Night(),
  clock     : ''
};

@Injectable()
export class AppStore extends Store<AppState> {

  constructor(private dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }

}
