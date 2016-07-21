import {Component} from '@angular/core';

import {ACTIONS} from './actions/index';
import {UpdatePartsOfDayAction} from './actions/update-parts-of-day.action';
import {UpdateClockAction} from './actions/update-clock.action';

import {AppDispatcher} from './app.dispatcher';
import {AppStore} from './app.store';
import {WindowProvider} from './window-provider.service';
import {FrameService} from './frame.service';
import {TimeService} from './time.service';

import {LandscapeComponent} from './landscape.component';

@Component({
  selector  : 'tw-app',
  directives: [LandscapeComponent],
  providers : [
    ACTIONS,
    AppDispatcher,
    AppStore,
    WindowProvider,
    FrameService,
    TimeService
  ],
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
              private updatePartsOfDay: UpdatePartsOfDayAction,
              private updateClock: UpdateClockAction) {
    // noop
  }

  ngOnInit(): void {
    this.startMainLoop();
    this.store.observable.subscribe((state) => {
      this.clock = state.clock;
    });

    this.timeService.observable.subscribe((date) => {
      this.dispatcher.emitAll([
        this.updatePartsOfDay.create(date),
        this.updateClock.create(date)
      ]);
    });
  }

  private startMainLoop(): void {
    this.frameService.run();
  }

}
