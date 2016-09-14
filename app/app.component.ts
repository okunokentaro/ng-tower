import {Component} from '@angular/core';

import {AppActions} from './app.actions';
import {AppDispatcher} from './app.dispatcher';
import {AppStore} from './app.store';
import {FrameService} from './frame.service';
import {TimeService} from './time.service';

@Component({
  selector  : 'tw-app',
  template  : `
    <style>
      :host {
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }
      #screen {
        display: block;
        width: 90vw;
        height: 90vh;
        overflow: scroll;
      }
    </style>
    <div id="screen">
      <tw-landscape></tw-landscape>
    </div>
  `
})
export class AppComponent {

  private clock: string;

  constructor(private dispatcher: AppDispatcher,
              private store: AppStore,
              private frameService: FrameService,
              private timeService: TimeService,
              private actions: AppActions) {
    // noop
  }

  ngOnInit(): void {
    this.startMainLoop();
    this.store.getClock().subscribe((clock) => {
      this.clock = clock;
    });

    this.timeService.observable.subscribe((date) => {
      this.dispatcher.emitAll([
        this.actions.updatePartsOfDay(date),
        this.actions.updateClock(date)
      ]);
    });
  }

  private startMainLoop(): void {
    this.frameService.run();
  }

}
