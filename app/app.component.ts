import {Component} from '@angular/core';

import {ACTIONS} from './actions/index';
import {UpdatePartsOfDayAction} from './actions/update-parts-of-day.action';
import {UpdateClockAction} from './actions/update-clock.action';

import {AppDispatcher} from './app.dispatcher';
import {AppStore} from './app.store';
import {WindowProvider} from './window-provider.service';
import {FrameService} from './frame.service';
import {TimeService} from './time.service';
import {PartsOfDay} from './domain/core/parts-of-day/parts-of-day';

@Component({
  selector  : 'tw-app',
  directives: [],
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
      .block {
        display: flex;
        width:  200px;
        height: 200px;
        font-size: 32px;
        justify-content: center;
        align-items: center;
      }
      .dawn {
        background-color: #F3F5DF;
        color: #333;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }    
      .morning {
        background-color: #CFEBF9;
        color: #333;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }    
      .afternoon {
        background-color: #abd1ff;
        color: #333;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }    
      .dusk {
        background-color: #F38F75;
        color: #333;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }    
      .evening {
        background-color: #1C3370;
        color: #ddd;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }
      .night {
        background-color: #121751;
        color: #ddd;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }
    </style>
    <div [ngClass]="classSet()">{{clock}}</div>
  `
})
export class AppComponent {

  private partsOfDay: PartsOfDay;
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
      this.partsOfDay = state.partsOfDay;
      this.clock      = state.clock;
    });

    this.timeService.observable.subscribe((date) => {
      this.dispatcher.emitAll([
        this.updatePartsOfDay.create(date),
        this.updateClock.create(date)
      ]);
    });
  }

  classSet(): any {
    return {
      [this.partsOfDay.className]: true,
      block                      : true
    };
  }

  private startMainLoop(): void {
    this.frameService.run();
  }

}
