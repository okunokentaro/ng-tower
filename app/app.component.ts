import {Component} from '@angular/core';

import {AppDispatcher} from './app.dispatcher';
import {AppStore} from './app.store';
import {WindowProvider} from './window-provider.service';
import {FrameService} from './frame.service';
import {TimeService} from './time.service';

@Component({
  selector  : 'tw-app',
  directives: [],
  providers : [
    AppDispatcher,
    AppStore,
    WindowProvider,
    FrameService,
    TimeService
  ],
  template  : `
    <div>ng-tower</div>
  `
})
export class AppComponent {

  constructor(private dispatcher: AppDispatcher,
              private store: AppStore,
              private frameService: FrameService,
              private timeService: TimeService) {
    // noop
  }

  ngOnInit(): void {
    this.startMainLoop();
    this.store.observable.subscribe((state) => {
      console.log(state);
    });
  }

  private startMainLoop(): void {
    this.frameService.run();
  }

}
