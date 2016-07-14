import {Injectable} from '@angular/core';
import {State, Store} from 'walts';

import {AppDispatcher} from './app.dispatcher';

export class AppState extends State {
  // none
}

const INIT_STATE: AppState = {
  // none
};

@Injectable()
export class AppStore extends Store<AppState> {

  constructor(private dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }

}
